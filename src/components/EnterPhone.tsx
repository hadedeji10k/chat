const EnterPhone = ({
  phone,
  setStep,
  setPhone,
}: {
  phone: string;
  setStep: any;
  setPhone: any;
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">What's your phone number?</h3>

      <div className="w-full border-gray-400 border-2 mb-5 rounded-md">
        <input
          type="tel"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Phone Number"
        />
      </div>

      <div className="w-full">
        <button
          onClick={() => setStep(2)}
          className="w-full bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EnterPhone