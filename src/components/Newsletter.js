"use client"
import React, {useState} from 'react'
import {toast} from "react-toastify";
function Newsletter() {
    const [email, setEmail] = React.useState('');

    const subscribe = async () => {
        if (!email) {
            toast.error('Please fill all details', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                return;
        }
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const result = await res.json();
        if (result.type == "error") {
            toast.error(result.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else {
            toast.success(result.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        }

        setEmail('');
    }
  return (
    <div 
    
    style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        height: "80vh !important",
    }}
    className='flex-col flex justify-center items-center'>
        <h1 className='text-4xl font-bold text-white'>Subscribe to Newsletter</h1>
        <p className='my-10 text-white'>Get 1 Email every week about new Projects</p>
        <div className="join">
  <input value={email} onChange={e=>setEmail(e.target.value)} className="input input-bordered join-item" placeholder="Email"/>
  <button onClick={subscribe} className="btn btn-primary join-item rounded-r-full">Subscribe</button>
</div>
    </div>
  )
}

export default Newsletter