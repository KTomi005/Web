import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/web.html" element={<h1>Web oldal</h1>} />  
            </Routes>
        </Router>
    );
}

export default App;