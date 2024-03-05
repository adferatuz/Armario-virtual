import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global-styles/App.css'
import Layout from './components/layout/Layout';
import Estylos from './Views/Estylos/Estylos.jsx'
import Blog from './Views/Blog/Blog.jsx'
import ArmarioVirtual from './Views/Armario-Virtual/ArmarioVirtual.jsx'
import Contacto from './Views/Contacto/Contacto.jsx'
import Profile from './Views/Profile/Profile.jsx'
import Registro from './Views/Registro/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Estylos />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/armario-virtual" element={<ArmarioVirtual />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/perfil" element={<Profile />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
