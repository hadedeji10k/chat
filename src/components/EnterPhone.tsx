import { COUNTRIES_CODE } from "../utils/helper";

const EnterPhone = ({
  phone,
  setStep,
  setPhone,
  setPhoneCode,
}: {
  phone: string;
  setStep: any;
  setPhone: any;
  setPhoneCode: any;
}) => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "Return") {
      setStep(2);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">What's your phone number?</h3>

      <div className="w-full border-gray-400 border-2 mb-5 rounded-md flex flex-row p-2 gap-x-2">
        <div>
          <select
            className="min-w-[70px] bg-transparent outline-none focus:outline-none px-2 py-2 bg-gray-100 rounded-lg"
            name=""
            id=""
            onChange={(e) => setPhoneCode(e.target.value)}
          >
            {COUNTRIES_CODE.map((code) => (
              <option value={code}>{code}</option>
            ))}
          </select>
        </div>
        <input
          type="tel"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-transparent outline-none focus:outline-none px-2 py-2"
          placeholder="Phone Number"
          onKeyDown={handleKeyDown}
          autoFocus
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

export default EnterPhone;
