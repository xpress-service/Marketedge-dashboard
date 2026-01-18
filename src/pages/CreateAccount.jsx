import React from "react";

function CreateAccount() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      <div className="flex w-full max-w-5xl h-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex flex-1 relative">
          <img
            src="./login-man.svg"
            alt="illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs font-light text-slate-500">
              Select the type of seller that best describes your business.
              This will help us tailor your experience.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-6 md:px-12 py-6 justify-center overflow-y-auto scrollbar-hide">
          <div className="flex flex-col items-center mb-6 gap-2">
            <img src="./app-logo.svg" alt="logo" className="w-10 h-10" />
            <h1 className="text-black font-bold text-xl">Register</h1>
            <p className="text-black text-sm">Create your Kaihma account</p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-black text-sm">Number</label>
              <input
                type="number"
                placeholder="Input your number"
                className="border px-3 py-2 text-sm bg-transparent text-black rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black text-sm">OTP</label>
              <input
                type="otp"
                placeholder="123456"
                className="border px-3 py-2 text-sm bg-transparent text-black rounded-none"
              />
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <p className="text-sm text-[#2D17FC] cursor-pointer">
              Resend
            </p>
          </div>
          <button className="w-full bg-[#2D17FC] text-white py-2 text-lg font-medium mt-4 rounded-none">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 border-t border-slate-300"></div>
            <p className="text-xs uppercase text-black">or</p>
            <div className="flex-1 border-t border-slate-300"></div>
          </div>
          <button className="flex items-center justify-center gap-3 border py-2 text-sm text-black mb-3 rounded-none">
            Continue with Google
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-3 border py-2 text-sm text-black mb-4 rounded-none">
            Continue with number
            <img src="/call.svg" alt="Call" className="w-5 h-5" />
          </button>
          <p className="text-center text-xs text-black">
            Don&apos;t have an account?{" "}
            <span className="font-bold text-[#2D17FC] cursor-pointer">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
