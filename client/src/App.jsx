import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './widgets/Layout/layout';

import QuestionCard from './widgets/QuestionCard/QuestionCard';
import MainPage from './pages/MainPage';
import RegistrationForm from './pages/Auth';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/card/:id' element={<QuestionCard />} />
          <Route path='/auth' element={<RegistrationForm />} />
          <Route path='/' element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
