import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import GetCardStatus from './Pages/GetCardStatus';
import zywa_nav_icon from './assets/zywa_nav_icon.png';


function App() {
  return (
    <>
      <nav className='h-[7vh] bg-black pt-2'>
        <img src={zywa_nav_icon} alt='logo' className='h-[5vh] ml-4 '/>
      </nav>
    <div className="bg-black w-[100vw] h-[93vh] flex justify-center items-center">
        
      <Routes>
        <Route path="/" element={<Navigate to="/get_card_status" replace />} />
        <Route path="/get_card_status" element={<GetCardStatus />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
