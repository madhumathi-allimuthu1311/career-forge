import React, { useState } from "react";
import Step1Form from "../components/forms/Step1Form";
import Step2Form from "../components/forms/Step2Form";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const ApplyJobs = ({ openModal, closeModal, cardValue }) => {
  const [opened, { open, close }] = useDisclosure(openModal);
  const [formCount, setFormCount] = useState(1);
  const [data, setData] = useState(cardValue)

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
            <p class='text-lg'>Create a Job</p>
            <p class='text-lg'>Step 1</p>
          </div>
        }>
        {
          formCount == 1 ? <Step1Form data={data} onClickNext={onClickNext} /> : <Step2Form data={data} onClose={onClose} />
        }
      </Modal>

    </div>
  )
}
export default ApplyJobs;