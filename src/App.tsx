import React from 'react'
import './App.css'
import { Home, Layout, WagmiProvider } from './components'

function App() {
  return (
    <WagmiProvider>
      <Layout>
        <Home />
      </Layout>
    </WagmiProvider>
  )
}

export default App
