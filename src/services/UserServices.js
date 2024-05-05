import axios from "axios"

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign_in`,data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign_up`,data)
    return res.data
}

export const getDetailUser = async (id,access_token) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/getDetailUser/${id}`,{
        headers:{
            token : `Bearer ${access_token}`
        }
    })
    return res.data
}

