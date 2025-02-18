"use client"
import React, { useState } from 'react'

export default function Home() {

  const [peso, setPeso] = useState(0);
  const[altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState("");

  function calcularIMC() {
    const imc = (peso/altura^2) 
  }


  return (
    <div className="bg-white-500 h-screen w-full">
      <header class = "bg-blue-500 h-20"> 
      </header>

      <div class = "justify-center items-center flex">
        <h1 class = "font-bold">Calcular IMC</h1>
      </div>
      
      
    </div>
  )
}
