import React from 'react'
import Mapp from './mapp'

function Footer() {
    return (
        <div style={{
            height: '190px', display: 'flex',
            flexDirection: 'reverse',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor: 'gray',
            padding: '25px',
          
        }}>
           <p className="text-white"> Our Location</p>
           <Mapp />
        </div>
    )
}

export default Footer
