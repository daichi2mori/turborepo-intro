import { type CreateTRPCReact, createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@turborepo-intro/trpc";

export const trpc: CreateTRPCReact<AppRouter, unknown, unknown> = createTRPCReact<AppRouter>();
