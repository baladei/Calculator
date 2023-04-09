import { useState } from 'react'
import '../styles/calculator.css'

export const Calculator = () => {

  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function getNum (e) {
    if(num === 0) {
      setNum(e.target.value)
    } else if (num.startsWith(".") || num.startsWith(0)) {
      setNum(0)    
    } else if (e.target.value === '.' && num.includes('.')) {
      setNum(num)
    } else if (num.length >= 12) {
      setNum("Error")
    } else if (num === "Error") {
      setNum(reset)
    } else {
      setNum(num + e.target.value)
    }  
  }
  
  function operatorHandler (e) {
    setOperator(e.target.value)
    setOldNum(num)
    setNum(0)
  }

  function calculate () {
    if(operator === '+') {
      setNum(parseFloat(oldnum) + parseFloat(num))
    } else if (operator === '-') {
      setNum(oldnum - num)
    } else if (operator === 'x') {
      setNum(oldnum * num)
    } else if (operator === '/') {
      setNum(oldnum / num)
    } 
  }

  function reset () {
    setNum(0)
  }

  function percentage () {
    setNum(num / 100)
  }

  function changeOperator () {
    if(num > 0) {
      setNum(-num)
    } else {
      setNum(-num)
    }
  }

  return (

    <div className='calculator'>

      <h1 className='result'>{num}</h1>

      <div className="numbers">
        <button className='white' onClick={reset}>AC</button>
        <button onClick={changeOperator} className='white'>+/-</button>
        <button onClick={percentage}className='white'>%</button>
        <button onClick={operatorHandler} value='/' className='orange'>/</button>
        <button onClick={getNum} value={7}>7</button>
        <button onClick={getNum} value={8}>8</button>
        <button onClick={getNum} value={9}>9</button>
        <button onClick={operatorHandler} value='x' className='orange'>x</button>
        <button onClick={getNum} value={4}>4</button>
        <button onClick={getNum} value={5}>5</button>
        <button onClick={getNum} value={6}>6</button>
        <button onClick={operatorHandler} value='-' className='orange'>-</button>
        <button onClick={getNum} value={1}>1</button>
        <button onClick={getNum} value={2}>2</button>
        <button onClick={getNum} value={3}>3</button>
        <button onClick={operatorHandler} value='+' className='orange'>+</button>
        <button onClick={getNum} value={0} className='zero'>0</button>
        <button onClick={getNum} value={"."}>,</button>
        <button onClick={calculate} className='orange'>=</button>
      </div>

    </div>
  )
}
