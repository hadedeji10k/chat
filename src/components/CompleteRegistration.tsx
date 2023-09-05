interface IProps {
  setStep: any;
}

const CompleteRegistration = ({ setStep }: IProps) => {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <h3 className="text-lg font-semibold mb-5">What is your full name?</h3>

      <div className="w-full border-gray-400 border-2 mb-5 rounded-md">
        <input
          type="text"
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Name"
        />
      </div>
      <div className="w-full border-gray-400 border-2 mb-5 rounded-md">
        <input
          type="text"
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Last Name"
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

export default CompleteRegistration;
