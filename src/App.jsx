import './App.css'
import Dashboard from '../src/components/Dashboard'
import NewCrono from '../src/components/NewCrono'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Alert from './components/Alert'


function App() {
  const [cronometers, setCronometers] = useState(()=>
    localStorage.getItem('prevCronos') ? JSON.parse(localStorage.getItem('prevCronos')) : []
    )
  const [inputValue , setInputValue] = useState('') 
  const [inputError, setInputError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cronoDelete, setCronoDelete] = useState(null)



  /* useEffect(()=> {
        const prevCronos = localStorage.getItem('prevCronos')
        if(prevCronos) {
          setCronometers(JSON.parse(prevCronos))
        }
    },[]) */

    useEffect(()=> {
    localStorage.setItem('prevCronos', JSON.stringify(cronometers))
    }, [cronometers])

    /* useEffect(()=> {
      if(!inputValue.trim() || inputValue == '') {
        setInputError('Debe ingresar un nombre para crear un nuevo cronómetro')
      }
    },[inputValue]) */

    
  

  function deleteCrono(cronoId) {
      /* let newCronometers = cronometers.filter((crono)=> crono.id !== id)
      setCronometers(newCronometers) */
      let newCronosList = cronometers.filter((crono)=> crono.id !== cronoId)
      setCronometers(newCronosList)
      setIsModalOpen(false)
      setCronoDelete(null)
      return newCronosList
  }
  function handleDelete(id) {
      setCronoDelete(id)
      setIsModalOpen(true)
  }
  function addCrono(e) {
    e.preventDefault()
    if(!inputValue.trim()) {
      setInputError('Debe ingresar un nombre para crear un nuevo cronómetro')
    } else {
      setInputError('')
      setCronometers((cronometer)=> [
        ...cronometer,
        {
          id: cronometer.length + 1,
          name: inputValue,
          lastStart: Date.now(),
          isRunning: false,
          elapsed: 0
        }
      ])
    }

    
      
      setInputValue('')
  }
  
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <div className={`${isModalOpen? 'blur-sm transition':''} sm:flex lg:justify-between min-h-[100vh] flex-col w-full`}>
        <div className='sm:grid grid-cols-2 gap-2 p-5 w-full'>
            <NewCrono setInputError={setInputError} inputError={inputError}   addCrono={addCrono} /* isClicked={isClicked} setIsClicked={setIsClicked} */ inputValue={inputValue} setInputValue={setInputValue} />
            <Dashboard handleDelete={handleDelete} setCronometers={setCronometers} onClose={deleteCrono} cronometers={cronometers} names={inputValue}/>
        </div>
        <Footer/>
      </div>
      
      {isModalOpen && 
      <div className='fixed inset-0 flex items-center justify-center bg-black/30' >
        <Alert isOpen={isModalOpen} onCancel={()=>setIsModalOpen(false)} onConfirm={()=>deleteCrono(cronoDelete)}/>
      </div>
}
    </div>
  )
}

export default App
