import { instance } from '../JsonServer';

export const getData = (url) => instance.get(url);
export const postData = (url, data) => instance.post(url, data);
export const patchData = (url, data) => instance.patch(url, data);
// export const editData = (url, data) => instance.put(url, data);
// export const deleteData = (url) => instance.get(url);
