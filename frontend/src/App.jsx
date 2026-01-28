import { useState } from 'react'
import Navbar from './component/Navbar'
import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Clothing Shop</h1>
        <p className="text-gray-600 mt-2">Your one-stop shop for quality clothing</p>
      </main>
    </div>
  )
}
