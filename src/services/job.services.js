import { getAPICall, postAPICall, putAPICall, deleteAPICall } from "./apiCall";

export const createJob = (body) => {
  /** used to create new job */
  return postAPICall("job-list", { body: body });
};

export const getAlljob = () => {
  /** used to get all the jobs */
  return getAPICall('job-list', { returnObject: true });
};

export const updateJobs = (body) => {
  /** used to update the job */
  return putAPICall(`job-list/${body?.id}`, { body: body });
};

export const deleteJob = (body) => {
  /** used to update the job */
  return deleteAPICall(`job-list/${body?.id}`, { returnObject: true });
};

