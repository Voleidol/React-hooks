import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
  let i = 0
  while(i < 1000000000) i++
  console.log('ComplexCompute')
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // const styles = {
  //   color: colored ? 'darkred' : 'black'
  // } ф-я вызывается даже если ее не вызывали

  const styles = useMemo(() => {
    return {
      color: colored ? 'darkred' : 'black'
    } 
  }, [colored]) //кэшируем значение, чтоб если оно не изменилось, то функция не вызывалась

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) //кэшируем значение, чтоб если оно не изменилось, то функция не вызывалась
  
  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success">Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger">Убавить</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>
    </>
  )
}

// export default App;
