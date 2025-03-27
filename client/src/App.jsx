import './App.css'
import { Route, Routes } from "react-router";
import Layout from './widgets/Layout/layout';
import QuestionCard from './widgets/QuestionCard/QuestionCard';
import MainPage from './pages/MainPage'

function App() {
  

  return (
    <>
<Routes>
<Route element={<Layout/>} >
 <Route path='/card/:id'  element={<QuestionCard/>}/>
<Route path='/' element={<MainPage/> }/>
</Route>
</Routes>
    </>
  )
}

export default App
