import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer-outer-continer'>
    <div className='footer-inner-continer'>
        <div className='footer-icon'>
        <FacebookIcon/>
        <InstagramIcon/>
        <YouTubeIcon/>
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio discription</li>
              <li>invester relation</li>
              <li>legal notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> helep cener</li>
              <li>Jobs</li>
              <li>cookes reference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card </li>
              <li>Term Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center </li>
              <li>privacey </li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className='service-code'>
          <p>
            service code
          </p>
        </div>
        <div className='copy-write'>
          &copy; 958698709708 netfilx

        </div>
    </div>
    </div>
  )
}

export default Footer