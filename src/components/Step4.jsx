import React from "react";

const Step4 = ({ formData, category, setCurrentStep, price }) => {
  // Apskaičiuojame galutinę kainą, įskaitant pasirinktų funkcijų kainas
  const totalPrice = price + formData.additionalPrice;

  const getFormattedFabric = () => {
    if (!formData.fabric) return "Not selected";

    const isOrganic = formData.fabric.startsWith("ORGANIC ");
    return isOrganic ? formData.fabric : `${formData.fabric}`;
  };

  const getFormattedFeatures = () => {
    if (!formData.selectedFeatures || formData.selectedFeatures.length === 0) {
      return (
        <p
          onClick={() => setCurrentStep(2)}
          className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
        >
          Not selected
          <img
            src="/svg/edit.svg"
            alt="Edit icon"
            className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
          />
        </p>
      );
    }

    return formData.selectedFeatures.map((feature, index) => (
      <p
        key={index}
        onClick={() => setCurrentStep(2)}
        className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
      >
        {feature.name}
        <img
          src="/svg/edit.svg"
          alt="Edit icon"
          className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
        />
      </p>
    ));
  };

  const getFormattedMeasurements = () => {
    if (!formData.measurements) {
      return (
        <p
          onClick={() => setCurrentStep(3)}
          className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
        >
          Not provided
          <img
            src="/svg/edit.svg"
            alt="Edit icon"
            className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
          />
        </p>
      );
    }

    const unit = formData.unit || "Cm";
    return Object.entries(formData.measurements).map(([key, value], index) => {
      const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const displayUnit = key === "weight" ? "kg" : unit.toLowerCase(); // Pridedame "kg" tik prie Weight
      return (
        <p
          key={index}
          onClick={() => setCurrentStep(3)}
          className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
        >
          {`${label}: ${value} ${displayUnit}`}
          <img
            src="/svg/edit.svg"
            alt="Edit icon"
            className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
          />
        </p>
      );
    });
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", formData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:px-[10px]">
      {/* Pirmas konteineris: Nuotrauka */}
      <div className="flex justify-center items-center h-fit md:w-1/2">
        <div className="flex h-[250px] items-center justify-center md:h-full">
          <img
            src="/images/trousers.jpg"
            alt="Selected item"
            className="object-contain max-h-[250px] md:max-w-[80%] md:max-h-[80%]"
          />
        </div>
      </div>

      {/* Antras konteineris: Santrauka */}
      <div className="flex justify-center -mx-5 px-5 py-8 flex-col bg-[#EEEEEE] md:w-1/2 md:mx-0 md:p-10">
        <div>
          <h2 className="text-[24px] font-bold mb-6">{category.toUpperCase()}</h2>
          <div className="flex flex-col gap-4 text-[14px] md:text-[16px]">
            {/* Audinio informacija */}
            <div className="flex gap-8 border-b-[1px] pb-4">
              <div className="min-w-[60px] h-[24px]">Fabric</div>
              <div className="flex flex-row flex-wrap gap-2 bg-gray-200">
                <p
                  onClick={() => setCurrentStep(1)}
                  className="relative hover-item box-content text-[14px]/[14px] md:text-[16px]/[16px] p-3 bg-[#DBDBDB] font-semibold hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
                >
                  {getFormattedFabric()}
                  <img
                    src="/svg/edit.svg"
                    alt="Edit icon"
                    className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
                  />
                </p>
              </div>
            </div>
            {/* Stiliaus informacija */}
            <div className="flex gap-8 border-b-[1px] pb-4">
              <div className="min-w-[60px] h-[24px]">Style</div>
              <div className="flex flex-row flex-wrap gap-2">{getFormattedFeatures()}</div>
            </div>
            {/* Dydžių informacija */}
            <div className="flex gap-8 border-b-[1px] pb-4">
              <div className="min-w-[60px] h-[24px]">Size</div>
              <div className="flex flex-row flex-wrap gap-2">{getFormattedMeasurements()}</div>
            </div>
          </div>
        </div>
        <p className="my-8 text-[14px]">Please check your configured product and add to cart to proceed the order.</p>
        <div className="flex flex-row gap-8 items-center justify-between md:justify-start">
          <p className="font-bold text-[24px]">€{totalPrice.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-[#BF000D] text-[#FFFFFF] font-bold text-[14px] md:text-[16px]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;



// import React from "react";

// const Step4 = ({ formData, category, setCurrentStep, price }) => {
//   // Apskaičiuojame galutinę kainą, įskaitant pasirinktų funkcijų kainas
//   const totalPrice = price + formData.additionalPrice;

//   const getFormattedFabric = () => {
//     if (!formData.fabric) return "Not selected";

//     const isOrganic = formData.fabric.startsWith("ORGANIC ");
//     return isOrganic ? formData.fabric : `${formData.fabric}`;
//   };

//   const getFormattedFeatures = () => {
//     if (!formData.selectedFeatures || formData.selectedFeatures.length === 0) {
//       return (
//         <p
//           onClick={() => setCurrentStep(2)}
//           className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           Not selected
//           <img
//             src="/svg/edit.svg"
//             alt="Edit icon"
//             className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
//           />
//         </p>
//       );
//     }

//     return formData.selectedFeatures.map((feature, index) => (
//       <p
//         key={index}
//         onClick={() => setCurrentStep(2)}
//         className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//       >
//         {feature.name}
//         <img
//           src="/svg/edit.svg"
//           alt="Edit icon"
//           className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
//         />
//       </p>
//     ));
//   };

//   const getFormattedMeasurements = () => {
//     if (!formData.measurements) {
//       return (
//         <p
//           onClick={() => setCurrentStep(3)}
//           className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           Not provided
//           <img
//             src="/svg/edit.svg"
//             alt="Edit icon"
//             className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
//           />
//         </p>
//       );
//     }

//     const unit = formData.unit || "Cm";
//     return Object.entries(formData.measurements).map(([key, value], index) => {
//       const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//       return (
//         <p
//           key={index}
//           onClick={() => setCurrentStep(3)}
//           className="relative hover-item p-3 bg-[#DBDBDB] font-semibold text-[14px]/[14px] md:text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           {`${label}: ${value}${unit.toLowerCase()}`}
//           <img
//             src="/svg/edit.svg"
//             alt="Edit icon"
//             className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
//           />
//         </p>
//       );
//     });
//   };

//   const handleAddToCart = () => {
//     console.log("Adding to cart:", formData);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:px-[10px]">
//       {/* Pirmas konteineris: Nuotrauka */}
//       <div className="flex justify-center items-center h-fit md:w-1/2">
//         <div className="flex h-[250px] items-center justify-center md:h-full">
//           <img
//             src="/images/trousers.jpg"
//             alt="Selected item"
//             className="object-contain max-h-[250px] md:max-w-[80%] md:max-h-[80%]"
//           />
//         </div>
//       </div>

//       {/* Antras konteineris: Santrauka */}
//       <div className="flex justify-center -mx-5 px-5 py-8 flex-col bg-[#EEEEEE] md:w-1/2 md:mx-0 md:p-10">
//         <div>
//           <h2 className="text-[24px] font-bold mb-6">{category.toUpperCase()}</h2>
//           <div className="flex flex-col gap-4 text-[14px] md:text-[16px]">
//             {/* Audinio informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Fabric</div>
//               <div className="flex flex-row flex-wrap gap-2 bg-gray-200">
//                 <p
//                   onClick={() => setCurrentStep(1)}
//                   className="relative hover-item box-content text-[14px]/[14px] md:text-[16px]/[16px] p-3 bg-[#DBDBDB] font-semibold hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//                 >
//                   {getFormattedFabric()}
//                   <img
//                     src="/svg/edit.svg"
//                     alt="Edit icon"
//                     className="icon absolute top-[-31px] left-1/2 transform -translate-x-1/2 hidden"
//                   />
//                 </p>
//               </div>
//             </div>
//             {/* Stiliaus informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Style</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedFeatures()}</div>
//             </div>
//             {/* Dydžių informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Size</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedMeasurements()}</div>
//             </div>
//           </div>
//         </div>
//         <p className="my-8 text-[14px]">Please check your configured product and add to cart to proceed the order.</p>
//         <div className="flex flex-row gap-8 items-center justify-between md:justify-start">
//           <p className="font-bold text-[24px]">€{totalPrice.toFixed(2)}</p>
//           <button
//             onClick={handleAddToCart}
//             className="px-6 py-3 bg-[#BF000D] text-[#FFFFFF] font-bold text-[14px] md:text-[16px]"
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step4;








// import React from "react";

// const Step4 = ({ formData, category, setCurrentStep, price }) => {
//   const getFormattedFabric = () => {
//     if (!formData.fabric) return "Not selected";

//     const isOrganic = formData.fabric.startsWith("ORGANIC ");
//     return isOrganic ? formData.fabric : `${formData.fabric}`;
//   };

//   const getFormattedFeatures = () => {
//     if (!formData.selectedFeatures || formData.selectedFeatures.length === 0) {
//       return (
//         <p
//           onClick={() => setCurrentStep(2)}
//           className="p-3 bg-[#DBDBDB] font-semibold text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           Not selected
//         </p>
//       );
//     }

//     return formData.selectedFeatures.map((feature, index) => (
//       <p
//         key={index}
//         onClick={() => setCurrentStep(2)}
//         className="p-3 bg-[#DBDBDB] font-semibold text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//       >
//         {feature.name}
//       </p>
//     ));
//   };

//   const getFormattedMeasurements = () => {
//     if (!formData.measurements) {
//       return (
//         <p
//           onClick={() => setCurrentStep(3)}
//           className="p-3 bg-[#DBDBDB] font-semibold text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           Not provided
//         </p>
//       );
//     }

//     const unit = formData.unit || "Cm";
//     return Object.entries(formData.measurements).map(([key, value], index) => {
//       const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//       return (
//         <p
//           key={index}
//           onClick={() => setCurrentStep(3)}
//           className="p-3 bg-[#DBDBDB] font-semibold text-[16px]/[16px] hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//         >
//           {`${label}: ${value}${unit.toLowerCase()}`}
//         </p>
//       );
//     });
//   };

//   const handleAddToCart = () => {
//     console.log("Adding to cart:", formData);
//   };

//   return (
//     <div className="flex flex-row px-[10px] justify-center items-center gap-8">
//       {/* Pirmas konteineris: Nuotrauka */}
//       <div className="w-1/2 flex justify-center items-center h-fit">
//         <div className="w-full flex items-center justify-center">
//           <img
//             src="/images/trousers.jpg"
//             alt="Selected item"
//             className="max-w-[80%] max-h-[80%] object-contain"
//           />
//         </div>
//       </div>

//       {/* Antras konteineris: Santrauka */}
//       <div className="w-1/2 flex justify-center flex-col p-10 bg-[#EEEEEE]">
//         <div>
//           <h2 className="text-[24px] font-bold mb-6">{category.toUpperCase()}</h2>
//           <div className="flex flex-col gap-4 text-[16px]">
//             {/* Audinio informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Fabric</div>
//               <div className="flex flex-row flex-wrap gap-2 bg-gray-200">
//                 <p
//                   onClick={() => setCurrentStep(1)}
//                   className="box-content text-[16px]/[16px] p-3 bg-[#DBDBDB] font-semibold hover:bg-[#ADADAD] hover:shadow-xl cursor-pointer"
//                 >
//                   {getFormattedFabric()}
//                 </p>
//               </div>
//             </div>
//             {/* Stiliaus informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Style</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedFeatures()}</div>
//             </div>
//             {/* Dydžių informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Size</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedMeasurements()}</div>
//             </div>
//           </div>
//         </div>
//         <p className="my-8 text-[14px]">Please check your configured product and add to cart to proceed the order.</p>
//         <div className="flex flex-row gap-8 items-center">
//           <p className="font-bold text-[24px]">€{price}</p>
//           <button
//             onClick={handleAddToCart}
//             className="px-6 py-3 bg-[#BF000D] text-[#FFFFFF] font-bold text-[16px]"
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step4;



// import React from "react";

// const Step4 = ({ formData, category }) => {
//   const getFormattedFabric = () => {
//     if (!formData.fabric) return "Not selected";

//     const isOrganic = formData.fabric.startsWith("ORGANIC ");
//     return isOrganic ? formData.fabric : `${formData.fabric}`;
//   };

//   const getFormattedFeatures = () => {
//     if (!formData.selectedFeatures || formData.selectedFeatures.length === 0) {
//       return <p className="p-3 bg-gray-200 font-semibold text-[16px]/[16px]">Not selected</p>;
//     }

//     return formData.selectedFeatures.map((feature, index) => (
//       <p key={index} className="p-3 bg-gray-200 font-semibold text-[16px]/[16px]">
//         {feature.name}
//       </p>
//     ));
//   };

//   const getFormattedMeasurements = () => {
//     if (!formData.measurements) {
//       return <p className="p-3 bg-gray-200 font-semibold text-[16px]/[16px]">Not provided</p>;
//     }

//     const unit = formData.unit || "Cm";
//     return Object.entries(formData.measurements).map(([key, value], index) => {
//       const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//       return (
//         <p key={index} className="p-3 bg-gray-200 font-semibold text-[16px]/[16px]">
//           {`${label}: ${value}${unit.toLowerCase()}`}
//         </p>
//       );
//     });
//   };

//   const handleAddToCart = () => {
//     console.log("Adding to cart:", formData);
//   };

//   return (
//     <div className="flex flex-row px-[10px] justify-center items-center gap-8">
//       {/* Pirmas konteineris: Nuotrauka */}
//       <div className="w-1/2 flex justify-center items-center h-fit">
//         <div className="w-full flex items-center justify-center">
//           <img
//             src="/images/trousers.jpg"
//             alt="Selected item"
//             className="max-w-[80%] max-h-[80%] object-contain"
//           />
//         </div>
//       </div>

//       {/* Antras konteineris: Santrauka */}
//       <div className="w-1/2 flex justify-center flex-col p-10 bg-[#EEEEEE]">
//         <div>
//           <h2 className="text-[24px] font-bold mb-6">{category.toUpperCase()}</h2>
//           <div className="flex flex-col gap-4 text-[16px]">
//             {/* Audinio informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Fabric</div>
//               <div className="flex flex-row flex-wrap gap-2 bg-gray-200">
//                 <p className="box-content text-[16px]/[16px] p-3 bg-gray-200 font-semibold">{getFormattedFabric()}</p>
//               </div>
//             </div>
//             {/* Stiliaus informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Style</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedFeatures()}</div>
//             </div>
//             {/* Dydžių informacija */}
//             <div className="flex gap-8 border-b-[1px] pb-4">
//               <div className="min-w-[60px] h-[24px]">Size</div>
//               <div className="flex flex-row flex-wrap gap-2">{getFormattedMeasurements()}</div>
//             </div>
//           </div>
//         </div>
//         <p className="my-8 text-[14px]">Please check your configured product and add to cart to proceed the order.</p>
//         <div className="flex flex-row gap-8 items-center">
//           <p className="font-bold text-[24px]">€145</p>
//           <button
//             onClick={handleAddToCart}
//             className="px-6 py-3 bg-[#BF000D] text-[#FFFFFF] font-bold text-[16px]"
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step4;