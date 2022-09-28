import React, {useEffect, useState} from 'react'
// useState
const Covid = () => {
    const [data,setData] = useState([])

    const getCovidData = async ()=>{
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const actualdata = await res.json()
            console.log(actualdata.AN.delta7.recovered)
            setData(actualdata.AN.delta7.recovered)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCovidData();
    },[])

  return (
    <div>
      <h1>Live</h1>

      <ul>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name0'><span>our</span>country</p>
                    <p className='card_total card_small'>INDIA</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card_main'>
                <div className='card_inner'>
                    <p className='card_name'><span>total</span>recovered</p>
                    <p className='card_total card_small'>{data}</p>
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Covid
