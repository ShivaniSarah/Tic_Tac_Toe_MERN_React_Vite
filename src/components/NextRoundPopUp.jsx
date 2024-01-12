import React from 'react'
import { Link } from 'react-router-dom'

const NextRoundPopUp = ({onButtonClick,clearGame,userImage,whoWon,onClose }) => {

      const handleNextRoundClick = () => {
            onClose({ isVisible: false, win_text: '' });
            clearGame.forEach((ref) => {
                  if (ref.current) {
                    while (ref.current.firstChild) {
                      ref.current.removeChild(ref.current.firstChild);
                    }
                  }
                });
                onButtonClick()   

          };
  return (
      <div className="nextRoundPopUp flex2">
      <div>{whoWon}</div>
      <div className='flex'>
            <img src={userImage} alt="" />
            <div className='takes_round_text'>
                  TAKES THE ROUND
            </div>
      </div>
      <div className='flex' >
            <div className='quit_button flex' onClick={onClose} >
            <Link to="/" style={{color:"#192A32"}}>QUIT</Link>
            </div>
            <div className='play_again_button flex' onClick={handleNextRoundClick}    >
            <Link to="/gamepage" style={{color:"#192A32"}}>NEXT ROUND</Link>
            </div>

      </div>
</div>
  )
}

export default NextRoundPopUp