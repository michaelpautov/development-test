import React from 'react'
import './App.css'
import { Home, Layout, User, Wagmi, WagmiProvider } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <WagmiProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/wagmi" element={<Wagmi />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </WagmiProvider>
  )
}

export default App
