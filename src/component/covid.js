import React from 'react'
import Card from './Card'
import './covid.css';
// useState
const Covid = (data) => {
    // console.log(data);
    const eachState = Object.keys(data.data);
    // console.log(eachState);

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


