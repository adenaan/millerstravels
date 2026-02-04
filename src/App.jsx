import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ensureSeed } from './utils/storage'
import { defaultPackages, defaultConfig } from './data/defaultData'
import Layout from './components/Layout'
import Home from './components/Home'
import PackagesPage from './components/PackagesPage'
import PackageDetails from './components/PackageDetails'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import ProtectedRoute from './components/admin/ProtectedRoute'

export default function App(){
  useEffect(() => {
    ensureSeed({ defaultPackages, defaultConfig })
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
