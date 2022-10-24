import React from 'react'
import './App.css'
import { Home, Layout, User, WagmiProvider } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <WagmiProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </WagmiProvider>
  )
}

export default App
