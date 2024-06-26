import LandingPage from './compnonents/Landing/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route path='Products' element={<Products/>} /> */}
          
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
