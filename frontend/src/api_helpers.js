import axios from 'axios';

export const addCountry = async (country) => {
  let res = await axios.post(`/`,country);
  return res;
}
export const deleteCountry = async (id) => {
  await axios.delete(`/${id}`);
  return
}
export const updateCountry = async (id, updatedCountry) => {
  console.log(id);
  await axios.put(`/${id}`,updatedCountry);
  return
}
