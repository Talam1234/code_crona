import React, {useEffect, useState} from 'react'
import Covid from './component/covid'
import State from './component/State/State'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

const App = () => {
  const [data,setData] = useState([])
    // console.log(data);
    const getCovidData = async ()=>{
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const actualdata = await res.json()
            setData(actualdata);
        } catch (error) {
            console.log(error)
        }
    }
    // const eachState = Object.keys(data);
    // console.log(eachState.length);

    useEffect(()=>{
        getCovidData();
    },[])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Covid data={data}/>}/>
        <Route exact path="/:id" element={<State data={data}/>}/>
      </Routes>
    </Router>
  )
}

export default App
