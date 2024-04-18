import { useState } from 'react'

function InputCreate () {
  const [inputTitle, setInputTitle] = useState('');
  const [resData, setResData] = useState('')
     
  const urlApi = 'http://localhost:3000/create'

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setResData('');

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json', // Indicamos que el contenido es JSON
        },
        body: JSON.stringify({title: inputTitle})  // Convertimos el payload de JS a JSON
      })
      const data = await response.json();
      setResData(data.title);
      console.log(data);
      setInputTitle('');

    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputTitle}
          onChange={(e)=> setInputTitle(e.target.value)}
          placeholder='escribe una tarea'                  
        />
        <button type="submit">Agregar tarea</button>
      </form>
      {resData !== '' && <h2>tarea agregada: {resData}</h2>}
   
    </>
  )

} 

export default InputCreate