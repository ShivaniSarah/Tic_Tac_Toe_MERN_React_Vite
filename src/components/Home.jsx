import React from 'react'
import Vector from '../assets/Vector.png'
import Vector2 from '../assets/Vector (2).png'
import Vector3 from '../assets/Vector (3).png'

const Home = () => {
      return (
            <div className="main-ui flex" >
                  <div className="banner">
                        <div className="flex">
                              <img src={Vector} alt="" style={{marginRight:"3%"}}/>
                              <img src="./src/assets/Vector (1).png" alt="" />
                        </div>

                        <div className="mid_banner flex2">
                              <p className="pick_player_text">PICK PLAYER</p>
                              <div className="bottom_banner flex">
                                    <img src={Vector2} alt="" style={{marginLeft:"20%"}} />
                                    <div className="logo_back flex">
                                    <img src={Vector3} alt="" />
                                    </div>
                                    
                              </div>
                        </div>

                        <div className="new_game_cpu flex" >NEW GAME ( VS CPU )</div>
                        <div className="new_game_human flex">NEW GAME ( VS HUMAN ) Coming Soon</div>
                        <div className="flex" style={{height:"8%"}}><div className="invite flex">Invite your friend</div></div>

                  </div>
            </div>
      )
}

export default Home