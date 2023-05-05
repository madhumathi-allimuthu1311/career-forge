import { apiCallProtected } from "../../api/axios";

interface options {
  body?: Object;
  selectValue?: Function;
  returnFirstItem?: Boolean;
}

/** Post API Call Function */
export const deleteAPICall = (url: string, options?: options) => {
  return new Promise((resolve, reject) => {
    apiCallProtected
      .delete(url, options?.body)
      .then((response: any) => {
        if (response?.status === 200) {
          options?.selectValue && resolve(options?.selectValue(response?.data))
          if (options?.returnFirstItem) {
            resolve(response?.data[0]);
          }
          resolve(response?.data);
        } else {
          reject(response?.message);
        }
      })
      .catch((e)=> {
        reject(e?.message || e)
      });
  });
};