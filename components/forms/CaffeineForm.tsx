"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { calculateResult } from "@/lib/calculation"

export enum FormFieldType{
    INPUT = 'input',
    TEXTAREA = 'textarea',
    CHECKBOX = 'checkbox',
    SELECT = 'select',
    RADIO = 'radio',
    SKELETON = 'skeleton'
}
 
const CaffeineForm = () => {
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      caffeine_type: "",
      caffeine_amount: "",
      time_ingested: "",
    },
  })
 
  async function onSubmit({caffeine_type, caffeine_amount, time_ingested }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
       const userData = { caffeine_type, caffeine_amount, time_ingested };
       const result = calculateResult(userData)
       setResult(result);
       setIsLoading(false);
      // const user = await calculateResultTime(userData);
      // if(user) router.push()
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
            <h1 className="header">How long does it take caffeine to leave your system? 🕵️ </h1>
            <p className="text-dark-700">Let's find out by entering the information below 👇🏼 </p>
        </section>

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="caffeine_type"
            label="caffeine type"
            placeholder="vanilla mocha latte.."
        />

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="caffeine_amount"
            label="amount"
            placeholder="100 mg ..."
        />

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="time_ingested"
            label="time taken"
            placeholder="3pm ..."
        />
       
        <SubmitButton isLoading={isLoading}>Calculate</SubmitButton>
      </form>
      {result !== null && (
                <div style={{ marginTop: '20px' }}>
                    <strong>Result: {result}</strong>
                </div>)}
    </Form>
  )
}

export default CaffeineForm