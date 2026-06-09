import axiosInstance from '../Config/axiosInstance.js';



export const submitForm = async (data) => {
    // console.log(data)
    return await axiosInstance.post('/contact',data)
}

export const getStory = async () => {
    return await axiosInstance.get('success-stories')
}
export const getAllReview = async () => {
    return await axiosInstance.get('all-review')
}
export const getAllOffers = async () => {
    return await axiosInstance.get('getoffer')
}

export const addReview = async (data) => {
    return await axiosInstance.post('add-review',data)
} 