import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout(){
  return (
    <>
      <Header />
      <main style={{ padding: '22px 0 44px 0' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
