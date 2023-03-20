import { useState } from 'react'
import '../styles/calculator.css'

export const Calculator = () => {

  const [num, setNum] = useState(0)

  function getNum (e) {
    setNum(e.target.value)
  }

  return (

    <div className='calculator'>

      <h1 className='result'>{num}</h1>

      <div className="numbers">
        <button className='white' onClick={getNum} value={0}>AC</button>
        <button className='white'>+/-</button>
        <button className='white'>%</button>
        <button className='orange'>/</button>
        <button onClick={getNum} value={7}>7</button>
        <button onClick={getNum} value={8}>8</button>
        <button onClick={getNum} value={9}>9</button>
        <button className='orange'>X</button>
        <button onClick={getNum} value={4}>4</button>
        <button onClick={getNum} value={5}>5</button>
        <button onClick={getNum} value={6}>6</button>
        <button className='orange'>-</button>
        <button onClick={getNum} value={1}>1</button>
        <button onClick={getNum} value={2}>2</button>
        <button onClick={getNum} value={3}>3</button>
        <button className='orange'>+</button>
        <button onClick={getNum} value={0} className='zero'>0</button>
        <button>,</button>
        <button>=</button>
      </div>

    </div>
  )
}
