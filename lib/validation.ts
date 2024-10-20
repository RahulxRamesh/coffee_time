import { z } from "zod";

export const UserFormValidation = z.object({
    caffeine_type: z.string()
    .min(3, {message: "Caffeine intake type @ least 3 chars.",})
    .max(15, {message: "Caffeine intake type @ most 15 chars.",}),

    caffeine_amount: z.string()
    .min(3, {message: "Caffeine amount @ least 3 chars.",})
    .max(10, {message: "Caffeine amount @ most 10 chars.",}),

    time_ingested: z.string()
    .min(3, {message: "time taken @ least 3 chars.",})
    .max(10, {message: "time taken @ most 10 chars.",}),
  })