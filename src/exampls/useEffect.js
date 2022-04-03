import React, {useState, useEffect} from 'react'

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x:0,
    y:0
  })
  // console.log('Component render')

  // useEffect(() => {
  //   console.log('render')
  // })

  // useEffect(() => {
  //   console.log('Type change', type)
  // }, [type]) //вызывать рендер только при взаимоействии с type

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
      .then((response) => response.json())
      .then((json) => setData(json));

      return () => {
        console.log('clean type')
      }
  }, [type]);


  const mouseMovehandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', mouseMovehandler)

    return () => {
      window.removeEventListener('mousemove', mouseMovehandler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Посты</button>
      {/* <pre>{JSON.stringify(data, null ,2)}</pre> */}
      <pre>{JSON.stringify(pos, null ,2)}</pre>
    </div>
  )
}

// export default App;
