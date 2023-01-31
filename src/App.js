import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/Homepage';

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
    </Routes>
    </>
  );
}
export default App;


