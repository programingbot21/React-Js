import React, { useEffect, useState } from 'react'

function DataFecthCom() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cacheData = localStorage.getItem('cacheData');

    if(cacheData){
        setData(JSON.parse(cacheData));
        setLoading(false);
    }else{
        fetch('http://jsonplaceholder.typicode.com/todos/1')
        .then((respose) => respose.json())
        .then((data) => {
            setData(data);
            localStorage.setItem('cacheData', JSON.stringify(data));
            setLoading(false)
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
    }
  },[]);


  if(loading) return <div>Loading: {error.message}</div>
 
  if(error) return <div>Error: {error.message}</div>

  return (
    <div><h1>TOdo</h1>
    <p><strong>title:</strong> {data.title}</p>
    <p><strong>Complete</strong> {data.completed ? 'Yes' : 'No'}</p>
    </div>
   
  )
}

export default DataFecthCom