import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormProvider } from './context/FormContex';

// Rutas
import { Home } from './page/Home';
import { Editdata } from './page/EditData';


function App () {
  
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/EditData/:id' element={<Editdata/>} /> 
        </Routes>
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
