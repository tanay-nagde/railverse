import React , { useContext} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar ,{ userDetail} from './Navbar'
import Traincard from './Traincard'



function Trainsection() {
const location = useLocation()
const train = location.state.trains


 
 


  return (
    <>
    <Navbar/>
    <div className=' h-screen w-screen bg-black flex flex-col justify-center items-center text-pink-600'>
    

    <div className="traincontainer flex flex-col justify-start items-center bg-black w-screen gap-2 h-3/4 overflow-y-scroll ">

      {
        train.map((train) => {
         
          return (
            <Traincard
              trainno={train.train_number}
              trainname={train.train_name}
              fromst={location.state.fromStn}
              fromtime={train.from_std}
              fromdate={train.train_date}
              duration={train.duration}
              tost={location.state.toStn}
              totime={train.to_std}
              todate={train.train_date}
              
            />
          )

        })
      }
    
    </div>
    
    </div>
    </>
    
  )
}

export default Trainsection