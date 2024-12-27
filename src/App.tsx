import {useState} from "react";
import Amountinput from './Amountinput';
import Resultrow from "./Resultrow";

function App() {
  const [amount,setAmount] = useState('100');
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%">Find Cheapest BTC</h1>
      <div className="flex justify-center mt-8">
        <Amountinput 
        value={amount} 
        onChange={e => setAmount(e.target.value)}/>
      </div>
      <div className="mt-6">
        <Resultrow />
        <Resultrow />
        <Resultrow />
        <Resultrow />
      </div>
      </main>
  )
}

export default App