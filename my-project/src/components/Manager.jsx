import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-200 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="mx-auto  mycontainer">
                <div className="text-white flex flex-col p-4 ">
                    <div className="flex flex-col items-center  text-3xl font-bold py-4 gap-2 ">
                        <div>
                            <span className="text-green-600 text-center">&lt;</span>
                            <span className="text-pink-300 text-center">Pass</span>
                            <span className="text-green-600 text-center">OP/&gt;</span>
                        </div>
                        <h1 className='text-pink-300'>your Own Password Manager</h1>
                    </div>
                    <div className='flex flex-col gap-4 border-2 border-gray-600 p-4 rounded-lg'>
                    <input type="text" className="border rounded p-2 mb-2" />
                    <div className="flex gap-3 ">
                        <input type="text" className="border rounded p-2 flex-1" />
                        <input type="text" className="border rounded p-2 flex-1" />

                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Manager
