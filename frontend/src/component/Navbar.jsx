import { useState } from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Clothing Shop</h1>
        <div className="flex gap-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
          <a href="/admin" className="text-gray-600 hover:text-gray-900">Admin</a>
          <a href="/cart" className="text-gray-600 hover:text-gray-900">Cart</a>
        </div>
      </div>
    </nav>
  )
}
