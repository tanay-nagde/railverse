import { React, useState } from 'react'
import { useEffect } from 'react'
import { Select, Space, ConfigProvider, } from 'antd';
import swap from './assets/images/swap.svg';
import { Input, Typography, } from 'antd'
const { Title } = Typography;
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';

// for select 
const handleChange = (value) => {
    console.log(`selected ${value}`);
};



// for input





function Searchingsection() {
    const [fromStn, setfromStn] = useState("")
    const [toStn, settoStn] = useState("")
    const [Train, setTrain] = useState([])
    const [dateOfJourney, setdateOfJourney] = useState("")
    const navigate = useNavigate();

    useEffect(() => { 
         
        if(Train.length>0){navigate('/trains', { state: { fromStn: fromStn, toStn: toStn, trains: Train } });}
         
        
      
    }, [Train])
    


    const onChange = (date, dateString) => {
        setdateOfJourney(dateString);
        ;
    };

    // navigate to train section

    function searchTrains() {
        
        async function trainBetweenStations() {

            const options = {
                method: 'GET',
                url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
                params: {query: 'BJU'},
                headers: {
                  'X-RapidAPI-Key': 'c1d5be3d03msheeafcd9d572f29dp1d08ecjsn34bb609a5d65',
                  'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
                }
              };
                  

            const url_searchTrain = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStn}&toStationCode=${toStn}&dateOfJourney=${dateOfJourney}`;
            //


            const response = await fetch(url_searchTrain, options)
            const result = await response.json()
            setTrain(Array.from(result.data)) 
            

            


        }


        trainBetweenStations();
        



    }



    // for searching train 

    //const url_seatAvailable = `https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=SL&fromStationCode=${fromStn}&quota=GN&toStationCode=${toStn}&trainNo=${TrainNo}&date=${dateString}`;
    //
    //
    //const url_fare = `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${TrainNo}&fromStationCode=${fromStn}&toStationCode=${toStnStn}`;
    //
    //



    return (
        <>
            <ConfigProvider theme={{
                token: {
                    // Seed Token
                    colorTextPlaceholder: '#083344e6',

                    colorBgTextActive: "#083344e6",



                },
            }}>
                <div className='h-60 w-[55%]  bg-white/25 hover:bg-white/30 rounded-sm justify-self-center content-evenly grid grid-cols-1 ease-in-out duration-300 hover:shadow-md hover:shadow-cyan-950' >

                    <div className='flex gap-3 mx-10 max-w-full'>

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
                    <div className='flex gap-4 mx-10 max-w-full relative'>

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
                            <DatePicker onChange={onChange} />

                        </div>

                        <div>
                            <button onClick={searchTrains} className=' bg-cyan-600 active:bg-cyan-950 h-16 w-48 rounded-2xl ml-4 text-white font-mono text-xl font-extrabold'> search train </button>
                        </div>
                    </div>

                </div>
            </ConfigProvider>
        </>

    )
}

export default Searchingsection