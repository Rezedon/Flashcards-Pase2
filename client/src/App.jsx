import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './widgets/Layout/layout';

import MainPage from './pages/MainPage';
import Questionpage from './pages/Questionpage';
// import RegistrationForm from './pages/Auth';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/cards/:themeId' element={<Questionpage />} />
          {/* <Route path='/auth' element={<RegistrationForm />} /> */}
          <Route path='/' element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
