import React, {useState, useCallback} from 'react'
import ItemList from './itemsList'


function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'black'
  }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
  }, [count]) //похож на useMemo, так же кэширует. но только полностью возвращает (переменная не результат ф-и, а сама ф-я)

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)} className="btn btn-success">Добавить</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>

      <ItemList getItems={generateItemsFromAPI}/>
    </>
  )
}

// export default App;
