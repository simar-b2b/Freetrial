import React,{ useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';


const PromoBar = () => {

    const [show, setShow] = useState("block")

    const hidebar = () => {
        setShow("none")
    }

  return (
    <>
    <div className={`row bg-brown text-white position-relative justify-content-center align-items-center text-center py-2 d-${show}`}>
         <p className='m-0'>Summer sale discount off 50%! Shop Now <span className='position-absolute start-75 cancel-icon' onClick={hidebar}><AiOutlineClose/></span></p>
    </div>
    </>
  )
}

export default PromoBar