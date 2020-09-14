import axios from 'axios';
const PORT = process.env.PORT || 4000;
export const addCountry = async (country) => {
  await axios.post(`/`,country);
  return
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
export const getApiData = async () =>{
const {data} = await axios.get(`/countries`);
console.log(PORT);
 return
}