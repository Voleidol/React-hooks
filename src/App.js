import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function  useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  } 

  const clear = () => setValue('')

  return {
    // value, onChange
    bind: {value, onChange},
    value,
    clear
  }
}


function App() {

  // const [name, setName] = useState('')


  // const changeHandler = event => {
  //   setName(event.target.value)
  // }
  const input = useInput('')
  useLogger(input.value)

  return (
    <div className="container pt-3">    
      {/* <input type="text" value={input.value} onChange={input.onChange}/> */}
      <input type="text" {...input.bind} />

      <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  )
}

export default App;
