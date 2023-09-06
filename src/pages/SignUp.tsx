import { useState } from "react";
import ConfirmPhone from "../components/ConfirmPhone";
import CompleteRegistration from "../components/CompleteRegistration";
import EnterPhone from "../components/EnterPhone";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const [phone, setPhone] = useState("");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-xs mx-auto">
      <h2 className="text-3xl font-bold mb-10">Sign Up</h2>

      {step === 1 ? (
        <EnterPhone setStep={setStep} setPhone={setPhone} phone={phone} />
      ) : step === 2 ? (
        <ConfirmPhone phone={phone} setStep={setStep} />
      ) : step === 3 ? (
        <CompleteRegistration />
      ) : null}
    </div>
  );
};

export default SignUp;
