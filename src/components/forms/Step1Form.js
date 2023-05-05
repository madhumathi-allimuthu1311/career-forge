import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';


const Step1Form = ({ onClickNext, data }) => {
  const form = useForm({
    initialValues: {...data},
    validate: {
      role: (value) => (!(value?.length) ? 'Enter Job title' : null),
      company_name: (value) => (!(value?.length) ? 'Enter Company name' : null),
      industry: (value) => (!(value?.length) ? 'Enter Industry' : null),
    },
  });

  const onSubmit = (values) => {
    onClickNext(values);
  }
  return (
    <div class='mt-24'>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <TextInput
          withAsterisk
          placeholder='ex. UX UI Designer'
          label="Job title"
          mt={24}
          {...form.getInputProps('role')}
        />
        <TextInput
          withAsterisk
          label="Company name"
          placeholder="ex. Google"
          mt={24}
          styles={(theme) => ({
            label: {
              fontSize: 14,
            },
          })}
          {...form.getInputProps('company_name')}
        />
        <TextInput
          withAsterisk
          label="Industry"
          placeholder="ex. Information Technology"
          mt={24}
          styles={(theme) => ({
            label: {
              fontSize: 14,
            },
          })}
          {...form.getInputProps('industry')}
        />
        <div class='flex w-full mt-24'>
          <div class='w-1/2 mr-24'>
            <TextInput
              label="Location"
              placeholder="ex. Chennai"
              styles={(theme) => ({
                label: {
                  fontSize: 14,
                },
              })}
              {...form.getInputProps('location')}
            />
          </div>
          <div class='w-1/2'>
            <TextInput
              placeholder="ex. In-office"
              label="Remote type"
              {...form.getInputProps('remote_type')}
            />
          </div>
        </div>
        <div class='flex justify-end mt-40'>
          <button type='submit' class="bg-primary hover:bg-primary-dark text-text-white font-bold py-8 px-16 rounded-sm">
            Next
          </button>
        </div>

      </form>
    </div>
  )
}

export default Step1Form;