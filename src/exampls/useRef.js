import React, {useState, useEffect, useRef} from 'react'

// let renderCount = 1
// useRef сохраняет состояние при работе с компонентом и рендерах и при этом не вызывает рендер
function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1) //используем если не хотим менять рендер компоннта, а только перерисовать какую то составляющую
  const inputRef = useRef(null)
  const prevValue = useRef('') //показывать прошлое состояние

  useEffect(() => {
    renderCount.current++
    // console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  )
}

// export default App;
