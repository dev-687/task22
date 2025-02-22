import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0)

  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");



  return (
    <>
      <h1 className="fixed top-0 left-0 w-full text-center text-white text-3xl font-bold bg-black py-4 z-10">
        Products
      </h1>

      <div className="min-h-screen bg-black flex justify-center items-center pt-20">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <Card data={data} />
        )}
      </div>


    </>
  );

}

export default App
