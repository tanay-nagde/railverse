import { React, useState } from 'react'
import Datepicker2 from './components/Datepicker2';
import { Select, Space, ConfigProvider,  } from 'antd';
import swap from './assets/images/swap.svg';
import { Input  , Typography  , } from 'antd'
const { Title  } = Typography;
import '@fontsource/poppins';
// for select 
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

// for input


function Searchingsection() {
    const [fromStn, setfromStn] = useState("")
    const [toStn, settoStn] = useState("")
    console.log(fromStn);
    console.log(toStn);
   
    return (
        <>
            <ConfigProvider theme={{
                token: {
                    // Seed Token
                    colorTextPlaceholder: '#083344e6',

                    colorBgTextActive: "#083344e6",



                },
            }}>
                <div className='h-60 w-5/6 bg-white/30 rounded-sm justify-self-center content-evenly grid grid-cols-1 hover:scale-105 ease-in-out duration-300 hover:shadow-md hover:shadow-cyan-950' >

                    <div className='flex gap-3 mx-10'>

                        <Select
                            defaultValue="SL"
                            style={{
                                width: 60,
                                borderRadius: 4,


                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'SL',
                                    label: 'SL',
                                },
                                {
                                    value: '3A',
                                    label: '3A',
                                }
                            ]}
                        />

                        <Select
                            defaultValue="TRIP TYPE"
                            style={{
                                width: 120,
                                borderRadius: 4,

                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'ROUNDTRIP',
                                    label: 'ROUNDTRIP',
                                },
                                {
                                    value: 'SINGLE TRIP',
                                    label: 'SINGLE TRIP',
                                }
                            ]}
                        />
                    </div>
                    <div className='flex gap-4 mx-10 relative'>

                    <button className='rounded-full  border-2 border-cyan-300 bg-white h-10 w-10 absolute top-10 z-10 left-[10.5rem]'> <img src={swap} alt="" className=' p-2 hover:scale-110   ease-in-out duration-500' /> </button>
 

                        <div className=''> 

                                              
                        <Title className='bg-white rounded-md px-2 text-center' level={5}>FROM STATION </Title>
                        <Input style={{


                            fontSize: 16,
                
                            height: 60,
                            width: 180
                        }} placeholder="STATION CODE" onChange={(e) => { setfromStn(e.target.value); }} />

                        </div>
                        <div className=''> 
                        
                        <Title className='bg-white rounded-md px-2 text-center' level={5}>FROM STATION </Title>
                        <Input style={{


                            fontSize: 16,
                
                            height: 60,
                            width: 180
                        }} placeholder="STATION CODE" onChange={(e) => { settoStn(e.target.value); }} />

                        </div>
                        <div className=''> 
                        
                        <Title className='bg-white rounded-md px-2 text-center' level={5}> JOURNEY DATE </Title>
                       <Datepicker2/>

                        </div>

                        <div>
                            <button className=' bg-cyan-600 active:bg-cyan-950 h-20 w-32 rounded-lg  text-white font-mono text-xl font-extrabold'> search train </button>
                        </div>
                    </div>

                </div>
            </ConfigProvider>
        </>

    )
}

export default Searchingsection