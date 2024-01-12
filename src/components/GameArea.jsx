import React, { useState } from 'react'
import refresh from "/src/assets/refresh.png"
import Quote from './Quote'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import NextRoundPopup from './NextRoundPopUp'
import RefreshPopUp from './RefreshPopUp'

export const GameArea = () => {
      let location = useLocation();
      let userChoice = location.state ? location.state.userChoice : '';
      const XImage = "/src/assets/Vector.png"
      const OImage = "/src/assets/Vector (1).png"
      
      
      let win_cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
      let [curGameBoard, setCurGameBoard] = useState(getcurBoard())
      let [curTurns, setTurns] = useState(0)

      let [userChoiceSelected,setUserChoice] = useState(userChoice)
      
      
      let [you_variable, setYouVariable] = useState((userChoice === 'X') ? 'X' : 'O')
      let [cpu_variable, setCpuVariable] = useState((userChoice === 'X') ? 'O' : 'X')
      let [userImage,setUserImage] = useState((userChoice === 'X') ? XImage : OImage)
      let [pcImage,setPcImage] = useState((userChoice === 'X') ? OImage : XImage)
      let [you_score, setYouScore] = useState(0)
      let [ties_score, setTiesScore] = useState(0)
      let [cpu_score, setCpuScore] = useState(0)
      let [youWin, setYouWin] = useState(false)
      let [cpuWin, setCpuWin] = useState(false)
      let [keysYouVariable, setKeysYou] = useState([])
      let [keysCpuVariable, setKeysCpu] = useState([])
      let [turnImage, setTurnImage] = useState(userImage)

      let [keysWithValueOne, updateKeysWithValueOne] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
      // Retrieve userChoice from the location state
      const [isRefreshVisible, setRefreshVisibility] = useState(false);
      const [isWinCardVisible, setWinCardVisibility] = useState({ 'isVisible': false, 'win_text': '' });


      const divRefs = Array.from({ length: 9 }, () => useRef(null));
      const refreshRef = useRef(null)


      useEffect(() => {
      //       you_variable = (userChoiceSelected === 'X') ? 'X' : 'O'
      // cpu_variable = (userChoiceSelected === 'X') ? 'O' : 'X'
            
            // setYouVariable(you_variable)
            // setCpuVariable(cpu_variable)
            console.log('User Choice in GameArea:', userChoice);
            console.log('cur GAme Board', curGameBoard)
            console.log('keys with value one', keysWithValueOne)
            console.log('You Win ', youWin)
            console.log('keys you variable effect...........', keysYouVariable)


            if (curTurns == 8 && keysWithValueOne.length == 1) {

                  setTimeout(async () => {
                        let lastChoice = keysWithValueOne[0]
                        if (divRefs[lastChoice].current) {
                              setTurnImage(userImage)
                              const newElement = document.createElement('img');
                              newElement.setAttribute('src', userImage)
                              newElement.setAttribute('width', '65%')
                              divRefs[lastChoice].current.appendChild(newElement);
                              setCurGameBoard((prevGameBoard) => ({
                                    ...prevGameBoard,
                                    [lastChoice]: you_variable,

                              }));
                              // console.log('printing index',index,typeof(index))
                              keysWithValueOne = keysWithValueOne.filter((elem) => elem !== parseInt(lastChoice))
                              updateKeysWithValueOne(keysWithValueOne)
                              setTurns(curTurns+1)
                              if (!isWinCardVisible.isVisible) {
                                    if (checkYouWin(lastChoice)) {
                                          setWinCardVisibility(
                                                {
                                                      ...isWinCardVisible,
                                                      'isVisible': true,
                                                      'win_text': 'YOU WON!'
                                                }
                                          );
                                    }
                                    else {
                                          setWinCardVisibility(
                                                {
                                                      ...isWinCardVisible,
                                                      'isVisible': true,
                                                      'win_text': 'TIE UP!'
                                                }
                                          );
                                    }
                              }

                        }


                  }, 1000); // new code
            }
            // You can set up any logic here based on the userChoice
      }, [userChoice, curGameBoard, keysWithValueOne, curTurns, youWin]);


      function getRandomNumber(min, max) {
            let randomNum;
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNum;
      }

      function getcurBoard() {
            const keysArray = Array.from({ length: 9 }, (_, index) => index);
            return keysArray.reduce((acc, key) => {
                  acc[key] = '1';
                  return acc;
            }, {});
      }
      function checkWin(keys,) {
            return win_cases.some(elem => elem.every(num => keys.includes(num)));
      }
      function checkYouWin(userClick) {
            keysYouVariable = Object.keys(curGameBoard).filter((key) => curGameBoard[key] === you_variable).concat(userClick).sort((a, b) => parseInt(a) - parseInt(b));

            keysYouVariable = keysYouVariable.map(elem => parseInt(elem))
            youWin = checkWin(keysYouVariable);
            setKeysYou(keysYouVariable);
            console.log('keys you variable...........', keysYouVariable)
            setYouWin(youWin)
            return youWin
      }
      function checkCpuWin(pcClickindex) {
            keysCpuVariable = Object.keys(curGameBoard).filter((key) => curGameBoard[key] === cpu_variable).concat(pcClickindex).sort((a, b) => parseInt(a) - parseInt(b));
            // let win_cases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
            keysCpuVariable = keysCpuVariable.map(elem => parseInt(elem))
            cpuWin = checkWin(keysCpuVariable);
            setKeysCpu(keysCpuVariable);
            console.log('keys cpu variable...........', keysCpuVariable)
            setCpuWin(cpuWin)
            return cpuWin
      }

      function refreshHandler() {
            if (refreshRef.current) {
                  setRefreshVisibility(true)
            }
      }



      function gamePlayHandler(index) {
            
            
let youwin=false
            // const clickedDivId = event.target.id;
            // console.log('Clicked div id:', clickedDivId);
            //       // Get the element by ID
            let userClick = index
            let pcClick;
            let pcClickindex
            if (curTurns % 2 == 0 && curTurns < 7) {

                  setTimeout(async () => {

                        console.log('You Win........', youWin)
                        console.log('Cpu Win.........', cpuWin)

                        console.log('This is game playing');

                        // new code

                        if (divRefs[index].current) {


                              const newElement = document.createElement('img');
                              newElement.setAttribute('src', userImage)
                              newElement.setAttribute('width', '65%')
                              divRefs[index].current.appendChild(newElement);
                              setCurGameBoard((prevGameBoard) => ({
                                    ...prevGameBoard,
                                    [userClick]: you_variable,

                              }));
                              // console.log('printing index',index,typeof(index))
                              keysWithValueOne = keysWithValueOne.filter((elem) => elem !== parseInt(userClick))
                              updateKeysWithValueOne(keysWithValueOne)
                              if ( !isWinCardVisible.isVisible && checkYouWin(userClick)) {
                                    youwin=true
                                    
                                          setWinCardVisibility(
                                                {
                                                      ...isWinCardVisible,
                                                      'isVisible': true,
                                                      'win_text': 'YOU WON!'
                                                }
                                          )

                              
                              
                              }
                        }

                  }, 10); // new code

                  // setTimeout(async () => {  }, 3000); // new code          

                  setTimeout(async () => {

                        console.log("Filtered out keys with value one for user click : ", keysWithValueOne)
                        pcClick = getRandomNumber(0, keysWithValueOne.length - 1);
                        console.log("tttttt", pcClick)
                        console.log('rrrrrrrrrrrrr', keysWithValueOne[pcClick])

                        // PC Move
                        pcClickindex = keysWithValueOne[pcClick]
                        if (divRefs[pcClickindex].current) {
                              setTurnImage(pcImage)
                              const newElement = document.createElement('img');
                              newElement.setAttribute('src', pcImage)
                              newElement.setAttribute('width', '65%')
                              divRefs[pcClickindex].current.appendChild(newElement);
                              setCurGameBoard((prevGameBoard) => ({
                                    ...prevGameBoard,
                                    [pcClickindex]: cpu_variable,

                              }));
                              keysWithValueOne = keysWithValueOne.filter((elem) => elem !== parseInt(pcClickindex))
                              updateKeysWithValueOne(keysWithValueOne)
                              if ( !youwin && !isWinCardVisible.isVisible && checkCpuWin(pcClickindex)) {
                                    
                                    setWinCardVisibility(
                                          {
                                                ...isWinCardVisible,
                                                'isVisible': true,
                                                'win_text': 'CPU WON!'
                                          }
                                    )
                              }
                              console.log("Filtered out keys with value one for pc click: ", keysWithValueOne)

                        }

                        // PC Move Ends



                  }, 2000); // new code

                  setTimeout(async () => { setTurnImage(userImage) }, 3000); // new code

                  setTurns(curTurns + 2)

            }


      }
      const handleButtonClick = () => {
            console.log('Button in child component clicked!');
           
            
                setCurGameBoard(getcurBoard())
                setTurns(0)
                setYouVariable(userChoiceSelected)
                setCpuVariable((userChoiceSelected=='X')?'O':'X')
                setUserImage((userChoiceSelected=='X')?XImage:OImage)
                setPcImage((userChoiceSelected=='X')?OImage:XImage)
                setYouWin(false)
                setCpuWin(false)
                setKeysYou([])
                setKeysCpu([])
            
                updateKeysWithValueOne([0, 1, 2, 3, 4, 5, 6, 7, 8])
                setRefreshVisibility(false)
                setWinCardVisibility({ 'isVisible': false, 'win_text': '' })
                if( youWin){
                  setYouScore(you_score+1)
                }
                else if(cpuWin){
                  setCpuScore(cpu_score+1)
                }
                else{
                  setTiesScore(ties_score+1)
                }

            
          };

      return (
            <div className='main-ui flex2'  >
                  {/* <p>{userChoice}</p> */}
                  <div className='top-grid'>
                        <div className="top_left flex">
                              <img src={userImage} style={{ marginRight: "10%" }} alt="" />
                              <img src={pcImage} alt="" />
                        </div>
                        <div className="top_mid flex">
                              <img src={turnImage} width="15%" alt="" />
                              <div className="turn_text">TURN</div>
                        </div>
                        <div className="top_right flex">
                              <img src={refresh} alt="" onClick={refreshHandler} ref={refreshRef} />
                        </div>
                  </div>

                  {isRefreshVisible && (
                        <RefreshPopUp onClose={() => setRefreshVisibility(false)} />
                        // Add a prop to handle closing the card

                  )}

                  {isWinCardVisible.isVisible && (
                        <NextRoundPopup onButtonClick={handleButtonClick}  clearGame={divRefs} userImage={userImage} whoWon={isWinCardVisible['win_text']} onClose={(newState) => setWinCardVisibility(newState)} />
                  )}

                  <div className="grid-container">

                        {divRefs.map((divRef, index) => (
                              <div className="grid-item" key={index} ref={divRef} onClick={() => gamePlayHandler(index)}   >
                              </div>
                        ))}

                        {/* <div id='1'  ref={myElementRef}></div>
                        <div id='2' className="grid-item"></div>
                        <div id='3' className="grid-item"></div>
                        <div id='4' className="grid-item"></div>
                        <div id='5' className="grid-item"></div>
                        <div id='6' className="grid-item"></div>
                        <div id='7' className="grid-item"></div>
                        <div id='8' className="grid-item"></div>
                        <div id='9' className="grid-item"></div> */}
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
                  <Quote />
            </div>

      )
}
