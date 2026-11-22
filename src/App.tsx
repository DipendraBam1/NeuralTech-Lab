import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import TopServices from '@/components/sections/services/Top.Services'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<TopServices />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
