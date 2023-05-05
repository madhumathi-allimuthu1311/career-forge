import React, { useEffect, useState } from "react";
import JobProfileCard from '../commonComponents/card/JobProfileCard';
import { getAlljob } from "../services/job.services";


const JobListingPage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getAlljob()
      .then(({ data }) => {
        setData(data)
      })
      .catch((err) => {
        console.log('fetch err >>', err)
      })
  }, [])
  return (
    <div class='p-10 flex flex-wrap'>
      {
        data?.map((item, i) => {
          return (
            <div class="w-1/2 ">
              <JobProfileCard data={item} />
            </div>
          )
        })
      }
    </div>
  )
}

export default JobListingPage

