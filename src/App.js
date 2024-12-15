import React, { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  const [productCategory, setProductCategory] = useState("Trousers");
  const productPrice = 145;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-center">Buttons for testing: selected <b>{productCategory}</b></p>
      {/* Mygtukai */}
      <div className="flex space-x-4 mb-6">

        <button
          onClick={() => setProductCategory("Trousers")}
          className="px-4 py-2 bg-[#DBDBDB] font-bold text-[#363636] hover:bg-[#ADADAD]"
        >
          Trousers
        </button>
        <button
          onClick={() => setProductCategory("Waistcoats")}
          className="px-4 py-2 bg-[#DBDBDB] font-bold text-[#363636] hover:bg-[#ADADAD]"
        >
          Waistcoats
        </button>
        <button
          onClick={() => setProductCategory("Jackets")}
          className="px-4 py-2 bg-[#DBDBDB] font-bold text-[#363636] hover:bg-[#ADADAD]"
        >
          Jackets
        </button>
      </div>

      {/* MultiStepForm */}
      <div className="w-full h-full flex justify-center">
        <MultiStepForm category={productCategory} price={productPrice} />
      </div>
    </div>
  );
}

export default App;


