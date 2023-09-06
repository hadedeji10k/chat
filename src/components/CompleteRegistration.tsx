import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CompleteRegistration = () => {
  const navigate = useNavigate();

  const submit = () => {
    Swal.fire({
      title: "Success!",
      text: "You have successfully signed up",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed || result.isDenied || result.isDismissed) {
        navigate("/chat");
      }
    });
  };

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
        <button onClick={submit} className="w-full bg-gray-800 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default CompleteRegistration;
