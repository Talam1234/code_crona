import React, {useState, useEffect} from 'react'
import './state.css'

const DistrictCard = (props) => {
  // console.log(props);
  const [total,setTotal] = useState([]);
  useEffect(()=>{
    Object.keys(props.total).forEach((i)=>{
      if(i === props.data)
      {
        setTotal(props.total[i].total);
      }
    })
  })
  // console.log(total);
  return (
    <div className='card' style={{backgroundColor:props.style}}>
      <p style={{backgroundColor:props.style}}>{props.data}</p>
      <h1 style={{backgroundColor:props.style}}>recovered:{total.recovered}</h1>
      <h1 style={{backgroundColor:props.style}}>confirmed:{total.confirmed}</h1>
      <h1 style={{backgroundColor:props.style}}>tested:{total.tested}</h1>
      <h1 style={{backgroundColor:props.style}}>vaccinated:{total.vaccinated2}</h1>
      <h1 style={{backgroundColor:props.style}}>deceased:{total.deceased}</h1>
    </div>
  )
}

export default DistrictCard
