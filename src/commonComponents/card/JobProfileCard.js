import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconEdit, IconTrash } from '@tabler/icons-react'
import ApplyJobs from "../../pages/ApplyJobs";
import { deleteJob } from "../../services/job.services";
import { displayNotification } from "../notification/displayNotification";
import { COLORS, IMAGE } from "../../constant";

const JobProfileCard = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const onEdit = () => {
    setOpenModal(true)
  }
  const onDelete = () => {
    console.log('delete called')
    deleteJob(data)
      .then(res => {
        displayNotification({ message: 'Job updated successfully', color: COLORS.success })
      })
      .catch(err => {
        displayNotification({ message: 'Job update failed, try after sometime', color: COLORS.error })
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
                  <ActionIcon onClick={onDelete} class='text-gray-dark' variant="transparent"><IconTrash size={28} /></ActionIcon>
                </div>
              </div>
              <p class='text-base text-dark'>{company_name} - {industry}</p>
              <p class='text-gray-dark text-base'>{location} ({remote_type})</p>
            </div>
            <div class='mt-24'>
              <p>Part-Time(9.00 am - 5.00 pm IST)</p>
              <p class='mt-8'>Experience ({min_experience} - {max_experience} years)</p>
              <p class='mt-8'>INR {min_salary} - {max_salary} / Month</p>
              <p class='mt-8'>{total_employee} employees</p>
            </div>
            <div class='mt-24 flex'>
              <button class="bg-primary hover:bg-primary-dark text-text-white font-bold py-8 mr-24 px-16 rounded-sm">
                Apply
              </button>
              <button class="bg-transparent hover:bg-blue-500 text-primary font-semibold hover:text-primary py-4 px-16 border border-blue-500 hover:border-transparent rounded-sm">
                External Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        openModal && <ApplyJobs cardValue={data} openModal={openModal} closeModal={() => setOpenModal(false)} />
      }
    </>
  )
}

export default JobProfileCard;