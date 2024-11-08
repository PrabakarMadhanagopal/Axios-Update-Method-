import React, { useEffect } from 'react'
import axios from "./Axios";


export const App = () => {

  //async function apicall() {
  //  const response = await fetch('https://671f2a561dfc429919842765.mockapi.io/training/v1/status')
  //  const data = await response.json()
  //  console.log(data)
  //}

  async function apicall() {
      const response = await axios.get('/status')
      console.log(response.data)
    }

    useEffect(() => {
      apicall()
    }, [])



  return (
    <div>
      <h1>API Call</h1>
      <h1>Check Console log to view api data</h1>
      <button onClick={apicall}>Fetch Data</button>

    </div>
  )
}
