import React, { useEffect, useState } from 'react'
import Quote_logo from "/src/assets/Group 3.png"


function Quote() {
      const [advice, setAdvice] = useState("Loading....")
      const [adviceId, setAdviceId] = useState()


      const fetchData = async () => {

            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                  throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result.slip.advice)
            setAdvice('"'+result.slip.advice+'"')
            setAdviceId(result.slip.id)
      }

      useEffect(() => {
            fetchData()
            setInterval(
             ()=>{
                  fetchData()
             }
            ,60000);
            // setInterval(
            //            fetchData
            //      ,1000);
      }, [])
      
      

      return (
            <div className="quote_box flex2">
                  <div className="quote_name flex">Quote #{adviceId}</div>
                  <div className="quote_content">{advice}</div>
                  <div className="quote_logo flex">
                        <img src={Quote_logo} alt="" />
                  </div>
            </div>
      )
}

export default Quote