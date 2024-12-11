import React, { useState, useEffect } from "react";

const Step3 = ({ formData, setFormData }) => {
  const [currentSubpage, setCurrentSubpage] = useState("BODY");
  const [unit, setUnit] = useState("Cm");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Sinchronizuojame pradinius duomenis iš formData
  useEffect(() => {
    if (formData.unit) {
      setUnit(formData.unit); // Nustatome matavimo vienetą iš formData
    }
  }, [formData.unit]);

  // Funkcija atnaujinti formos duomenis
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Leisti tik skaičius ir ne daugiau kaip vieną tašką ar kablelį
    const sanitizedValue = value.replace(/[^0-9.,]/g, "");
    setFormData({
      ...formData,
      measurements: {
        ...formData.measurements,
        [name]: sanitizedValue,
      },
      unit, // Pridedame pasirinktą matavimo vienetą
    });
  };

  // Dinamiškas paveikslėlio pasirinkimas pagal subpage
  const getImageSrc = () => {
    return currentSubpage === "BODY"
      ? "/images/body-measurements.jpg"
      : "/images/garment-measurements.jpg";
  };

  // Dinamiški matavimo laukai pagal pasirinktą subpage
  const getMeasurementFields = () => {
    if (currentSubpage === "BODY") {
      return [
        "Waist",
        "Buttock circumference",
        "Side length",
        "Inside leg",
        "Front rise",
        "Back rise",
        "Upper thigh",
        "Knee width",
        "Bell bottoms wide",
      ];
    } else {
      return [
        "Waist",
        "Length",
        "Hip",
        "Thigh",
        "Knee",
        "Front Crotch",
        "Back Rise",
        "Bottom",
      ];
    }
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:flex-row">
      {/* Blokas 1: Navigacija */}
      <div className="bg-[#EEEEEE] py-2 -mx-5 lg:w-full lg:mx-w-[192px] lg:text-end lg:bg-transparent lg:pl-0 lg:pr-0 lg:py-0 lg:mx-0">
        <h3 className="text-[24px] font-bold mb-6 hidden lg:block">MEASUREMENTS</h3>
        <ul className="flex flex-row justify-center lg:space-y-4 lg:flex-col lg:p-0 lg:mr-0">
          {["BODY", "GARMET"].map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                currentSubpage === category
                  ? "px-4 py-[10px] text-[14px] bg-[#363636] text-[#FFFFFF] lg:py-[12px] lg:font-bold lg:text-[#363636] lg:text-[16px] lg:border-r-[5px] lg:border-[#363636] lg:bg-transparent "
                  : "px-4 py-[10px] text-[14px] text-regular text-[#363636] lg:py-[12px] lg:text-[#676767] lg:text-[16px]"
              }`}
              onClick={() => setCurrentSubpage(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Blokas 2: Matmenys */}
      <div className="flex flex-col w-full shrink-0 lg:max-w-[250px]">
        {/* Keisti matavimo vienetus */}
        <div className="flex justify-start lg:justify-center mb-6">
          <button
            className={`w-[59px] h-[40px] px-4 py-2 text-[14px] text-center lg:w-[79px] lg:text-[16px] ${
              unit === "Cm" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
            }`}
            onClick={() => {
              setUnit("Cm");
              setFormData({ ...formData, unit: "Cm" });
            }}
          >
            Cm
          </button>
          <button
            className={`w-[59px] h-[40px] px-4 py-2 text-[14px] text-center lg:w-[79px] lg:text-[16px] ${
              unit === "Inch" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
            }`}
            onClick={() => {
              setUnit("Inch");
              setFormData({ ...formData, unit: "Inch" });
            }}
          >
            Inch
          </button>
        </div>

        {/* Matmenų įvesties laukai */}
        <div className="flex flex-col space-y-4">
          {getMeasurementFields().map((label) => (
            <div key={label} className="flex items-center justify-between">
              <label htmlFor={label} className="text-[14px] font-semibold lg:w-1/2 lg:text-[16px]">
                {label}
              </label>
              <input
                id={label}
                name={label.toLowerCase().replace(/ /g, "_")}
                value={formData?.measurements?.[label.toLowerCase().replace(/ /g, "_")] || ""}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9.,]/g, ""); // Leisti tik skaičius
                }}
                onChange={handleInputChange}
                className="w-[157px] h-[40px] px-3 py-[5px] border border-[#363636] lg:w-[119px]"
              />
            </div>
          ))}
        </div>

        {/* Papildomi duomenys */}
        <h4 className="text-[18px] font-semibold mt-8 mb-6 lg:text-[20px]">GIVE YOUR</h4>
        <div className="space-y-4">
          {["Height", "Weight"].map((label) => (
            <div key={label} className="flex items-center justify-between">
              <label htmlFor={label} className="text-[16px] font-semibold lg:w-1/2 ">
                {label}
              </label>
              <input
                id={label}
                name={label.toLowerCase()}
                value={formData?.measurements?.[label.toLowerCase()] || ""}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9.,]/g, ""); // Leisti tik skaičius
                }}
                onChange={handleInputChange}
                className="w-[157px] h-[40px] px-3 py-[5px] border border-[#363636] lg:w-[119px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Blokas 3: Paveikslėlis */}
      <div
        className={`flex justify-center shrink-0 lg:flex-col lg:items-center lg:max-w-[395px] ${currentSubpage === "GARMET" ? "justify-center" : ""}`}
      >
        <img
          src={getImageSrc()}
          alt={currentSubpage === "BODY" ? "Body measurements" : "Garment measurements"}
          className={`${currentSubpage === "GARMET" ? "h-auto max-h-full object-contain" : "object-cover h-full"} max-w-[250px] lg:max-w-[395px] `}
        />
      </div>

      {/* Blokas 4: Aprašymas */}
      <div className="relative flex flex-col justify-center max-w-[387px] w-full shrink-0 px-8 py-5 gap-8 bg-[#EEEEEE]">
        <div>
          <h4 className="text-[24px] font-semibold mb-4 lg:text-[20px]">WAIST MEASUREMENT</h4>
          <div className="text-[14px]">
            <p>
              Measure the circumference at the place where you will actually wear your jeans. Your waist measurement will
              be the entire circumference of the area where your jeans will rest. So if you want a low, mid or high waist
              jeans you will measure the low, mid or high waist circumference and not your natural waist.
            </p>
            <br />
            <p>
              While measuring, position the tape very close to the body without tightening. Wear a belt or rope around the
              place where you want your jeans to rest so that it will also help you to measure your length and crotch. You
              can also use a marker to highlight your waist line where you want to rest your jeans.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/placeholder-image.jpg"
            alt="Description"
            className="object-cover border border-gray-300 w-full h-[200px] lg:w-[323px] lg:h-[250px]"
          />
          {!isVideoPlaying && (
            <button
              onClick={toggleVideo}
              className="absolute flex items-center justify-center w-8 h-8 bg-[#363636] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-12 lg:h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-4 h-4 lg:w-6 lg:h-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
          {isVideoPlaying && (
            <iframe
              className="absolute w-full h-full top-0 left-0"
              src="https://www.youtube.com/embed/PKeuSr-mAzM?rel=0&showinfo=0" 
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3;





// import React, { useState, useEffect } from "react";

// const Step3 = ({ formData, setFormData }) => {
//   const [currentSubpage, setCurrentSubpage] = useState("BODY");
//   const [unit, setUnit] = useState("Cm");

//   // Sinchronizuojame pradinius duomenis iš formData
//   useEffect(() => {
//     if (formData.unit) {
//       setUnit(formData.unit); // Nustatome matavimo vienetą iš formData
//     }
//   }, [formData.unit]);

//   // Funkcija atnaujinti formos duomenis
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       measurements: {
//         ...formData.measurements,
//         [name]: value,
//       },
//       unit, // Pridedame pasirinktą matavimo vienetą
//     });
//   };

//   // Dinamiškas paveikslėlio pasirinkimas pagal subpage
//   const getImageSrc = () => {
//     return currentSubpage === "BODY"
//       ? "/images/body-measurements.jpg"
//       : "/images/garment-measurements.jpg";
//   };

//   // Dinamiški matavimo laukai pagal pasirinktą subpage
//   const getMeasurementFields = () => {
//     if (currentSubpage === "BODY") {
//       return [
//         "Waist",
//         "Buttock circumference",
//         "Side length",
//         "Inside leg",
//         "Front rise",
//         "Back rise",
//         "Upper thigh",
//         "Knee width",
//         "Bell bottoms wide",
//       ];
//     } else {
//       return [
//         "Waist",
//         "Length",
//         "Hip",
//         "Thigh",
//         "Knee",
//         "Front Crotch",
//         "Back Rise",
//         "Bottom",
//       ];
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:flex-row">
//       {/* Blokas 1: Navigacija */}
//       <div className="w-full max-w-[192px] text-end">
//         <h3 className="text-[24px] font-bold mb-6 hidden lg:block">MEASUREMENTS</h3>
//         <ul className="space-y-4">
//           {["BODY", "GARMET"].map((category) => (
//             <li
//               key={category}
//               className={`cursor-pointer p-2 ${currentSubpage === category
//                   ? "font-bold text-[16px] border-r-[5px] border-[#363636]"
//                   : "text-[#676767]"
//                 }`}
//               onClick={() => setCurrentSubpage(category)}
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Blokas 2: Matmenys */}
//       <div className="flex flex-col w-full shrink-0 lg:max-w-[250px]">
//         {/* Keisti matavimo vienetus */}
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 ${unit === "Cm" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
//               }`}
//             onClick={() => {
//               setUnit("Cm");
//               setFormData({ ...formData, unit: "Cm" });
//             }}
//           >
//             Cm
//           </button>
//           <button
//             className={`px-4 py-2 ${unit === "Inch" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
//               }`}
//             onClick={() => {
//               setUnit("Inch");
//               setFormData({ ...formData, unit: "Inch" });
//             }}
//           >
//             Inch
//           </button>
//         </div>

//         {/* Matmenų įvesties laukai */}
//         <div className="flex flex-col space-y-4">
//           {getMeasurementFields().map((label) => (
//             <div key={label} className="flex items-center justify-between">
//               <label htmlFor={label} className="text-[14px] font-semibold lg:w-1/2 lg:text-[16px]">
//                 {label}
//               </label>
//               <input
//                 id={label}
//                 name={label.toLowerCase().replace(/ /g, "_")}
//                 value={formData?.measurements?.[label.toLowerCase().replace(/ /g, "_")] || ""}
//                 onChange={handleInputChange}
//                 className="w-[119px] h-[40px] px-3 py-[5px] border border-[#363636]"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Papildomi duomenys */}
//         <h4 className="text-[18px] font-semibold mt-8 mb-6 lg:text-[20px]">GIVE YOUR</h4>
//         <div className="space-y-4">
//           {["Height", "Weight"].map((label) => (
//             <div key={label} className="flex items-center justify-between">
//               <label htmlFor={label} className="text-[16px] font-semibold lg:w-1/2 ">
//                 {label}
//               </label>
//               <input
//                 id={label}
//                 name={label.toLowerCase()}
//                 value={formData?.measurements?.[label.toLowerCase()] || ""}
//                 onChange={handleInputChange}
//                 className="w-[119px] h-[40px] px-3 py-[5px] border border-[#363636]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blokas 3: Paveikslėlis */}
//       <div
//         className={`flex flex-col items-center max-w-[250px] w-full shrink-0 lg:max-w-[395px] ${currentSubpage === "GARMET" ? "justify-center" : ""
//           }`}
//       >
//         <img
//           src={getImageSrc()}
//           alt={currentSubpage === "BODY" ? "Body measurements" : "Garment measurements"}
//           className={`${currentSubpage === "GARMET" ? "h-auto max-h-full object-contain" : "object-cover h-full"
//             } w-full `}
//         />
//       </div>

//       {/* Blokas 4: Aprašymas */}
//       <div className="flex flex-col justify-center max-w-[387px] w-full shrink-0 px-8 py-5 gap-8 bg-[#EEEEEE]">
//         <div>
//           <h4 className="text-[20px] font-semibold mb-4">WAIST MEASUREMENT</h4>
//           <div className="text-[14px]">
//             <p>
//               Measure the circumference at the place where you will actually wear your jeans. Your waist measurement will
//               be the entire circumference of the area where your jeans will rest. So if you want a low, mid or high waist
//               jeans you will measure the low, mid or high waist circumference and not your natural waist.
//             </p>
//             <br />
//             <p>
//               While measuring, position the tape very close to the body without tightening. Wear a belt or rope around the
//               place where you want your jeans to rest so that it will also help you to measure your length and crotch. You
//               can also use a marker to highlight your waist line where you want to rest your jeans.
//             </p>
//           </div>
//         </div>
//         <img
//           src="/images/placeholder-image.jpg"
//           alt="Description"
//           className="object-cover border border-gray-300 w-[323px] h-[250px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default Step3;



// import React, { useState } from "react";

// const Step3 = ({ formData, setFormData }) => {
//   const [currentSubpage, setCurrentSubpage] = useState("BODY");
//   const [unit, setUnit] = useState("Cm");

//   // Funkcija atnaujinti formos duomenis
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       measurements: {
//         ...formData.measurements,
//         [name]: value,
//       },
//       unit, // Pridedam pasirinkto matavimo vieneto išsaugojimą
//     });
//   };

//   // Dinamiškas paveikslėlio pasirinkimas pagal subpage
//   const getImageSrc = () => {
//     return currentSubpage === "BODY"
//       ? "/images/body-measurements.jpg"
//       : "/images/garment-measurements.jpg";
//   };

//   // Dinamiški matavimo laukai pagal pasirinktą subpage
//   const getMeasurementFields = () => {
//     if (currentSubpage === "BODY") {
//       return [
//         "Waist",
//         "Buttock circumference",
//         "Side length",
//         "Inside leg",
//         "Front rise",
//         "Back rise",
//         "Upper thigh",
//         "Knee width",
//         "Bell bottoms wide",
//       ];
//     } else {
//       return [
//         "Waist",
//         "Length",
//         "Hip",
//         "Thigh",
//         "Knee",
//         "Front Crotch",
//         "Back Rise",
//         "Bottom",
//       ];
//     }
//   };

//   return (
//     <div className="flex flex-row justify-center gap-8">
//       {/* Blokas 1: Navigacija */}
//       <div className="w-full max-w-[192px] text-end">
//         <h3 className="text-[24px] font-bold mb-6">MEASUREMENTS</h3>
//         <ul className="space-y-4">
//           {["BODY", "GARMET"].map((category) => (
//             <li
//               key={category}
//               className={`cursor-pointer p-2 ${
//                 currentSubpage === category
//                   ? "font-bold text-[16px] border-r-[5px] border-[#363636]"
//                   : "text-[#676767]"
//               }`}
//               onClick={() => setCurrentSubpage(category)}
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Blokas 2: Matmenys */}
//       <div className="flex flex-col max-w-[250px] w-full shrink-0">
//         {/* Keisti matavimo vienetus */}
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 ${
//               unit === "Cm" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
//             }`}
//             onClick={() => setUnit("Cm")}
//           >
//             Cm
//           </button>
//           <button
//             className={`px-4 py-2 ${
//               unit === "Inch" ? "bg-[#363636] text-[#FFFFFF]" : "bg-[#EEEEEE] text-[#363636]"
//             }`}
//             onClick={() => setUnit("Inch")}
//           >
//             Inch
//           </button>
//         </div>

//         {/* Matmenų įvesties laukai */}
//         <div className="space-y-4">
//           {getMeasurementFields().map((label) => (
//             <div key={label} className="flex items-center">
//               <label htmlFor={label} className="w-1/2 text-[16px] font-semibold">
//                 {label}
//               </label>
//               <input
//                 id={label}
//                 name={label.toLowerCase().replace(/ /g, "_")}
//                 value={formData?.measurements?.[label.toLowerCase().replace(/ /g, "_")] || ""}
//                 onChange={handleInputChange}
//                 className="w-[119px] h-[40px] px-3 py-[5px] border border-[#363636]"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Papildomi duomenys */}
//         <h4 className="text-[20px] font-semibold mt-8 mb-6">GIVE YOUR</h4>
//         <div className="space-y-4">
//           {["Height", "Weight"].map((label) => (
//             <div key={label} className="flex items-center">
//               <label htmlFor={label} className="w-1/2 text-[16px] font-semibold">
//                 {label}
//               </label>
//               <input
//                 id={label}
//                 name={label.toLowerCase()}
//                 value={formData?.measurements?.[label.toLowerCase()] || ""}
//                 onChange={handleInputChange}
//                 className="w-[119px] h-[40px] px-3 py-[5px] border border-[#363636]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blokas 3: Paveikslėlis */}
//       <div
//         className={`flex flex-col items-center max-w-[395px] w-full shrink-0 ${
//           currentSubpage === "GARMET" ? "justify-center" : ""
//         }`}
//       >
//         <img
//           src={getImageSrc()}
//           alt={currentSubpage === "BODY" ? "Body measurements" : "Garment measurements"}
//           className={`${
//             currentSubpage === "GARMET" ? "h-auto max-h-full object-contain" : "object-cover h-full"
//           } w-full `}
//         />
//       </div>

//       {/* Blokas 4: Aprašymas */}
//       <div className="flex flex-col justify-center max-w-[387px] w-full shrink-0 px-8 py-5 gap-8 bg-[#EEEEEE]">
//         <div>
//             <h4 className="text-[20px] font-semibold mb-4">WAIST MEASUREMENT</h4>
//             <div className="text-[14px]">
//                 <p className="">
//                 Measure the circumference at the place where you will actually wear your jeans. Your waist measurement will
//                 be the entire circumference of the area where your jeans will rest. So if you want a low, mid or high waist
//                 jeans you will measure the low, mid or high waist circumference and not your natural waist.
//                 </p>
//                 <br />
//                 <p className="">
//                 While measuring, position the tape very close to the body without tightening. Wear a belt or rope around the
//                 place where you want your jeans to rest so that it will also help you to measure your length and crotch. You
//                 can also use a marker to highlight your waist line where you want to rest your jeans.
//                 </p>
//             </div>
//         </div>
//         <img
//           src="/images/placeholder-image.jpg"
//           alt="Description"
//           className="object-cover border border-gray-300 w-[323px] h-[250px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default Step3;