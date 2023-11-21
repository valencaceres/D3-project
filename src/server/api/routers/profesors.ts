import { clerkClient } from "@clerk/nextjs";
import { z } from "zod"
import type { User } from "@clerk/nextjs/dist/types/server";
import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

const profesorRouter = createTRPCRouter({
    createProfesor: privateProcedure.input(z.object({
        name: z.string().min(1).max(255),
        style: z.string().min(1).max(50),
        instagram: z.string().min(1).max(50),
    })).mutation(async ({ ctx, input }) => {
        const post = await ctx.db.profesors.create({
            data: {
                name: input.name,
                style: input.style,
                instagram: input.instagram,
            }
        })
        return post
    }),
    getAll: publicProcedure.query(async ({ctx}) => {
        const profesors = await ctx.db.profesors.findMany()
        console.log(profesors)
        return profesors
    
    })
})

export default profesorRouter