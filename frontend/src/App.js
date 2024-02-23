import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import GetCardStatus from './Pages/GetCardStatus';

function App() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/" element={<Navigate to="/get_card_status" replace />} />
        <Route path="/get_card_status" element={<GetCardStatus />} />
      </Routes>
    </div>
  );
}

export default App;
