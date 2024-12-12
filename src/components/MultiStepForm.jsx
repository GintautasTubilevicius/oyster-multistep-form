import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = ({ category, price }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fabric: "",
    style: "",
    sizes: [],
    selectedFeatures: [],
    additionalPrice: 0, // Papildomų funkcijų kaina
  });

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} category={category} />,
    <Step3 formData={formData} setFormData={setFormData} />,
    <Step4 formData={formData} category={category} setCurrentStep={setCurrentStep} price={price} />
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[375px] h-full pb-2 bg-white flex flex-col lg:w-[1440px] lg:pb-[80px]">
      <div className="px-5 pt-8 flex flex-col relative lg:static lg:pt-[48px]">
        <div className="text-center">
          <h2 className="font-bold text-[24px] text-[#363636] lg:text-[36px]">MADE TO MEASURE</h2>
        </div>
        <StepIndicator currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div className="mt-6">{steps[currentStep - 1]}</div>
      </div>

      {currentStep < steps.length && (
        <div
          className="w-full px-5 py-2 flex justify-between items-center mt-6 bg-[#EEEEEE] text-[14px] lg:text-[16px] lg:px-8 sticky bottom-0"
        >
          <button
            onClick={handlePrevious}
            className="px-6 py-3 w-[104px] h-[44px] bg-[#D9D9D9] font-bold disabled:font-normal disabled:bg-[#363636] disabled:opacity-20 disabled:text-[#FFFFFF] lg:w-[110px] lg:h-[48px]"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <div className="text-[24px] items-center font-bold lg:hidden">
            €{price}
          </div>
          <div className="flex flex-row items-center gap-6">
            <div className="text-[24px] font-bold hidden lg:block">
              €{price}
            </div>
            <button
              onClick={handleNext}
              className="px-6 py-3 w-[104px] h-[44px] bg-[#BF000D] text-white font-bold lg:w-[110px] lg:h-[48px]"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;



// import React, { useState } from "react";
// import StepIndicator from "./StepIndicator";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fabric: "",
//     style: "",
//     sizes: [],
//   });

//   const steps = [
//     <Step1 formData={formData} setFormData={setFormData} />,
//     <Step2 formData={formData} setFormData={setFormData} category="Trousers" />,
//     <Step3 formData={formData} setFormData={setFormData} />,
//     <Step4 formData={formData} category="Trousers" setCurrentStep={setCurrentStep} />
//   ];

//   const handleNext = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   return (
//     //<div className="h-full w-full bg-gray-100">
//       <div className="w-[1440px] h-full pb-[80px] bg-white flex flex-col">
//         <div className="px-[20px] pt-[48px] flex flex-col">
//           <div className="text-center">
//             <h2 className="font-bold text-[36px] text-[#363636]">MADE TO MEASURE</h2>
//           </div>
//           {/* Perdavimas setCurrentStep */}
//           <StepIndicator currentStep={currentStep} setCurrentStep={setCurrentStep} />
//           <div className="mt-6">{steps[currentStep - 1]}</div>
//         </div>

//         {/* Mygtukų rodymas */}
//         {currentStep < steps.length && (
//           <div className="w-full justify-self-end px-8 py-2 flex justify-between mt-6 bg-[#EEEEEE] text-[16px]">
//             <button
//               onClick={handlePrevious}
//               className="px-4 py-2 w-[112px] h-[48px] bg-[#D9D9D9] font-bold disabled:font-normal disabled:bg-[#363636] disabled:opacity-20 disabled:text-[#FFFFFF]"
//               disabled={currentStep === 1}
//             >
//               Previous
//             </button>
//             <div className="flex flex-row items-center gap-6">
//               <div className="text-[24px] font-bold">
//               €145
//               </div>
//               <button
//                 onClick={handleNext}
//                 className="px-4 py-2 w-[112px] h-[48px] bg-[#BF000D] text-white font-bold"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     //</div>
//   );
// };

// export default MultiStepForm;