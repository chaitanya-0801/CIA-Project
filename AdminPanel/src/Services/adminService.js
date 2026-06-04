import axiosInstance from '../Config/axiosInstance.js';

export const loginAdmin = async (data) => {
  console.log(data)
  return await axiosInstance.post(
    "/admin/login",
    data
  );
};