import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import navbar from './components/navbar'
import footer from './components/footer'


export default function App() {
  return (
    <div className="App">
      <navbar />
       <hero> 
          <img src="./src/assets/hero-image.png" alt="Hero Image" className="w-full h-auto" />
       </hero>
        <main>
          <h1 className="text-4xl font-bold text-center mt-8">Bem-vindo ao Duck's Code!</h1>
          <p className="text-center mt-4 text-gray-600">Seu destino para tutoriais de programação, dicas e muito mais.</p>
        </main>
      <footer />
    </div>
    
  )

}
