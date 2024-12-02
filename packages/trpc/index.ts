import { initTRPC } from "@trpc/server";
import { object, parse, string } from "valibot";

export const t = initTRPC.create();

const addTodoSchema = object({
  title: string(),
});

export const appRouter = t.router({
  todo: t.procedure.query(() => {
    return [{ id: 1, title: "Sample Todo", completed: false }];
  }),
  addTodo: t.procedure
    .input((input) => parse(addTodoSchema, input))
    .mutation(({ input }) => {
      return { id: Math.random(), title: input.title, completed: false };
    }),
});

export type AppRouter = typeof appRouter;
