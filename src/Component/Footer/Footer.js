import React from 'react'
import FacebookIcon from 'react-bootstrap/Container';
import InstagramIcon from 'react-bootstrap/Container';
import YouTubeIcon from 'react-bootstrap/Container';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_outer_container container '>
       <div className='footer_inner_container container mx-auto'>
         <div className='footer_icons'>
          {/* <FacebookOutlinedIcon />
          <InstagrameIcon />
          <YouToubeIcon /> */}
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data row'>
          <div className='audio_row col-md-3 col-12'>
              <ul>
                <li><a href="#">Audio Description</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Legal Notice</a></li>
                <li><a href='#'>Buy Gift Cards</a></li>
                <li><a href='#'>Speed Test</a></li>
              </ul>
          </div>
          
         <div className='help_row col-md-3 col-12'>
            <ul>
            <li><a href='#'>Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href='#'>Cookie Preferences</a></li>  
           </ul>
        </div>
      <div className='gift_row col-md-3 col-12'>
        <ul>
          <li><a href='#'>Gift Cards</a></li>
          <li><a href='#'>Only on Netflix</a></li>
          <li><a href='#'>Terms of Use</a></li>
          <li><a href='#'>Corporate Information</a></li>
          <li><a href='#'>Redeem Gift Cards</a></li>
        </ul>
      </div>
      <div className='media_row col-md-3 col-12'>
        <ul>
          <li><a href='#'>Media Center</a></li>
            <li><a href='#'>Privacy</a></li>
           <li><a href='#'>Contact Us</a></li>
        </ul>
      </div>
      </div>
      </div>
      <div className='service_code ps-4'>
        <p>
          Service Code 
        </p>
    </div>
    <div className='copy-write ps-4'>
   
        &copy; 1997-2024 Netflix, Inc.
    </div>
    </div>
  )
}

export default Footer



//k