import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetadmin } from '../../actions/adminAction'

const AdminAccount = (props) => {

    const { isLoggedIn } = props

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetadmin())
    },[])

    const admin = useSelector((state)=>{
        return state.admin
    })

    

    console.log("admin-account", admin)
    return (
        <div className="container">
            <h2> Admin Account </h2>
                { isLoggedIn ?
                 <div>
                    <h3> Email - { admin.email } </h3>
                    <h3> Username - { admin.username } </h3>
                    <h3> Role - { admin.role } </h3>
                </div> : null
                }
        </div>
    )
}

export default AdminAccount