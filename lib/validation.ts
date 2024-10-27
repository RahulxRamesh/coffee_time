import { z } from "zod";

export const UserFormValidation = z.object({
    caffeine_type: z.string()
    .min(1, {message: "Caffeine intake type @ least 1 char.",})
    .max(20, {message: "Caffeine intake type @ most 20 chars.",}),

    caffeine_amount: z.string()
    .refine(value => {
      const numberValue = Number(value);
      return (
        !isNaN(numberValue) && 
        Number.isInteger(numberValue) && 
        numberValue >= 0 && 
        numberValue < 10000 &&
        value.length <= 4
      );
    }, { message: "Input must represent an integer between 0 and 9999." }),

    time_ingested: z.string()
    .min(3, {message: "time taken @ least 3 chars.",})
    .max(10, {message: "time taken @ most 10 chars.",}),
  })