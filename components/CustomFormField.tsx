'use client'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/CaffeineForm"

interface CustomProps {
    control: Control<any>,
    fieldType: string,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disable?: boolean,
    dateFormat?: string,
    children?: React.ReactNode,
    maxLength?: number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    renderSkeleton?: (field: any) => React.ReactNode,

}

const RenderField = ( {field, props}: {field: any; props: CustomProps } ) => {
    const {fieldType, iconSrc, iconAlt, placeholder, maxLength, onChange} = props;

    switch (fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            maxLength={maxLength}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
        default:
          break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label, maxLength } = props;
  return (
    <FormField
    control={control}
    name={name}
    
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
        )}

        <RenderField field={field} props = {props} />

        <FormMessage className="shad-error"/>
      </FormItem>
    )}
  />
  )
}

export default CustomFormField