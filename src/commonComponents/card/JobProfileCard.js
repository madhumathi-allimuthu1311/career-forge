import React, { useState } from "react";
import { ActionIcon, Modal } from "@mantine/core";
import { IconEdit, IconTrash } from '@tabler/icons-react'
import ApplyJobs from "../../pages/ApplyJobs";
import { deleteJob } from "../../services/job.services";
import { displayNotification } from "../notification/displayNotification";
import { COLORS, IMAGE } from "../../constant";
import { useDisclosure } from "@mantine/hooks";
import { currencyFormat } from "../currency/CurrencyFormatter";

const JobProfileCard = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false)

  const onEdit = () => {
    setOpenModal(true)
  }
  const onDelete = () => {
    setLoading(true)
    deleteJob(data)
      .then(res => {
        displayNotification({ message: 'Job updated successfully', color: COLORS.success })
        close();
        window.location.reload(false);
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        displayNotification({ message: 'Job update failed, try after sometime', color: COLORS.error })
        close();
      })

  }
  const { company_name, industry, location, remote_type, min_experience, max_experience, min_salary, max_salary, total_employee, apply_type, role } = data
  return (
    <>
      <div class='m-2'>
        <div class="border-gray-400 px-24 py-16 bg-white rounded-md flex flex-row leading-normal">
          <div class='mr-8'>
            <img src={IMAGE.logo} alt='logo' />
          </div>
          <div class='w-full'>
            <div>
              <div class='flex items-center justify-between w-full'>
                <p class='font-semibold text-xl'>{role}</p>
                <div class='flex items-center'>
                  <ActionIcon onClick={onEdit} class='mr-12 text-gray-dark' variant="transparent"><IconEdit size={28} /></ActionIcon>
                  <ActionIcon onClick={open} class='text-gray-dark' variant="transparent"><IconTrash size={28} /></ActionIcon>
                </div>
              </div>
              <p class='text-base text-dark font-normal'>{company_name} - {industry}</p>
              <p class='text-gray-dark text-base'>{location} ({remote_type})</p>
            </div>
            <div class='mt-24'>
              <p>Part-Time(9.00 am - 5.00 pm IST)</p>
              <p class='mt-8'>Experience ({min_experience} - {max_experience} years)</p>
              <p class='mt-8'>INR (₹) {currencyFormat(min_salary)} - {currencyFormat(max_salary)} / Month</p>
              <p class='mt-8'>{total_employee} employees</p>
            </div>
            {
              apply_type == 'quick_apply' ? (
                <button class="bg-primary mt-8 hover:bg-primary-dark text-text-white py-8 mr-24 px-16 rounded-sm">
                  Apply Now
                </button>
              ) : (
                <button class="bg-transparent mt-8 text-primary hover:text-primary py-8 px-16 border border-blue-500 hover:border-transparent rounded-sm">
                  External Apply
                </button>
              )
            }
          </div>
        </div>
      </div>
      {
        openModal && <ApplyJobs cardValue={data} openModal={openModal} closeModal={() => setOpenModal(false)} />
      }
      <Modal opened={opened} onClose={close} title="" withCloseButton={false} centered>
        {/* Modal content */}
        <p>Are you sure want to delete the role <b>{role}</b>?</p>
        <div class='flex flex-row justify-end mt-32'>
          <button onClick={close} class="bg-transparent mt-8 text-gray-dark py-8 px-16 rounded-sm">
            Cancel
          </button>
          <button onClick={onDelete} disabled={loading} class="bg-error mt-8 text-text-white py-8 mr-24 px-16 rounded-sm">
            {!loading ? 'Yes, Delete' : 'Deleting...'}
          </button>

        </div>
      </Modal>
    </>
  )
}

export default JobProfileCard;