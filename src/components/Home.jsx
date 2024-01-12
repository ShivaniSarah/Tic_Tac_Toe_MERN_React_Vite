import React from 'react'
import Quote from './Quote'
import Vector from '../assets/Vector.png'
import Vector2 from '../assets/Vector (2).png'
import Vector3 from '../assets/Vector (3).png'
import ToastLink from './ToastLink'
import { useState } from 'react'
import { BrowserRouter,Link, useLocation,useNavigate } from 'react-router-dom';
// import Test from './Test'


const Home = () => {
      let [parentBackgroundColor1, setParentBackgroundColor1] = useState('');
      let [parentBackgroundColor2, setParentBackgroundColor2] = useState('');
      let [isInverted1, setIsInverted1] = useState(0)
      let [isInverted2, setIsInverted2] = useState(1)
      const dark_color = '#D9D9D9'
      let [userChoice,setUserChoice] = useState('')
      let location = useLocation();
      let currentUrl = location.pathname;
      // const navigate = useNavigate();

      let pickChoiceHandler = (event) => {
            const className = event.target.parentNode.className;
            console.log('Clicked div class:', className);
            if (className == 'logo_back1 flex') {
                  userChoice = 'X'
                  setUserChoice(userChoice)
                  parentBackgroundColor1 = '#D9D9D9'
                  setParentBackgroundColor1(parentBackgroundColor1)

                  parentBackgroundColor2 = ''
                  setParentBackgroundColor2(parentBackgroundColor2)

                  isInverted1 = 1
                  setIsInverted1(isInverted1)
                  isInverted2 = 1
                  setIsInverted2(isInverted2)
                  

            }
            else if (className == 'logo_back2 flex') {
                  userChoice = 'O'
                  setUserChoice(userChoice)
                  parentBackgroundColor2 = '#D9D9D9'
                  setParentBackgroundColor2(parentBackgroundColor2)
                  parentBackgroundColor1 = ''
                  setParentBackgroundColor1(parentBackgroundColor1)
                  isInverted2 = 0
                  setIsInverted2(isInverted2)
                  isInverted1 = 0
                  setIsInverted1(isInverted1)
            }
            else {
                  userChoice = ''
                  setUserChoice(userChoice)
                  console.log('else part touched', className);
                  parentBackgroundColor1 = ''
                  setParentBackgroundColor1(parentBackgroundColor1)
                  parentBackgroundColor2 = ''
                  setParentBackgroundColor2(parentBackgroundColor2)
                  isInverted2 = 1
                  setIsInverted2(isInverted2)
                  isInverted1 = 0
                  setIsInverted1(isInverted1)

            }
            console.log("userchoice",userChoice)
            // navigate('/gamepage', { state: { userChoice } });

      };

      const handleCopyClick = async () => {
            try {
                  await navigator.clipboard.writeText(window.location.origin + currentUrl);
                  //     alert('URL copied to clipboard!');
            } catch (error) {
                  console.error('Unable to copy to clipboard:', error);
            }
      };

      function onInviteHandler() {
            console.log('hhjjjkjkkkk')

            console.log("--------------", currentUrl)
            handleCopyClick()
      }


      return (
            <>
                  <div className="main-ui flex" onClick={pickChoiceHandler} >
                        <div className="banner">
                              <div className="flex">
                                    <img src={Vector} alt="" style={{ marginRight: "3%" }} />
                                    <img src="./src/assets/Vector (1).png" alt="" />
                              </div>

                              <div className="mid_banner flex2">
                                    <p className="pick_player_text">PICK PLAYER</p>
                                    <div className="bottom_banner flex">
                                          <div className='logo_back1 flex' style={{ backgroundColor: parentBackgroundColor1 }} >
                                                <img src={Vector2} alt="" style={{ filter: "invert(" + isInverted1 + ")" }} />
                                          </div>

                                          <div className="logo_back2 flex" style={{ backgroundColor: parentBackgroundColor2 }} >
                                                <img src={Vector3} id='O_img' alt="" style={{ filter: "invert(" + isInverted2 + ")" }} />
                                          </div>

                                    </div>
                              </div>

                              <div className="new_game_cpu flex" >
                              <Link to="/gamepage" state={{ userChoice }} style={{ color: "#192A32" }}>NEW GAME ( VS CPU )</Link>
                              
                              </div>
                              <div className="new_game_human flex">NEW GAME ( VS HUMAN ) Coming Soon</div>
                              <div className="flex" style={{ height: "8%" }}><div className="invite flex" onClick={onInviteHandler}>Invite your friend</div></div>

                        </div>
                        <Quote/>
                        {/* <Test /> */}
                  </div>
                  {/* <ToastLink /> */}
            </>


      )
}

export default Home