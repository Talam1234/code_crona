// we not have to refresh this page bcuz data will be empty. this will happen bcuz I not get 
// data in this page we are rendering data from other page
import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import './state.css'
import DistrictCard from './DistrictCard'

const State = (props) => {
  const params = useParams();
  const Id = params.id;
  // console.log(props.data);
  const [total,setTotal] = useState([]);
  const [dist,setDist] = useState([]);
  useEffect(()=>{
    Object.keys(props.data).forEach((i)=>{
      if(i === Id)
      {
        setTotal(props.data[i].total);
        setDist(props.data[i].districts)
      }
    })
  })
  // console.log(total);
  // console.log(dist);
  const colors = ["red","#01433e","brown","#011d35","#43011e","#3b0143","rgb(71, 101, 1)","#472D2D","#D49B54","#FA58B6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // const totalarr = data.total
  // console.log(total.total);
  // const districtarr = Object.keys(data.districts);
  return (
    <div>
      <div className='ti' style={{color: randomColor}}>{Id}</div>
      <div className='tim'>
        <h5 style={{color: randomColor}}>total confirmed :{total.confirmed}</h5>
        <h5 style={{color: randomColor}}>total recovered : {total.recovered}</h5>
        <h5 style={{color: randomColor}}>total tested :{total.tested}</h5>
        <div className='container'>
          {Object.keys(dist).map((data,i) =>
            <DistrictCard key={i} data={data} style={randomColor} total={dist}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default State
