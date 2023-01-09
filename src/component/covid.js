import React, {useEffect, useState} from 'react'
import Card from './Card'
import './covid.css';
// useState
const Covid = () => {
    const [data,setData] = useState([])
    // console.log(data);
    const getCovidData = async ()=>{
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const actualdata = await res.json()
            // setData(actualdata.AN.delta7.recovered)
            setData(actualdata);
        } catch (error) {
            console.log(error)
        }
    }
    const eachState = Object.keys(data);
    console.log(eachState.length);

    useEffect(()=>{
        getCovidData();
    },[])

  return (
    <>
        <h1>Live</h1>
        <p>India's crona live update</p>
        <div className='container'>
            {eachState && eachState.map((data,i) =>
                <Card key={i} data={data}/>
            )}  
        </div>
    </>
  )
}

export default Covid


