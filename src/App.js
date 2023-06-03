
import './App.css';
import MainScreen from './components/MainScreen/MainScreen'
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import {
  BrowserRouter, Switch, Route, Link, Routes
} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/WhyUs" element={<Reasons />} />
        <Route path="/Testimonials" element={<Testimonials />} />

      </Routes>
    </BrowserRouter>



  );
}

export default App;
