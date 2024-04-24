import React from 'react'
import { Divider, ConfigProvider , Button, Alert} from 'antd'

function Traincard(props) {
    return (
        <>
            <ConfigProvider theme={{
                token: {
                    // Seed Token
                    colorSplit: " rgba(255,255,255 ,1)",
                    colorText: " rgba(255,255,255 ,1)"



                },
            }}>

                <div className='flex font-roboto bg-neutral-800 text-pink-500  items-center justify-around  px-5 h-40 w-3/4 '>
                    <div className='flex  flex-col max-w-40 gap-4'>

                        <div className='flex  items-center'> <h4 className=''>{props.trainno}</h4> <Divider type="vertical" /> <h4> {props.trainname} </h4></div>
                        <div className='flex  items-center'>M T W T F S S </div>
                    </div>
                    <div className='flex gap-4 max-w-40'>

                        <div className='flex flex-col'>
                            <h3>{props.fromst}</h3>
                            <h3 className='w-10'> {props.fromtime}</h3>
                            

                        </div>

                        <Divider > <h3>{props.duration} HRs</h3></Divider>
                        <div className='flex flex-col  '>
                            <h3>{props.tost}</h3>
                            <h3> {props.totime}</h3>
                          

                        </div>


                    </div>



                    <div>
                    <Button type='primary' onClick={(e)=>{console.log(props);
                    alert(``)}}> book now</Button>
                    </div>



                </div>
            </ConfigProvider>
        </>
    )
}

export default Traincard