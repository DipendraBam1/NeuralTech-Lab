import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import TopServices from '@/pages/Service.tsx'
import Technology from '@/pages/Technology'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Blog from '@/pages/Blog'
import BlogArticle from '@/pages/BlogArticle'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<TopServices />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
