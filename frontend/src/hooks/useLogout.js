import React, { useState } from 'react'
import toast from 'react-hot-toast'
import apis from '../config/apis'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const useLogout = () => {
    const navigate = useNavigate()
    const {setAuthUser} = useAuthContext()
    const [loading, setLoading] = useState(false)

    const logout = async()=>{
        try {
            setLoading(true)
            const res = await apis.logout()
            if(res.status === 200){
                toast.success('Logout successfully')
                navigate('/login')
                localStorage.removeItem('chat-user')
                setAuthUser(null)
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }finally{
            setLoading(false)
        }
    }
  return {loading, logout}
}

export default useLogout