import { useState } from "react";
import Logo from "../assets/logo.png"
import ConfirmPhone from "../components/ConfirmPhone";
import CompleteRegistration from "../components/CompleteRegistration";
import EnterPhone from "../components/EnterPhone";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const [phone, setPhone] = useState("");

  const [phoneCode, setPhoneCode] = useState("+93")

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-xs mx-auto">
      <img src={Logo} alt="Logo" className="max-w-[200px]" />

      {step === 1 ? (
        <EnterPhone
          setStep={setStep}
          setPhone={setPhone}
          setPhoneCode={setPhoneCode}
          phone={phone}
        />
      ) : step === 2 ? (
        <ConfirmPhone phone={phone} phoneCode={phoneCode} setStep={setStep} />
      ) : step === 3 ? (
        <CompleteRegistration />
      ) : null}
    </div>
  );
};

export default SignUp;
