// import React from "react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'


import './index.css'
const Signup = () => {
    const [name, setName] = useState('')
    const [mobileno, setMobileNo] = useState('')
    const [emailid, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [adharcardno , setAdharcardNo ] = useState('')
    const [gender, setGender] = useState('')
    const [salary, setSalary] = useState('')
    const [role, setRole] = useState('')
    const [activestatus, setActiveStatus] = useState('')

    const signupUser=()=>{

    }


    return (
        <div>
            
            <h1 >Register New User Details</h1>
            <div  className="form">
                <div className='row'>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="" className="label-control">
                     Name
                </label><input
                   onChange={(e) => {
                    setName(e.target.value)
                  }}
                type="text" className="form-control" /></div>
                </div>

                    <div className="col">
                    <div className="mb-3">
                <label htmlFor="" className="label-control">
                    Mobile No
                </label><input 
                     onChange={(e) => {
                        setMobileNo(e.target.value)
                      }}
                type="text" className="form-control" /></div>
                </div>
                </div>


                <div className='row'>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="" className="label-control"> Email Id </label>
                <input 
                     onChange={(e) => {
                        setEmailId(e.target.value)
                      }}
                type="text" className="form-control" />
                </div>
                </div>

                    <div className="col">
                    <div className="mb-3">
                <label htmlFor="" className="label-control"> Password</label>
                <input 
                   onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                type="password" className="form-control" />
                </div>
                </div>
                </div>


                <div className='row'>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="" className="label-control"> Confirm Password</label>
                <input 
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                type="text" className="form-control" />
                </div>

                </div>
                    <div className="col">
                    <div className="mb-3">
                <label htmlFor="" className="label-control"> Adharcard No </label>
                <input 
                    onChange={(e) => {
                        setAdharcardNo(e.target.value)
                      }}
                type="text" className="form-control" />
                </div>
                </div>
                </div>

                <div className='row'>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="" className="label-control"> Gender </label>
                <input 
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                type="text" className="form-control" />
                </div>

                </div>
                    <div className="col">
                    <div className="mb-3">
                <label htmlFor="" className="label-control"> Salary</label>
                <input 
                  onChange={(e) => {
                    setSalary(e.target.value)
                  }}
                type="text" className="form-control" />
                </div>
                </div>
                </div>

                <div className='row'>
                <div className="col">
                <div className="mb-3">
                <label htmlFor="" className="label-control"> Role </label>
                <input 
                  onChange={(e) => {
                    setRole(e.target.value)
                  }}
                type="text" className="form-control" />
                </div>

                </div>
                    <div className="col">
                    <div className="mb-3">
                <label htmlFor="" className="label-control"> Active Status</label>
                <input 
                  onChange={(e) => {
                    setActiveStatus(e.target.value)
                  }}
                type="text" className="form-control" />
                </div>
                </div>
                </div>
             

                {/* <div className="mb-3">
                <label htmlFor="" className="label-control">  </label>
                <input type="text" className="form-control" />
                </div> */}

                <div className="mb-3">
             
                    <button  onClick={signupUser} class="btn btn-primary"  >
                       Sign Up
                    </button>
                    </div>
               

            </div>
            
        </div>
    )
}

export default Signup
