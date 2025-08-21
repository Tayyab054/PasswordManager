import React, { use, useEffect } from 'react'
import { useRef, useState } from 'react'
const Manager = () => {
    const ref = useRef(null);
    const [form, setform] = useState({});
    const [passwordArry, setpasswordArry] = useState([]);
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArry (JSON.parse(passwords));
        }

    }, [])

    function showpassword() {
        if (ref.current.src.includes("closedeye.png")) {
            ref.current.src = "public/eye.png";
            ref.current.parentElement.previousElementSibling.type = "text";
        } else {
            ref.current.src = "public/closedeye.png";
            ref.current.parentElement.previousElementSibling.type = "password";
        }
    }
    function SavePassword() {

        if (!form.site || !form.username || !form.password) {
            alert("Please fill all fields");
            return;
        }
        setpasswordArry([...passwordArry, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArry, form]));
        console.log([...passwordArry, form]);
    }
    function handleChange(e) {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>

            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-200 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="mx-auto  mycontainer ">
                <div className="text-pink-600 flex flex-col p-4 justify-center gap-5">
                    <div className="flex flex-col items-center  text-3xl font-bold py-4 gap-2 ">
                        <div>
                            <span className="text-green-600 text-center">&lt;</span>
                            <span className="text-pink-600 text-center">Pass</span>
                            <span className="text-green-600 text-center">OP/&gt;</span>
                        </div>
                    </div>
                    <div>
                        <p className='text-pink-600 text-center text-2xl'>your Own Password Manager</p>
                    </div>
                    <div className='flex flex-col gap-8 p-4 rounded-lg text-black justify-between' >
                        <input value={form.site} placeholder='Write You Website URL' onChange={handleChange} type="text" className="border rounded-full p-2 mb-2 border-green-500 w-full" name='site' />
                        <div className="flex gap-5 ">
                            <input value={form.username} placeholder='Enter UserName' onChange={handleChange} type="text" className="border rounded-full p-2 flex-1  border-green-500 " name='username' />
                            <div className="relative">
                                <input value={form.password} placeholder='Enter Password' onChange={handleChange} type="password" className="border rounded-full p-2 flex-1  border-green-500 " name='password' />
                                <span className='absolute right-0 top-1 cursor-pointer' onClick={showpassword}><img className='size-9 p-1 m-1' ref={ref} src="public/closedeye.png" alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center   '>
                        <button onClick={SavePassword} className='flex justify-center items-center gap-3  bg-pink-600 font-bold w-fit  rounded-full p-4 text-black hover:bg-green-500 transition-colors '>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                                className="">
                            </lord-icon>
                            Add Password
                        </button>
                    </div>
                </div>
                <div className="passwords">
                    <h2 className='py-3 text-2xl text-pink-600 font-bold'> Your Passwords</h2>
                    {passwordArry.length === 0 && <div className='text-center text-pink-600 font-bold'>No Passwords Found</div>}
                    {passwordArry.length != 0 &&
                    <table className="table-auto w-full rounded-md  overflow-hidden">
                        <thead className='bg-green-700 text-white  '>
                            <tr>
                                <th className="py-3">WEBSITE URL</th>
                                <th className="py-3">UserName</th>
                                <th className="py-3">Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArry.map((item, index) => (
                                 <tr key={index}>
                                    <td className='text-center w-32 py-2 border-1 border-white' ><a href={item.site} target='_blank'>{item.site}</a></td>
                                    <td className='text-center w-32 py-2 border-1 border-white'>{item.username}</td>
                                    <td className='text-center w-32 py-2 border-1 border-white'>{item.password}</td>
                                </tr>
                            ))} 
                            
                        </tbody>
                    </table>}
                </div>

                    
            </div>
        </>
    )

}



export default Manager
