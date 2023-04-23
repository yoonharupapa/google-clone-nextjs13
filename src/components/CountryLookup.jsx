"use client"
import { useEffect, useState } from 'react'

export default function CountryLookup() {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ipapi.co/json/');
            const jsonData = await response.json()
            setData(jsonData.country_name)
        }
        fetchData()
    }, []);

  return (
    <div> {data ? ( <p> {JSON.stringify(data, null, 2)}</p> ) : ( <p>Loading data...</p>)} </div>
  );
}
