import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

const Step2Form = ({ data,handleSave }) => {
  const form = useForm({
    initialValues: {...data},
  });

  const onSubmit = (values) => {
    handleSave(values);
  }
  return (
    <div class='mt-24'>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <div class='flex justify-between items-end'>
          <div class='w-1/2 mr-24'>
            <TextInput
              placeholder="Minimum"
              label="Experience"
              withAsterisk
              {...form.getInputProps('min_experience')}
            />
          </div>
          <div class='w-1/2'>
            <TextInput
              placeholder="Maximum"
              withAsterisk
              {...form.getInputProps('max_experience')}
            />
          </div>
        </div>
        <div class='flex justify-between items-end mt-24'>
          <div class='w-1/2 mr-24'>
            <TextInput
              placeholder="Minimum"
              label="Salary"
              withAsterisk
              {...form.getInputProps('min_salary')}
            />
          </div>
          <div class='w-1/2'>
            <TextInput
              placeholder="Maximum"
              withAsterisk
              {...form.getInputProps('max_salary')}
            />
          </div>
        </div>
        <TextInput
          placeholder="ex. 100"
          label="Total employee"
          sx={{ marginTop: 24 }}
          withAsterisk
        />
        <div class='flex justify-end mt-24'>
          <button type="submit" class="bg-primary hover:bg-primary-dark text-text-white font-bold py-8 px-16 rounded-sm">
            Save
          </button>
        </div>
      </form>
    </div>

  )
}

export default Step2Form;