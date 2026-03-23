import React from 'react'


const Footer = ({children}) => {
  return (
    <div className='row'>
        <footer>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <h2>Beautify</h2>
                    <li>
                        <ul>Contact us :072136548</ul>
                        <ul>reach us on our</ul>
                    </li>
                </div>
                <div className='footer-social'>
                    <h3>follow us on </h3>
                     <ul>
                        <ul>Instagram</ul>
                        <ul>Facebook</ul>
                        <ul>Tiktok</ul>
                     </ul>
                    
                        
            
                </div>

            </div>
            <div>
                <p>&copy; Beautify Co. All  right reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer