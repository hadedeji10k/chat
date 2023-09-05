interface IProps {
  phone: string;
  setStep: any;
}

const ConfirmPhone = ({ phone, setStep }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{phone}</h3>
      <p className="mb-3 font-medium text-gray-500">We have sent you an SMS with the code</p>

      <div className="w-full border-gray-400 border-2 mb-5 rounded-md">
        <input
          type="tel"
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Code"
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
