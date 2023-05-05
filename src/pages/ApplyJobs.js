import React, { useState } from "react";
import Step1Form from "../components/forms/Step1Form";
import Step2Form from "../components/forms/Step2Form";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { createJob, updateJobs } from "../services/job.services";
import { displayNotification } from "../commonComponents/notification/displayNotification";
import { COLORS } from '../constant'

const ApplyJobs = ({ openModal, closeModal, cardValue }) => {
  const [opened, { open, close }] = useDisclosure(openModal);
  const [formCount, setFormCount] = useState(1);
  const [data, setData] = useState(cardValue)

  const handleSave = (values) => {
    if (!values?.id) {
      createJob(values)
        .then(res => {
          displayNotification({ message: 'Job created successfully', color: COLORS.success })
          close();
        })
        .catch(err => {
          displayNotification({ message: 'Job creation failed try after sometime', color: COLORS.error })
          close();
        })
    }
    else {
      updateJobs(values)
        .then(res => {
          displayNotification({ message: 'Job updated successfully', color: COLORS.success })
          close();
        })
        .catch(err => {
          displayNotification({ message: 'Job update failed, try after sometime', color: COLORS.error })
          close();
        })
    }
  }
  const onClickNext = (values) => {
    setData(values)
    setFormCount(2)
  }
  const onClose = () => {
    close();
    setFormCount(1);
    closeModal();
  }
  return (
    <div>
      <Modal
        opened={opened}
        size={'lg'}
        withCloseButton={false}
        onClose={onClose}
        centered
        styles={(theme) => ({
          title: {
            width: '100%'
          }
        })}
        title={
          <div class='flex justify-between items-center w-full'>
            <p>Create a Job</p>
            <p size={'sm'}>
              Step 1
            </p>
          </div>
        }>
        {
          formCount == 1 ? <Step1Form data={data} onClickNext={onClickNext} /> : <Step2Form data={data} handleSave={handleSave} />
        }
      </Modal>

    </div>
  )
}
export default ApplyJobs;