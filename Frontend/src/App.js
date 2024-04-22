
import './App.css';
import Layout from './Component/Common/Layout';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import ContactKitchen from './ContactKitchen';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import { Toaster } from 'react-hot-toast';
import OtherHardWare from './OtherHardWare';

function App() {
  return (
    <div className="App">
      <Layout>
        
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Kitchen' element={<ContactKitchen />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/OtherHardWare' element={<OtherHardWare />} />

          </Routes>
          <Toaster/>
        
      </Layout>
    </div>
  );
}

export default App;
