import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <HeaderComponent/>
        <Routes>
          {/* // http://localhost:5173 */}
          <Route path='/' element= { <ListEmployeeComponent /> }/>
          {/* // http://localhost:5173/employees */}
          <Route path='/employees' element= { <ListEmployeeComponent /> }/>
          {/* // http://localhost:5173/add-employees */}
          <Route path='/add-employee' element={<EmployeeComponent />}/>
          {/* // http://localhost:5173/edit-employees/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />}/>
        </Routes>
      
      <FooterComponent />
    </>
  )
}

export default App
