import axios from "axios"
import {setUser} from "../store/userReducer";

export const registration = async (name, email, password) => {
    try{
        const response = await axios.post('http://localhost:5000/pages/user/registration',
            {
                name,
                email,
                password
            }
            )
        alert(response.data.message)
    }catch (e){
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('http://localhost:5000/pages/user/login',
                {
                    email,
                    password
                }
            )
            await dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        }catch (e){
        }
    }
}