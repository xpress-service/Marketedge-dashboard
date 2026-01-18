import React, { useState } from 'react';

const Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    console.log('OTP:', code);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-16 py-4 bg-slate-100 w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <p className="m-0 text-black font-bold text-xl">
          Verify your Email
        </p>
        <p className="m-0 text-black font-normal text-center">
          Please input the 4 digits code that has <br />
          been sent to your email
        </p>
        <div className="flex gap-3">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg bg-[#E6E6E6] text-black outline-none rounded"
            />
          ))}
        </div>
        <p className="text-[#2D17FC] text-sm font-normal cursor-pointer">
          Resend
        </p>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="md:w-[250px] w-full bg-[#2D17FC] text-white py-3 rounded font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
