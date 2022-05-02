import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';


const Footer = () => {
    return (

        <footer class="bg-dark text-center text-white">
         
          <div class="container p-4">
       
            <section class="mb-4">
       

              <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/kalon-acharjee-7a2725101/" role="button">
                  <FiLinkedin />
                </a>
        

              <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Kalon1997" role="button">
                  <FiGithub />
                </a>
            </section>
      
          
           
          </div>
        
          
          <div class="text-center p-3">
            © 2022 Copyright: 
            <a class="text-white" href="#"> ThoughtsUnderNib.com</a>
          </div>
         
        </footer>
    
)
}
export default Footer;


