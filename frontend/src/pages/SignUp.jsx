import React, { useContext, useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import { authDataContext } from '../Context/AuthContext' ; 

function SignUp() {
   let [show,setShow]=useState(false)
   let navigate= useNavigate()
   let {serverUrl}=useContext(authDataContext)
   let [name,setName]=useState("")
   let [email,setEmail]=useState("")
   let [password,setPassword]=useState("")

   const handleSignUP=async(e)=>{
    try{
        e.preventDefault()
        let result=await axios.post(serverUrl+"/api/auth/signup",{
            name,
            email,
            password

        },{withCredentials: true });
        console.log(result.data)
    }catch(error){
        console.log("Axios Error:", error.message)

    }
   };
  return (

    <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center ' 
        onClick={()=>navigate("/")}><FaArrowLeft 
        className='w-[25px] h-[25px] text-[white]'/>
        </div>
        <form action="" className='max-w-[900px] w-[900%] h-[600px] flex items-center justify-center  flex-col md:items-start gap-[10px]' 
        onSubmit={handleSignUP}>
            <h1 className='text-[30px] text-[black]'>Welcome to Wander-Lust</h1>
            <div className='w-[90%] flex itens-start justify-start flex-col gap-[10px] mt-[30px]'>
                <label htmlFor="name" className='text-[20px]'>UserName</label>
                <input type="text" id='name'className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' 
                required 
                onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
             <div className='w-[90%] flex itens-start justify-start flex-col gap-[10px]'>
                <label htmlFor="email rounded-lg" className='text-[20px]'>Email</label>
                <input type="email" id='email'className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'
                required onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
             <div className='w-[90%] flex itens-start justify-start flex-col gap-[10px] relative '>
                <label htmlFor="password" className='text-[20px]'>Password</label>
                <input type={show?"text":"password"} id='password'className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom -[10px] cursor-pointer'onClick={()=>setShow(prev=>!prev)}/>}
                {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom -[10px] cursor-pointer' onClick={()=>setShow(prev=>!prev)}/>}
            </div>
            <button className='pw-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] round-lg'>SignUp</button>
            <p className='text-[18px]'>Already have a account? <span className='text-[19px] text-[red] cursor-pointer'onClick={()=>navigate("/login")}>login</span>
            </p>
        </form>
    </div>
  )
}

export default SignUp




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useContext, useState } from 'react'
// import { IoMdEye } from "react-icons/io";
// import { FaEyeSlash } from "react-icons/fa6";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from "react-icons/fa";

// import { authDataContext } from '../Context/AuthContext' ; 

// function SignUp() {
//    let [show,setShow]=useState(false)
//    let navigate= useNavigate()
//    let {serverUrl}=useContext(authDataContext)
//    let [name,setName]=useState("")
//    let [email,setEmail]=useState("")
//    let [password,setPassword]=useState("")

//    const handleSignUP=async(e)=>{
//     try{
//         e.preventDefault()
//         // ✅ Added await for proper logging
//         let result = await axios.post(serverUrl+"/api/auth/signup",{
//             name,
//             email,
//             password
//         },{withCredentials:true})
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
//    }

//   return (
//     <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
//         <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center ' 
//         onClick={()=>navigate("/")}><FaArrowLeft 
//         className='w-[25px] h-[25px] text-[white]'/></div>

//         <form className='max-w-[900px] w-[900%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' 
//         onSubmit={handleSignUP}>
//             <h1 className='text-[30px] text-[black]'>Welcome to Wander-Lust</h1>

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
//                 <label htmlFor="name" className='text-[20px]'>UserName</label>
//                 {/* ✅ Corrected: onClick -> onChange */}
//                 <input 
//                     type="text" 
//                     id='name'
//                     className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' 
//                     required 
//                     value={name}
//                     onChange={(e)=>setName(e.target.value)}
//                 />
//             </div>

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
//                 <label htmlFor="email" className='text-[20px]'>Email</label>
//                 {/* ✅ Corrected: onClick -> onChange */}
//                 <input 
//                     type="text" 
//                     id='email'
//                     className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'
//                     required 
//                     value={email}
//                     onClicke={(e)=>setEmail(e.target.value)}
//                 />
//             </div>

//             <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative '>
//                 <label htmlFor="password" className='text-[20px]'>Password</label>
//                 {/* ✅ Corrected: onClick -> onChange */}
//                 <input 
//                     type={show ? "text" : "password"} 
//                     id='password'
//                     className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' 
//                     required 
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)}
//                 />
//                 {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev=>!prev)}/>}
//                 {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={()=>setShow(prev=>!prev)}/>}
//             </div>

//             {/* ✅ Fixed Tailwind typo: pw -> px, round-lg */}
//             <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg'>SignUp</button>

//             <p className='text-[18px]'>Already have an account? 
//                 <span className='text-[19px] text-[red] cursor-pointer' onClick={()=>navigate("/login")}> login</span>
//             </p>
//         </form>
//     </div>
//   )
// }

// export default SignUp
