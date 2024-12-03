import { initTRPC } from "@trpc/server";
import { object, string } from "valibot";
import { wrap } from "@typeschema/valibot";

export const t = initTRPC.create();

const addTodoSchema = object({
  title: string(),
});

export const appRouter = t.router({
  getTodo: t.procedure.query(() => {
    return [{ id: 1, title: "Sample Todo", completed: false }];
  }),
  addTodo: t.procedure.input(wrap(addTodoSchema)).mutation(({ input }) => {
    return { id: Math.random(), title: input.title, completed: false };
  }),
});

export type AppRouter = typeof appRouter;
