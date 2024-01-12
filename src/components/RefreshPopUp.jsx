import React from 'react'
import { Link } from 'react-router-dom'

const RefreshPopUp = ({onClose}) => {
  return (
      <div className="refreshPopUp flex2">
      <div className='do_you_text'>Do you want to quit ?</div>
      <div className='flex' >
            
            <div className='play_again_button flex' onClick={onClose}>
              <Link to="/gamepage" style={{color:"#192A32"}}>PLAY AGAIN</Link>
              
              </div>
            <div className='quit_button flex' onClick={onClose}>
              <Link to="/" style={{color:"#192A32"}}>QUIT</Link>
              
              </div>
      </div>
      </div>
  )
}

export default RefreshPopUp