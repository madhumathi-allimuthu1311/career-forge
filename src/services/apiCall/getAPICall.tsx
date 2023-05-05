import { apiCallProtected } from "../../api/axios";

interface optionsType {
  signal?: any;
  selectValue?: Function;
  returnFirstItem?: Boolean;
  returnObject?: Boolean;
}

/** Get API call function */
export const getAPICall = (url: string, options?: optionsType) => {
  return new Promise((resolve, reject) => {
    apiCallProtected
      .get(url, options?.signal && { signal: options?.signal })
      .then((response: any) => {
        if (response?.status === 200) {
          options?.selectValue && resolve(options?.selectValue(response?.data))
          if (options?.returnFirstItem) {
            resolve(response?.data[0]);
          } else if (options?.returnObject) {
            resolve(response);
          }
          resolve(response?.data);
        } else {
          reject(response?.message);
        }
      })
      .catch((e) => {
        reject(e?.message || e)
      });
  });
};