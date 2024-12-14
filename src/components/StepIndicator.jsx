const StepIndicator = ({ currentStep, setCurrentStep }) => {
  const steps = ["FABRIC", "STYLE", "SIZES", "SUMMARY"];

  return (
    <div className="w-full flex justify-center border-b-[1px] border-[#EEEEEE]">
      <div className="flex justify-between mt-4 w-[335px] md:min-w-[461px]"> {/*items-center  */}
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setCurrentStep(index + 1)} // Atidaro pasirinkto žingsnio komponentą
            className={`cursor-pointer text-center min-w-[83px] text-[14px] md:text-[16px] ${currentStep === index + 1
                ? "border-b-[5px] border-[#363636] font-bold"
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
