interface IProps {
  phone: string;
  phoneCode: string;
  setStep: any;
}

const ConfirmPhone = ({ phone, phoneCode, setStep }: IProps) => {
   const handleKeyDown = (e: any) => {
     if (e.key === "Enter" || e.key === "Return") {
       setStep(3);
     }
   };
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mt-3 mb-2">{`${phoneCode} ${phone}`}</h3>
      <p className="mb-1 font-medium text-gray-500">
        We have sent you an SMS with the code
      </p>
      <small className="font-medium text-gray-500">
        (enter any value for demo purposes)
      </small>

      <div className="w-full border-gray-400 border-2 mb-5 mt-4 rounded-md">
        <input
          type="tel"
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Code"
          autoFocus
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="w-full">
        <button
          onClick={() => setStep(3)}
          className="w-full bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConfirmPhone;
