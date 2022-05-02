import React from "react";
import { GiArchiveRegister } from 'react-icons/gi';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { ImPencil } from 'react-icons/im';
import { FcIdea } from 'react-icons/fc';
const Intro = () => {
    return (
        
        <div className="text-white mt-5 pt-5 container-lg align-items-lg-center justify-content-between" max-width='80%' height='auto' >
        <h1>Collection of POETRY on EVERY GENRE !!   <BiHappyHeartEyes /></h1>
        <h3>Are you a poetry lover?  <AiFillHeart /></h3>
        <hr class="my-4"></hr>
        <p>Join today to read and compose beautiful poems      <BiBookOpen />     <ImPencil />      <FcIdea /></p>
        <a href='/poemform' className="btn btn-dark">Compose Poetry Now!<GiArchiveRegister className="mx-3"></GiArchiveRegister></a>
        </div> 
       
        
    )
}

export default Intro;


