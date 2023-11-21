
import { createTRPCRouter } from "~/server/api/trpc";
import profesorRouter from "./routers/profesors";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    profesor: profesorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
