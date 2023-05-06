import { Radio, TextInput, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { COLORS, SIZES } from '../../constant'
import { createJob, updateJobs } from "../../services/job.services";
import { displayNotification } from "../../commonComponents/notification/displayNotification";

const Step2Form = ({ data, onClose }) => {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    initialValues: { ...data },
  });
  const handleSave = (values) => {
    setLoading(true);
    if (!values?.id) {
      createJob(values)
        .then(res => {
          setLoading(false);
          displayNotification({ message: 'Job created successfully', color: COLORS.success })
          window.location.reload(false);
          onClose();
        })
        .catch(err => {
          setLoading(false);
          displayNotification({ message: 'Job creation failed try after sometime', color: COLORS.error })
          onClose();
        })
    }
    else {
      updateJobs(values)
        .then(res => {
          setLoading(false);
          displayNotification({ message: 'Job updated successfully', color: COLORS.success })
          window.location.reload(false);
          onClose();
        })
        .catch(err => {
          setLoading(false);
          displayNotification({ message: 'Job update failed, try after sometime', color: COLORS.error })
          onClose();
        })
    }
  }

  const onSubmit = (values) => {
    handleSave(values);
  }
  return (
    <div class='mt-24'>
      <form onSubmit={form.onSubmit((values) => { !loading ? onSubmit(values) : null })}>
        <div class='flex justify-between items-end'>
          <div class='w-1/2 mr-24'>
            <TextInput
              placeholder="Minimum"
              label="Experience"
              {...form.getInputProps('min_experience')}
            />
          </div>
          <div class='w-1/2'>
            <TextInput
              placeholder="Maximum"
              {...form.getInputProps('max_experience')}
            />
          </div>
        </div>
        <div class='flex justify-between items-end mt-24'>
          <div class='w-1/2 mr-24'>
            <TextInput
              placeholder="Minimum"
              label="Salary"
              {...form.getInputProps('min_salary')}
            />
          </div>
          <div class='w-1/2'>
            <TextInput
              placeholder="Maximum"
              {...form.getInputProps('max_salary')}
            />
          </div>
        </div>
        <TextInput
          placeholder="ex. 100"
          label="Total employee"
          sx={{ marginTop: SIZES.padding6 }}
          {...form.getInputProps('total_employee')}
        />
        <Radio.Group
          mt={SIZES.padding6}
          name="favoriteFramework"
          label="Apply type"
          {...form.getInputProps('apply_type')}
        >
          <Group mt={SIZES.padding1}>
            <Radio
              styles={(theme) => ({
                label: {
                  color: COLORS.grayDark,
                },
              })}
              value="quick_apply"
              label="Quick Apply"
            />
            <Radio
              styles={(theme) => ({
                label: {
                  color: COLORS.grayDark,
                },
              })}
              value="external_apply"
              label="External Apply"
            />
          </Group>
        </Radio.Group>
        <div class='flex justify-end mt-24'>
          <button type="submit" class="bg-primary hover:bg-primary-dark text-text-white font-bold py-8 px-16 rounded-sm">
            {!loading ? 'Save' : 'Saving...'}
          </button>
        </div>
      </form>
    </div>

  )
}

export default Step2Form;