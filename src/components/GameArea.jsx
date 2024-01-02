import React, { useState } from 'react'
import refresh from "/src/assets/refresh.png"

export const GameArea = () => {
      const [you_variable,setYouVariable]=useState('X')
      const [cpu_variable,setCpuVariable]=useState('O')
      const [you_score,setYouScore]=useState(0)
      const [ties_score,setTiesScore]=useState(0)
      const [cpu_score,setCpuScore]=useState(0)
      
      return (
            <div className='main-ui flex2'>

                  <div className='top-grid'>
                        <div className="top_left flex">
                              <img src="/src/assets/Vector.png" style={{marginRight:"10%"}} alt="" />
                              <img src="/src/assets/Vector (1).png" alt="" />
                        </div>
                        <div className="top_mid flex">
                              <img src="/src/assets/Vector (2).png" width="15%"  alt="" />
                              <div className="turn_text">TURN</div>
                        </div>
                        <div className="top_right flex">
                        <img src={refresh} alt="" />
                        </div>
                  </div>
                  <div className="grid-container">
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                  </div>
                  <div className="bottom-grid flex">
                        <div className="you bottom-grid-item flex2">
                              <div className="you_text">{you_variable}(YOU)</div>
                              <div className="you_score">{you_score}</div>
                        </div>
                        <div className="ties bottom-grid-item flex2">
                              <div className="ties_text">TIES</div>
                              <div className="ties_score">{ties_score}</div>
                        </div>
                        <div className="cpu bottom-grid-item flex2">
                              <div className="cpu_text">{cpu_variable}(CPU)</div>
                              <div className="cpu_score">{cpu_score}</div>
                        </div>
                  </div>
            </div>

      )
}
