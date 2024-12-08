import React, { useState, useEffect, useMemo } from "react";

const Step1 = ({ formData, setFormData }) => {
    const [selectedFabric, setSelectedFabric] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("standard");

    const fabrics = useMemo(() => ({
        standard: [
            {
                groupName: "Three-wire corduroy",
                description: "600g/qm (wide ribs)",
                fabrics: [
                    { id: 1, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 2, name: "Olive/brown", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Trenker corduroy",
                description: "535g/qm (wide ribs)",
                fabrics: [
                    { id: 3, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 4, name: "Olive/brown", image: "/images/placeholder-image.jpg" },
                    { id: 5, name: "Beige", image: "/images/placeholder-image.jpg" },
                    { id: 6, name: "Dark grey", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Genoa corduroy",
                description: "440g/qm (small ribs)",
                fabrics: [
                    { id: 7, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 8, name: "Olive", image: "/images/placeholder-image.jpg" },
                    { id: 9, name: "Grey", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Stretch Corduroy",
                description: "320g/qm (small ribs)",
                fabrics: [
                    { id: 10, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 11, name: "Olive", image: "/images/placeholder-image.jpg" },
                    { id: 12, name: "Wine-red", image: "/images/placeholder-image.jpg" },
                    { id: 13, name: "Gold-colored", image: "/images/placeholder-image.jpg" },
                    { id: 14, name: "Chocolate-brown", image: "/images/placeholder-image.jpg" },
                    { id: 15, name: "Purple", image: "/images/placeholder-image.jpg" },
                    { id: 16, name: "Pink", image: "/images/placeholder-image.jpg" },
                    { id: 17, name: "Ink-blue", image: "/images/placeholder-image.jpg" },
                    { id: 18, name: "Grass-green", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Twisting double pilot",
                description: "German leather 600 g/qm",
                fabrics: [
                    { id: 19, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 20, name: "Grey", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Twisting double pilot (extended)",
                description: "English leather 520 g/qm",
                fabrics: [
                    { id: 21, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 22, name: "White", image: "/images/placeholder-image.jpg" },
                    { id: 23, name: "Grey", image: "/images/placeholder-image.jpg" },
                    { id: 24, name: "Brown", image: "/images/placeholder-image.jpg" },
                    { id: 25, name: "Dark brown", image: "/images/placeholder-image.jpg" },
                    { id: 26, name: "Green", image: "/images/placeholder-image.jpg" },
                    { id: 27, name: "Steel Blue", image: "/images/placeholder-image.jpg" },
                    { id: 28, name: "Maikaro", image: "/images/placeholder-image.jpg" },
                    { id: 29, name: "Hamburg stripes", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Stretch pilot",
                description: "410g/qm",
                fabrics: [
                    { id: 30, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 31, name: "Navy", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "CORDURA®",
                description: "cotton 260g/qm",
                fabrics: [
                    { id: 32, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 33, name: "Dark Gray", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "CANVAS PES",
                description: "cotton 310g/qm",
                fabrics: [
                    { id: 34, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 35, name: "Brown", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Ribbed moleskin",
                description: "320 g/qm",
                fabrics: [
                    { id: 36, name: "Black", image: "/images/placeholder-image.jpg" },
                    { id: 37, name: "Grey", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Twill",
                description: "100% cotton 375g/qm",
                fabrics: [
                    { id: 38, name: "Black", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Jeans Stretch",
                description: "12,25oz/385g/qm",
                fabrics: [
                    { id: 39, name: "Indigo blue", image: "/images/placeholder-image.jpg" },
                ],
            },
            {
                groupName: "Denim Jeans",
                description: "100% cotton 14,5oz/475g/qm",
                fabrics: [
                    { id: 40, name: "Indigo blue", image: "/images/placeholder-image.jpg" },
                    { id: 41, name: "Black", image: "/images/placeholder-image.jpg" },
                ],
            },
        ],
        organic: [
            {
                groupName: "ORGANIC FABRICS",
                description: "from contolled biological cultivation",
                fabrics: [
                    { id: 42, name: "Black", name_desc: "Three-wire corduroy", fabric_desc: "600g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
                    { id: 43, name: "Olive", name_desc: "Three-wire corduroy", fabric_desc: "600g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
                    { id: 44, name: "Black", name_desc: "Twisting pilot", fabric_desc: "English leather 520g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
                    { id: 45, name: "Indigo blue", name_desc: "Jeans", fabric_desc: "100% organic cotton, 13oz/440g/qm", image: "/images/placeholder-image.jpg" },
                    { id: 46, name: "Indigo blue", name_desc: "Jeans Stretch", fabric_desc: "11,5oz/390g/qm (99% organic cotton 1% elastane)", image: "/images/placeholder-image.jpg" },
                    { id: 47, name: "Beige", name_desc: "Genoa corduroy", fabric_desc: "500g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
                    { id: 48, name: "Black", name_desc: "Genoa corduroy", fabric_desc: "500g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
                    { id: 49, name: "Black", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
                    { id: 50, name: "Sweet cherry red", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
                    { id: 51, name: "Garnet red", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
                    { id: 52, name: "Middle grey", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
                    { id: 53, name: "Coffee brown", name_desc: "Fine Stretch", fabric_desc: "340g/qm (98% organic corduroy 2% elastane)", image: "/images/placeholder-image.jpg" },
                    { id: 54, name: "Middle brown", name_desc: "Fine Stretch", fabric_desc: "340g/qm (98% organic corduroy 2% elastane)", image: "/images/placeholder-image.jpg" },
                ],
            },
        ],
    }), []);

    useEffect(() => {
        if (formData.fabric && !selectedFabric) {
            const [category, groupName, fabricName] = parseFabricData(formData.fabric);
            setSelectedCategory(category);
            const fabricGroup = fabrics[category]?.find(group => group.groupName === groupName);
            const selectedFabric = fabricGroup?.fabrics.find(fabric => fabric.name === fabricName);
            if (selectedFabric) {
                setSelectedFabric({ ...selectedFabric, groupName });
            }
        }
    }, [formData.fabric, fabrics, selectedFabric]);

    const parseFabricData = (fabric) => {
        const isOrganic = fabric.startsWith("ORGANIC ");
        const cleanedFabric = fabric.replace("ORGANIC ", "");
        const [groupName, fabricName] = cleanedFabric.split(": ").map(s => s.trim());
        return [isOrganic ? "organic" : "standard", groupName, fabricName];
    };

    const handleFabricSelect = (fabric, groupName) => {
        const newSelectedFabric = { ...fabric, groupName };
        setSelectedFabric(newSelectedFabric);

        const fabricLabel =
            selectedCategory === "organic"
                ? `ORGANIC ${groupName}: ${fabric.name}`
                : `${groupName}: ${fabric.name}`;
        setFormData((prevFormData) => ({ ...prevFormData, fabric: fabricLabel }));
    };

    return (
        <div className="text-left">
            {/* Kategorijų pasirinkimo mygtukai */}
            <div className="flex justify-center mb-6 text-[14px]">
                <button
                    className={`px-4 py-2 ${selectedCategory === "standard" ? "bg-[#363636] text-white" : "bg-gray-200"}`}
                    onClick={() => setSelectedCategory("standard")}
                >
                    STANDARD FABRICS
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === "organic" ? "bg-[#363636] text-white" : "bg-gray-200"}`}
                    onClick={() => setSelectedCategory("organic")}
                >
                    ORGANIC FABRICS
                </button>
            </div>

            {/* Audinių grupių atvaizdavimas */}
            <div>
                {fabrics[selectedCategory].map((group) => (
                    <div key={group.groupName} className="mb-8">
                        <h3 className="text-center text-[24px] font-bold mb-1">{group.groupName}</h3>
                        <p className="text-center text-[18px] mb-10">{group.description}</p>
                        <div className="flex flex-wrap px-[11px] gap-[32px] justify-start">
                            {group.fabrics.map((fabric) => (
                                <div
                                    key={fabric.id}
                                    className={`relative w-[250px] ${selectedFabric?.id === fabric.id ? "border-[#BF000D]" : "border-gray-300"}`}
                                    onClick={() => handleFabricSelect(fabric, group.groupName)}
                                >
                                    <img
                                        src={fabric.image}
                                        alt={fabric.name}
                                        className="cursor-pointer w-auto h-[250px] object-cover"
                                    />
                                    {selectedFabric?.id === fabric.id && (
                                        <img
                                            src="/svg/check_circle.svg"
                                            alt="Selected"
                                            className="absolute top-[20px] right-[20px] w-[34px] h-[34px]"
                                        />
                                    )}
                                    <div className="text-start mt-4">
                                        {selectedCategory === "organic" ? (
                                            <>
                                                <div className="flex flex-col justify-start h-[69px]">
                                                    <p className="text-[18px] h-[27px] font-semibold">{fabric.name_desc}</p>
                                                    <p className="text-[14px] h-[21px] font-regular">{fabric.fabric_desc}</p>
                                                </div>
                                                <p className="text-[20px] font-semibold mt-2">{fabric.name}</p>
                                            </>
                                        ) : (
                                            <p className="text-[18px] font-semibold">{fabric.name}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step1;





// import React, { useState } from "react";

// const Step1 = ({ formData, setFormData }) => {
//     const [selectedFabric, setSelectedFabric] = useState(null); // Sekame pasirinkimą
//     // Audinių grupės su paveikslėliais
//     const fabrics = {
//         standard: [
//             {
//                 groupName: "Three-wire corduroy",
//                 description: "600g/qm (wide ribs)",
//                 fabrics: [
//                     { id: 1, name: "Black", image: "/images/placeholder-image.jpg" },
//                     { id: 2, name: "Olive/brown", image: "/images/placeholder-image.jpg" },
//                 ],
//             },
//             {
//                 groupName: "Trenker corduroy",
//                 description: "535g/qm (wide ribs)",
//                 fabrics: [
//                     { id: 3, name: "Black", image: "/images/placeholder-image.jpg" },
//                     { id: 4, name: "Olive/brown", image: "/images/placeholder-image.jpg" },
//                     { id: 5, name: "Beige", image: "/images/placeholder-image.jpg" },
//                     { id: 6, name: "Dark grey", image: "/images/placeholder-image.jpg" },
//                 ],
//             },
//             //   {
//             //     groupName: "Genoa corduroy",
//             //     description: "440g/qm (small ribs)",
//             //     fabrics: [
//             //       { id: 7, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 8, name: "Olive", image: "/images/placeholder-image.jpg" },
//             //       { id: 9, name: "Grey", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Stretch Corduroy",
//             //     description: "320g/qm (small ribs)",
//             //     fabrics: [
//             //       { id: 10, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 11, name: "Olive", image: "/images/placeholder-image.jpg" },
//             //       { id: 12, name: "Wine-red", image: "/images/placeholder-image.jpg" },
//             //       { id: 13, name: "Gold-colored", image: "/images/placeholder-image.jpg" },
//             //       { id: 14, name: "Chocolate-brown", image: "/images/placeholder-image.jpg" },
//             //       { id: 15, name: "Purple", image: "/images/placeholder-image.jpg" },
//             //       { id: 16, name: "Pink", image: "/images/placeholder-image.jpg" },
//             //       { id: 17, name: "Ink-blue", image: "/images/placeholder-image.jpg" },
//             //       { id: 18, name: "Grass-green", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Twisting double pilot",
//             //     description: "German leather 600 g/qm",
//             //     fabrics: [
//             //       { id: 19, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 20, name: "Grey", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Twisting double pilot (extended)",
//             //     description: "English leather 520 g/qm",
//             //     fabrics: [
//             //       { id: 21, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 22, name: "White", image: "/images/placeholder-image.jpg" },
//             //       { id: 23, name: "Grey", image: "/images/placeholder-image.jpg" },
//             //       { id: 24, name: "Brown", image: "/images/placeholder-image.jpg" },
//             //       { id: 25, name: "Dark brown", image: "/images/placeholder-image.jpg" },
//             //       { id: 26, name: "Green", image: "/images/placeholder-image.jpg" },
//             //       { id: 27, name: "Steel Blue", image: "/images/placeholder-image.jpg" },
//             //       { id: 28, name: "Maikaro", image: "/images/placeholder-image.jpg" },
//             //       { id: 29, name: "Hamburg stripes", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Stretch pilot",
//             //     description: "410g/qm",
//             //     fabrics: [
//             //       { id: 30, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 31, name: "Navy", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "CORDURA®",
//             //     description: "cotton 260g/qm",
//             //     fabrics: [
//             //       { id: 32, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 33, name: "Dark Gray", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "CANVAS PES",
//             //     description: "cotton 310g/qm",
//             //     fabrics: [
//             //       { id: 34, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 35, name: "Brown", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Ribbed moleskin",
//             //     description: "320 g/qm",
//             //     fabrics: [
//             //       { id: 36, name: "Black", image: "/images/placeholder-image.jpg" },
//             //       { id: 37, name: "Grey", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Twill",
//             //     description: "100% cotton 375g/qm",
//             //     fabrics: [
//             //       { id: 38, name: "Black", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Jeans Stretch",
//             //     description: "12,25oz/385g/qm",
//             //     fabrics: [
//             //       { id: 39, name: "Indigo blue", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//             //   {
//             //     groupName: "Denim Jeans",
//             //     description: "100% cotton 14,5oz/475g/qm",
//             //     fabrics: [
//             //       { id: 40, name: "Indigo blue", image: "/images/placeholder-image.jpg" },
//             //       { id: 41, name: "Black", image: "/images/placeholder-image.jpg" },
//             //     ],
//             //   },
//         ],
//         organic: [
//             {
//                 groupName: "ORGANIC FABRICS",
//                 description: "from contolled biological cultivation",
//                 fabrics: [
//                     { id: 42, name: "Black", name_desc: "Three-wire corduroy", fabric_desc: "600g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
//                     { id: 43, name: "Olive", name_desc: "Three-wire corduroy", fabric_desc: "600g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
//                     { id: 44, name: "Black", name_desc: "Twisting pilot", fabric_desc: "English leather 520g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
//                     { id: 45, name: "Indigo blue", name_desc: "Jeans", fabric_desc: "100% organic cotton, 13oz/440g/qm", image: "/images/placeholder-image.jpg" },
//                     { id: 46, name: "Indigo blue", name_desc: "Jeans Stretch", fabric_desc: "11,5oz/390g/qm (99% organic cotton 1% elastane)", image: "/images/placeholder-image.jpg" },
//                     { id: 47, name: "Beige", name_desc: "Genoa corduroy", fabric_desc: "500g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
//                     { id: 48, name: "Black", name_desc: "Genoa corduroy", fabric_desc: "500g/qm (100% organic cotton)", image: "/images/placeholder-image.jpg" },
//                     { id: 49, name: "Black", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
//                     { id: 50, name: "Sweet cherry red", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
//                     { id: 51, name: "Garnet red", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
//                     { id: 52, name: "Middle grey", name_desc: "Fine Corduroy", fabric_desc: "187g/qm (100% organic corduroy)", image: "/images/placeholder-image.jpg" },
//                     { id: 53, name: "Coffee brown", name_desc: "Fine Stretch", fabric_desc: "340g/qm (98% organic corduroy 2% elastane)", image: "/images/placeholder-image.jpg" },
//                     { id: 54, name: "Middle brown", name_desc: "Fine Stretch", fabric_desc: "340g/qm (98% organic corduroy 2% elastane)", image: "/images/placeholder-image.jpg" },
//                 ],
//             },
//         ],
//     };

//     const [selectedCategory, setSelectedCategory] = useState("standard");

//     const handleFabricSelect = (fabric, groupName) => {
//         setSelectedFabric({ ...fabric, groupName }); // Išsaugome audinio ir grupės informaciją
//         const fabricLabel =
//             selectedCategory === "organic"
//                 ? `ORGANIC ${groupName}: ${fabric.name}`
//                 : `${groupName}: ${fabric.name}`;
//         setFormData({ ...formData, fabric: fabricLabel }); // Išsaugome pasirinkimą formoje
//     };

//     return (
//         <div className="text-left">
//             {/* Mygtukai kategorijų pasirinkimui */}
//             <div className="flex justify-center mb-6 text-[14px]">
//                 <button
//                     className={`px-4 py-2 ${selectedCategory === "standard"
//                         ? "bg-[#363636] text-white"
//                         : "bg-gray-200"
//                         }`}
//                     onClick={() => setSelectedCategory("standard")}
//                 >
//                     STANDARD FABRICS
//                 </button>
//                 <button
//                     className={`px-4 py-2 ${selectedCategory === "organic"
//                         ? "bg-[#363636] text-white"
//                         : "bg-gray-200"
//                         }`}
//                     onClick={() => setSelectedCategory("organic")}
//                 >
//                     ORGANIC FABRICS
//                 </button>
//             </div>

//             {/* Audinių grupių atvaizdavimas */}
//             <div>
//                 {fabrics[selectedCategory].map((group) => (
//                     <div key={group.groupName} className="mb-8">
//                         <h3 className="text-center text-[24px] font-bold mb-1">
//                             {group.groupName}
//                         </h3>
//                         <p className="text-center text-[18px] mb-10">
//                             {group.description}
//                         </p>
//                         <div className="flex flex-wrap px-[11px] gap-[32px] justify-start">
//                             {group.fabrics.map((fabric) => (
//                                 <div
//                                     key={fabric.id}
//                                     className={`relative w-[250px] ${selectedFabric?.id === fabric.id
//                                         ? "border-[#BF000D]"
//                                         : "border-gray-300"
//                                         }`}
//                                     onClick={() => handleFabricSelect(fabric, group.groupName)}
//                                 >
//                                     {/* Paveiksliukas */}
//                                     <img
//                                         src={fabric.image}
//                                         alt={fabric.name}
//                                         className="cursor-pointer w-auto h-[250px] object-cover"
//                                     />
//                                     {selectedFabric?.id === fabric.id && (
//                                         <img
//                                             src="/svg/check_circle.svg"
//                                             alt="Selected"
//                                             className="absolute top-[20px] right-[20px] w-[34px] h-[34px]"
//                                         />
//                                     )}
//                                     {/* Informacija */}
//                                     <div className="text-start mt-4">
//                                         {selectedCategory === "organic" ? (
//                                             <>
//                                                 <div className="flex flex-col justify-start h-[69px]">
//                                                     <p className="text-[18px] h-[27px] font-semibold">{fabric.name_desc}</p>
//                                                     <p className="text-[14px] h-[21px] font-regular">{fabric.fabric_desc}</p>
//                                                 </div>
//                                                 <p className="text-[20px] font-semibold mt-2">{fabric.name}</p>
//                                             </>
//                                         ) : (
//                                             <p className="text-[18px] font-semibold">{fabric.name}</p>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Step1;