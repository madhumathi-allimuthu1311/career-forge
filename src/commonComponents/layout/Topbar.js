import React, { useEffect, useState } from "react";
import ApplyJobs from "../../pages/ApplyJobs";

const TopBar = () => {
const [openModal,setOpenModal] = useState(false)
  return (
    <>
      <div class='flex items-center p-3 border-b-2 border-gray-light'>
        <button onClick={()=> setOpenModal(true)} class="bg-primary hover:bg-primary-dark text-text-white font-bold py-8 mr-24 px-16 rounded-sm">
          Create Job
        </button>
      </div>
      {
        openModal &&
        <ApplyJobs openModal={openModal} closeModal={()=>setOpenModal(false)} />
      }
    </>

  )
}

export default TopBar;