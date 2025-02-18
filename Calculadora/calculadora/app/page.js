"use client";
import { useState } from "react";

export default function Home() {
  const [numero_A, setNumero_A] = useState(0);
  const [numero_B, setNumero_B] = useState(0);
  const [resultado, setResultado] = useState(0);

  function Somar() {
    const numA = numero_A || 0;
    const numB = numero_B || 0;

    console.log(numA, numB);
    setResultado(numA + numB);
    console.log("Estou do lado do cliente...");
  }

  function Clear() {
    setNumero_A(0);
    setNumero_B(0);
    setResultado(0);
  }

  function Subtrair() {
    const numA = numero_A || 0;
    const numB = numero_B || 0;

    console.log(numA, numB);
    setResultado(numA - numB);
  }

  return (
    <div className="bg-black -500 h-screen w-full justify-items-center">
      <h1 className="text-orange-500">Calculadora com NextJS</h1>
      <div className="flex flex-col space-y-4 justify-items-center">
        <input
          type="number"
          className="text-orange-500 text-center h-10 w-22"value={numero_A}onChange={(e) => setNumero_A(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="text-orange-500 text-center h-10 w-22" value={numero_B} onChange={(e) => setNumero_B(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="text-orange-500 text-center h-10 w-22"
          value={resultado}
          readOnly
        />
        <button
          onClick={Somar}
          className="text-white border border-white h-10 w-22 cursor-pointer"
        >
          Somar
        </button>

        <button onClick={Subtrair} className=" border border-orange-500 text-orange-500 text-center h-10 w-22">Subtrair</button>

        <button
        className="text-purple-500 border border-purple-500 h-10 w-22 cursor-pointer"
          onClick={Clear}
          
        >
          Limpar
        </button>
      </div>
    </div>
  );
}
