import React, { useState, useEffect } from "react";

const Step2 = ({ formData, setFormData, category }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("POCKETS"); // Pradinė kategorija

    // Testiniai duomenys su atsitiktine kaina
    const generateTestData = (items) =>
        items.map((item) => ({
            name: item,
            //price: (Math.random() * (50 - 5) + 5).toFixed(2), // Kaina nuo 5 iki 50
            price: 10,
        }));

    const categories = {
        POCKETS: {
            Trousers: generateTestData([
                "Real leather front pocket bags",
                "Wash leather front pocket bags",
                "Real leather ruler pocket",
                "Wash leather ruler pocket",
                "Additional ruler pocket",
                "Additional back pocket",
                "Zipper on the back pocket (left/right)",
                "Flap pocket at the side (left/right)",
                "Inside pocket on the flap",
                "Watch pocket",
                "1 credit card/coin pocket behind the flap",
            ]),
            Waistcoats: generateTestData([
                "Additional inside pocket",
                "Inside pocket with 16 cm zipper",
                "Real leather pocket bags",
                "1 credit card/coin pocket in Revers",
            ]),
            Jackets: generateTestData([
                "Additional chest pocket",
                "Inside pocket with 16 cm zipper",
                "Pocket in back part with 18 cm zipper",
                "Card pocket in front part with 18 cm zipper",
                "Additional card pocket in back part with 18 cm zipper",
            ]),
        },
        DURABILITY: {
            Trousers: generateTestData([
                "CORDURA® edging tape (behind/around)",
                "Real leather edging tape (behind/around)",
                "Real leather gusset",
                "Wash leather gusset",
                "CORDURA® reinforcement (outer)",
                "Outer fabric reinforcement (inside/outside)",
                "Outer fabric knee pads",
                "Seat/back reinforcement (double back)",
            ]),
            Jackets: generateTestData(["Real leather ring in black", "Ripped moleskin lining"]),
        },
        "EDGING AND PIPING": {
            Trousers: generateTestData([
                "Real leather edging tape (behind/around)",
                "CORDURA® edging tape (behind/around)",
                "Velvet piping in black",
                "Woven piping in black",
            ]),
            Waistcoats: generateTestData([
                "Real leather edging (around)",
                "Real leather pocket piping",
                "Velvet piping in black",
                "Woven piping in black",
            ]),
            Jackets: generateTestData([
                "Real leather edging (around)",
                "Woven piping ring in black",
                "Velvet piping in black",
                "Real leather pocket piping",
            ]),
        },
        "WAIST AND CLOSURE": {
            Trousers: generateTestData([
                "Waistband extension",
                "Additional adjustable waist",
                "V-buttons (6 real pearl buttons)",
            ]),
            Waistcoats: generateTestData(["Shoulder padding with wash leather (left/right)"]),
            Jackets: generateTestData(["V-buttons (2 real pearl buttons)"]),
        },
    };

    // Pasirinkimų atstatymas iš formData
    useEffect(() => {
        if (formData.selectedFeatures) {
            setSelectedItems(formData.selectedFeatures);
        }
    }, [formData.selectedFeatures]);

    // Pasirinkimo logika
    const handleItemSelect = (item) => {
        const alreadySelected = selectedItems.find((selected) => selected.name === item.name);

        let updatedSelections;
        let updatedPrice = formData.additionalPrice;

        if (alreadySelected) {
            // Jei elementas jau pasirinktas, pašaliname jį ir atimame jo kainą
            updatedSelections = selectedItems.filter((selected) => selected.name !== item.name);
            updatedPrice -= parseFloat(item.price);
        } else {
            // Jei elementas dar nepasirinktas, pridedame jį ir pridedame jo kainą
            updatedSelections = [...selectedItems, item];
            updatedPrice += parseFloat(item.price);
        }

        setSelectedItems(updatedSelections);
        setFormData({ ...formData, selectedFeatures: updatedSelections, additionalPrice: updatedPrice });
    };

    // Pasirinkti teisingus duomenis pagal aktyvią kategoriją ir subkategoriją
    const categoryData = categories[activeCategory]?.[category] || [];

    return (
        <div className="flex flex-col gap-8 sm:flex-row sm:p-4">
            {/* Šoninė navigacija */}
            <div className="sm:sticky sm:top-0 sm:self-start sm:h-screen bg-[#EEEEEE] pl-0 pr-5 py-2 -mx-5 sm:min-w-[188px] sm:text-end sm:bg-transparent sm:pl-0 sm:pr-0 sm:py-0 sm:mx-0">
                <h3 className="text-[24px] font-bold mb-4 hidden sm:block">FEATURES</h3>
                <ul className="flex flex-row pl-5 pr-5 -mr-5 overflow-x-auto text-nowrap sm:space-y-4 sm:flex-col sm:p-0 sm:mr-0">
                    {Object.keys(categories).map((category) => (
                        <li
                            key={category}
                            className={`cursor-pointer p-2 ${activeCategory === category
                                ? "text-[14px] px-4 py-2 bg-[#363636] text-[#FFFFFF] sm:text-[16px] sm:font-bold sm:border-r-[5px] sm:border-[#363636] sm:bg-transparent sm:text-[#363636] sm:p-2"
                                : "text-regular text-[14px] text:[#363636] sm:text-[16px] sm:text-[#676767]"
                                }`}
                            onClick={() => setActiveCategory(category)} // Pasirenkame kategoriją
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Elementų sąrašas */}
            <div className="sm:w-full ">
                {/* Elementų sąrašas */}
                <div className="flex flex-wrap gap-5 sm:gap-8 sm:justify-center">
                    {categoryData.length === 0 ? (
                        <div>No features available for this category.</div>
                    ) : (
                        categoryData.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-[157px] sm:w-[250px]"
                                onClick={() => handleItemSelect(item)}
                            >
                                <img
                                    src="/images/placeholder-image.jpg"
                                    alt={item.name}
                                    className="cursor-pointer w-[157px] h-[157px] object-cover sm:w-[250px] sm:h-[250px]"
                                />
                                {selectedItems.find((selected) => selected.name === item.name) && (
                                    <img
                                        src="/svg/check_circle.svg"
                                        alt="Selected"
                                        className="absolute top-[10px] right-[10px] w-[20px] h-[20px] sm:top-[20px] sm:right-[20px] sm:w-[34px] sm:h-[34px]"
                                    />
                                )}
                                <p className="min-h-[36px] mt-2 text-start font-semibold text-[14px] text-wrap sm:min-h-[54px] sm:text-[18px] sm:mt-4">{item.name}</p>
                                <p className="mt-2 text-start text-[16px] font-semibold sm:text-[20px]">€{item.price}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step2;



// import React, { useState, useEffect } from "react";

// const Step2 = ({ formData, setFormData, category }) => {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [activeCategory, setActiveCategory] = useState("POCKETS"); // Pradinė kategorija

//     // Testiniai duomenys su atsitiktine kaina
//     const generateTestData = (items) =>
//         items.map((item) => ({
//             name: item,
//             price: (Math.random() * (50 - 5) + 5).toFixed(2), // Kaina nuo 5 iki 50
//         }));

//     const categories = {
//         POCKETS: {
//             Trousers: generateTestData([
//                 "Real leather front pocket bags",
//                 "Wash leather front pocket bags",
//                 "Real leather ruler pocket",
//                 "Wash leather ruler pocket",
//                 "Additional ruler pocket",
//                 "Additional back pocket",
//                 "Zipper on the back pocket (left/right)",
//                 "Flap pocket at the side (left/right)",
//                 "Inside pocket on the flap",
//                 "Watch pocket",
//                 "1 credit card/coin pocket behind the flap",
//             ]),
//             Waistcoats: generateTestData([
//                 "Additional inside pocket",
//                 "Inside pocket with 16 cm zipper",
//                 "Real leather pocket bags",
//                 "1 credit card/coin pocket in Revers",
//             ]),
//             Jackets: generateTestData([
//                 "Additional chest pocket",
//                 "Inside pocket with 16 cm zipper",
//                 "Pocket in back part with 18 cm zipper",
//                 "Card pocket in front part with 18 cm zipper",
//                 "Additional card pocket in back part with 18 cm zipper",
//             ]),
//         },
//         DURABILITY: {
//             Trousers: generateTestData([
//                 "CORDURA® edging tape (behind/around)",
//                 "Real leather edging tape (behind/around)",
//                 "Real leather gusset",
//                 "Wash leather gusset",
//                 "CORDURA® reinforcement (outer)",
//                 "Outer fabric reinforcement (inside/outside)",
//                 "Outer fabric knee pads",
//                 "Seat/back reinforcement (double back)",
//             ]),
//             Jackets: generateTestData(["Real leather ring in black", "Ripped moleskin lining"]),
//         },
//         "EDGING AND PIPING": {
//             Trousers: generateTestData([
//                 "Real leather edging tape (behind/around)",
//                 "CORDURA® edging tape (behind/around)",
//                 "Velvet piping in black",
//                 "Woven piping in black",
//             ]),
//             Waistcoats: generateTestData([
//                 "Real leather edging (around)",
//                 "Real leather pocket piping",
//                 "Velvet piping in black",
//                 "Woven piping in black",
//             ]),
//             Jackets: generateTestData([
//                 "Real leather edging (around)",
//                 "Woven piping ring in black",
//                 "Velvet piping in black",
//                 "Real leather pocket piping",
//             ]),
//         },
//         "WAIST AND CLOSURE": {
//             Trousers: generateTestData([
//                 "Waistband extension",
//                 "Additional adjustable waist",
//                 "V-buttons (6 real pearl buttons)",
//             ]),
//             Waistcoats: generateTestData(["Shoulder padding with wash leather (left/right)"]),
//             Jackets: generateTestData(["V-buttons (2 real pearl buttons)"]),
//         },
//     };

//     // Pasirinkimų atstatymas iš formData
//     useEffect(() => {
//         if (formData.selectedFeatures) {
//             setSelectedItems(formData.selectedFeatures);
//         }
//     }, [formData.selectedFeatures]);

//     // Pasirinkimo logika
//     const handleItemSelect = (item) => {
//         const alreadySelected = selectedItems.find((selected) => selected.name === item.name);

//         if (alreadySelected) {
//             const updatedSelections = selectedItems.filter((selected) => selected.name !== item.name);
//             setSelectedItems(updatedSelections);
//             setFormData({ ...formData, selectedFeatures: updatedSelections });
//         } else {
//             const updatedSelections = [...selectedItems, item];
//             setSelectedItems(updatedSelections);
//             setFormData({ ...formData, selectedFeatures: updatedSelections });
//         }
//     };

//     // Pasirinkti teisingus duomenis pagal aktyvią kategoriją ir subkategoriją
//     const categoryData = categories[activeCategory]?.[category] || [];

//     return (
//         <div className="flex flex-row h-auto gap-8 p-4 justify-center">
//             {/* Šoninė navigacija */}
//             <div className="min-w-[188px] text-end">
//                 <h3 className="text-[24px] font-bold mb-4">FEATURES</h3>
//                 <ul className="space-y-4">
//                     {Object.keys(categories).map((category) => (
//                         <li
//                             key={category}
//                             className={`cursor-pointer p-2 ${activeCategory === category ? "text-[16px] font-bold border-r-[5px] border-[#363636]" : "text-[#676767] text-regular"
//                                 }`}
//                             onClick={() => setActiveCategory(category)} // Pasirenkame kategoriją
//                         >
//                             {category}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Elementų sąrašas */}
//             <div className="">
//                 {/* Elementų sąrašas */}
//                 <div className="flex flex-wrap gap-8">
//                     {categoryData.length === 0 ? (
//                         <div>No features available for this category.</div>
//                     ) : (
//                         categoryData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative w-[250px]"
//                                 onClick={() => handleItemSelect(item)}
//                             >
//                                 <img
//                                     src="/images/placeholder-image.jpg"
//                                     alt={item.name}
//                                     className="cursor-pointer w-[250px] h-[250px] object-cover"
//                                 />
//                                 {selectedItems.find((selected) => selected.name === item.name) && (
//                                     <img
//                                         src="/svg/check_circle.svg"
//                                         alt="Selected"
//                                         className="absolute top-[20px] right-[20px] w-[34px] h-[34px]"
//                                     />
//                                 )}
//                                 <p className="min-h-[54px] mt-4 text-start font-semibold text-[18px] text-wrap">{item.name}</p>
//                                 <p className="mt-2 text-start text-[20px] font-semibold">€{item.price}</p>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Step2;



// import React, { useState } from "react";

// const Step2 = ({ formData, setFormData, category }) => {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [activeCategory, setActiveCategory] = useState("POCKETS"); // Nustatytas pradinė kategorija, pvz., "POCKETS"

//     // Testiniai duomenys su atsitiktine kaina
//     const generateTestData = (items) =>
//         items.map((item) => ({
//             name: item,
//             price: (Math.random() * (50 - 5) + 5).toFixed(2), // Kaina nuo 5 iki 50
//         }));

//     const categories = {
//         POCKETS: {
//             Trousers: generateTestData([
//                 "Real leather front pocket bags",
//                 "Wash leather front pocket bags",
//                 "Real leather ruler pocket",
//                 "Wash leather ruler pocket",
//                 "Additional ruler pocket",
//                 "Additional back pocket",
//                 "Zipper on the back pocket (left/right)",
//                 "Flap pocket at the side (left/right)",
//                 "Inside pocket on the flap",
//                 "Watch pocket",
//                 "1 credit card/coin pocket behind the flap",
//             ]),
//             Waistcoats: generateTestData([
//                 "Additional inside pocket",
//                 "Inside pocket with 16 cm zipper",
//                 "Real leather pocket bags",
//                 "1 credit card/coin pocket in Revers",
//             ]),
//             Jackets: generateTestData([
//                 "Additional chest pocket",
//                 "Inside pocket with 16 cm zipper",
//                 "Pocket in back part with 18 cm zipper",
//                 "Card pocket in front part with 18 cm zipper",
//                 "Additional card pocket in back part with 18 cm zipper",
//             ]),
//         },
//         DURABILITY: {
//             Trousers: generateTestData([
//                 "CORDURA® edging tape (behind/around)",
//                 "Real leather edging tape (behind/around)",
//                 "Real leather gusset",
//                 "Wash leather gusset",
//                 "CORDURA® reinforcement (outer)",
//                 "Outer fabric reinforcement (inside/outside)",
//                 "Outer fabric knee pads",
//                 "Seat/back reinforcement (double back)",
//             ]),
//             Jackets: generateTestData(["Real leather ring in black", "Ripped moleskin lining"]),
//         },
//         "EDGING AND PIPING": {
//             Trousers: generateTestData([
//                 "Real leather edging tape (behind/around)",
//                 "CORDURA® edging tape (behind/around)",
//                 "Velvet piping in black",
//                 "Woven piping in black",
//             ]),
//             Waistcoats: generateTestData([
//                 "Real leather edging (around)",
//                 "Real leather pocket piping",
//                 "Velvet piping in black",
//                 "Woven piping in black",
//             ]),
//             Jackets: generateTestData([
//                 "Real leather edging (around)",
//                 "Woven piping ring in black",
//                 "Velvet piping in black",
//                 "Real leather pocket piping",
//             ]),
//         },
//         "WAIST AND CLOSURE": {
//             Trousers: generateTestData([
//                 "Waistband extension",
//                 "Additional adjustable waist",
//                 "V-buttons (6 real pearl buttons)",
//             ]),
//             Waistcoats: generateTestData(["Shoulder padding with wash leather (left/right)"]),
//             Jackets: generateTestData(["V-buttons (2 real pearl buttons)"]),
//         },
//     };

//     // Pasirinkimo logika
//     const handleItemSelect = (item) => {
//         const alreadySelected = selectedItems.find((selected) => selected.name === item.name);

//         if (alreadySelected) {
//             const updatedSelections = selectedItems.filter((selected) => selected.name !== item.name);
//             setSelectedItems(updatedSelections);
//             setFormData({ ...formData, selectedFeatures: updatedSelections });
//         } else {
//             const updatedSelections = [...selectedItems, item];
//             setSelectedItems(updatedSelections);
//             setFormData({ ...formData, selectedFeatures: updatedSelections });
//         }
//     };

//     // Pasirinkti teisingus duomenis pagal aktyvią kategoriją ir subkategoriją
//     const categoryData = categories[activeCategory]?.[category] || [];

//     return (
//         <div className="flex flex-row h-auto gap-8 p-4 justify-center">
//             {/* Šoninė navigacija */}
//             <div className="min-w-[188px] text-end">
//                 <h3 className="text-[24px] font-bold mb-4">FEATURES</h3>
//                 <ul className="space-y-4">
//                     {Object.keys(categories).map((category) => (
//                         <li
//                             key={category}
//                             className={`cursor-pointer p-2 ${activeCategory === category ? "text-[16px] font-bold border-r-4 border-[#363636]" : "text-[#676767] text-regular"
//                                 }`}
//                             onClick={() => setActiveCategory(category)} // Pasirenkame kategoriją
//                         >
//                             {category}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Elementų sąrašas */}
//             <div className="">
//                 {/* Elementų sąrašas */}
//                 <div className="flex flex-wrap gap-8">
//                     {categoryData.length === 0 ? (
//                         <div>No features available for this category.</div>
//                     ) : (
//                         categoryData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative w-[250px]"
//                                 onClick={() => handleItemSelect(item)}
//                             >
//                                 <img
//                                     src="/images/placeholder-image.jpg"
//                                     alt={item.name}
//                                     className="cursor-pointer w-[250px] h-[250px] object-cover"
//                                 />
//                                 {selectedItems.find((selected) => selected.name === item.name) && (
//                                     <img
//                                         src="/svg/check_circle.svg"
//                                         alt="Selected"
//                                         className="absolute top-[20px] right-[20px] w-[34px] h-[34px]"
//                                     />
//                                 )}
//                                 <p className="min-h-[54px] mt-4 text-start font-semibold text-[18px] text-wrap">{item.name}</p>
//                                 <p className="mt-2 text-start text-[20px] font-semibold">€{item.price}</p>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Step2;