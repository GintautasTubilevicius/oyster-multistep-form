import React from 'react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  const productCategory = "Trousers";
  const productPrice = 145;

  return (
    //<div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="w-full h-full flex justify-center">
      <MultiStepForm category={productCategory} price={productPrice} />
    </div>
  );
}

export default App;

