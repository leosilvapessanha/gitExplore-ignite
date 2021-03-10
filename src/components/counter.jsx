import {useState} from 'react'

export function Counter() {
  const [countMe, setCountMe] = useState(0)
  function increment(){
    setCountMe(countMe+1)
  }
  return(
    <div>
      <h2>{countMe}</h2>
      <button type="button"onClick={increment}>Increment</button>
    </div>
  )
}