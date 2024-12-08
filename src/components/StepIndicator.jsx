const StepIndicator = ({ currentStep, setCurrentStep }) => {
  const steps = ["FABRIC", "STYLE", "SIZES", "SUMMARY"];

  return (
    <div className="w-full flex justify-center border-b-[1px] border-[#EEEEEE]">
      <div className="flex justify-between items-center mt-4 min-w-[461px]">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setCurrentStep(index + 1)} // Atidaro pasirinkto žingsnio komponentą
            className={`cursor-pointer text-center min-w-[101px] text-[16px] ${currentStep === index + 1
                ? "border-b-[5px] border-black font-bold"
                : "text-[#676767]"
              }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
