import React, { useState } from "react";

const TOTAL_STEPS = 3;

const StoreSetup = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFileName(file.name);
  };

  return (
    <div className="min-h-screen bg-slate-100 w-full px-8 py-4 pb-10">
      <div className="flex w-full items-center justify-start">
        <img
          src="./app-logo.svg"
          alt="store setup illustration"
          className="w-10 h-10 object-cover"
        />
      </div>
      {currentStep === 1 && (
        <div className="flex flex-col items-center w-full">
          <div className="max-w-[600px] w-full">
            <h1 className="text-2xl font-bold text-slate-900 mt-6">
              Welcome to Kaihma! Let's set up your store
            </h1>
            <p className="text-xs mt-2">
              Step {currentStep} of {TOTAL_STEPS}: Brand information
            </p>
            <div className="w-full h-2 bg-[#D9D9D9] rounded-md mt-6">
              <div
                className="h-full bg-[#3420ED] rounded-md"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-black">Brand name</label>
                <input
                  type="text"
                  placeholder="Enter your brand name"
                  className="w-full max-w-[400px] py-3 px-3 bg-[#F6F6F6] rounded-xl text-sm outline-none"
                />
              </div>
              <div>
                <label className="font-bold">Brand Logo</label>
                <input
                  type="file"
                  hidden
                  id="brandLogoInput"
                  onChange={handleLogoChange}
                />
                <div
                  onClick={() =>
                    document.getElementById("brandLogoInput").click()
                  }
                  className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3 cursor-pointer text-sm text-gray-500"
                >
                  {selectedFileName || "Upload your brand logo"}
                </div>
              </div>
              <div>
                <label>Business type</label>
                <select className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3 text-sm">
                  <option>Select your business type</option>
                  <option>Brand 1</option>
                  <option>Brand 2</option>
                  <option>Brand 3</option>
                </select>
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter your brand location"
                  className="w-full max-w-[400px] py-3 px-3 bg-[#F6F6F6] rounded-xl text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col items-center w-full">
          <div className="max-w-[600px] w-full space-y-4">
            <h1 className="text-2xl font-bold mt-6">
              Welcome to Kaihma! Let's set up your store
            </h1>
            <p className="text-xs">
              Step {currentStep} of {TOTAL_STEPS}: Store details
            </p>
            <div className="w-full h-2 bg-[#D9D9D9] rounded-md mt-6">
              <div
                className="h-full bg-[#3420ED] rounded-md"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
            <select className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3">
              <option>Business type</option>
              <option>Brand 1</option>
              <option>Brand 2</option>
            </select>
            <div className="flex gap-3 max-w-[400px]">
              <input
                placeholder="Country"
                className="w-full py-3 bg-[#F6F6F6] rounded-xl px-3"
              />
              <input
                placeholder="City"
                className="w-full py-3 bg-[#F6F6F6] rounded-xl px-3"
              />
            </div>
            <input
              placeholder="Business address"
              className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3"
            />
            <input
              type="email"
              placeholder="Contact email"
              className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3"
            />
            <textarea
              placeholder="Describe your shop"
              className="w-full max-w-[400px] py-3 bg-[#F6F6F6] rounded-xl px-3 resize-none"
            />
          </div>
        </div>
      )}
{currentStep === 3 && (
  <div className="flex w-full items-center justify-center px-4 md:px-0">
    <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-center gap-8 md:gap-16">
      <div className="flex flex-col gap-6 w-full items-start justify-center">
        <div className="flex flex-col gap-1 mt-6">
          <h2 className="text-black text-xl font-semibold">
            Subscription
          </h2>
          <p className="text-black text-md font-normal">
            Get more access with our best plan to have a good experience with us
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between gap-4 bg-black px-6 md:px-8 py-4 rounded-lg border">
          <div className="flex flex-col gap-3 text-white md:pr-4">
            <div>
              <h3 className="text-md font-semibold">Starter</h3>
              <p>$0 / month</p>
            </div>
            <p className="text-sm font-normal">
              Deal for small vendors just getting started. Manage a few products
              and enjoy basic tools to begin selling confidently.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg w-[150px]">
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-80 max-w-[220px] md:max-w-none flex justify-center rounded-md overflow-hidden">
            <img
              src="./door.svg"
              alt="starter plan"
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between gap-4 bg-slate-50 px-6 md:px-8 py-4 rounded-lg border border-[#D9D9D9]">
          <div className="flex flex-col gap-3 md:pr-4">
            <div>
              <h3 className="text-md font-semibold text-black">Pro</h3>
              <p className="text-[#637887]">$29 / month</p>
            </div>
            <p className="text-sm font-normal text-black">
              Designed for growing businesses. Get access to advanced features,
              more product uploads, and marketing tools to boost sales.
            </p>
            <button className="bg-[#F0F2F5] text-black px-4 py-2 rounded-lg w-[120px]">
              Subscribe
            </button>
          </div>
          <div className="w-full md:w-80 max-w-[220px] md:max-w-none flex justify-center rounded-md overflow-hidden">
            <img
              src="./flower.svg"
              alt="pro plan"
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </div>
        </div>
         <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between gap-4 bg-slate-50 px-6 md:px-8 py-4 rounded-lg border border-[#D9D9D9]">
  <div className="flex flex-col gap-3 flex-1">
    <div>
      <h3 className="text-lg font-semibold text-black">Growth</h3>
      <p className="text-[#637887] text-base">$99 / month</p>
    </div>

    <p className="text-sm text-black leading-relaxed">
      Perfect for established vendors. Unlock unlimited features,
      detailed analytics, and full control to scale your business faster.
    </p>

    <button className="mt-1 bg-[#F0F2F5] text-black px-5 py-2 rounded-xl w-fit">
      Upgrade
    </button>
  </div>
  <div className="w-full md:w-80 max-w-[220px] md:max-w-none flex justify-center rounded-md overflow-hidden">    <img
      src="./castle.svg"
      alt="growth plan"
      className="w-full h-auto md:h-full object-contain md:object-cover"
    />
  </div>
</div>
        <div className="w-full flex justify-center cursor-pointer">
          <p className="text-black font-medium text-sm mb-10">
            Skip
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative hidden md:flex flex-col items-center justify-center w-full">
        <img
          src="./kaihma-setup.svg"
          alt="setup illustration"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-60 flex gap-5 items-center">
          <img
            src="./kaihma-k.svg"
            alt="kaihma logo"
            className="w-16 h-16"
          />
          <p className="text-sm font-bold text-slate-100 mt-6">
            Kaihma
          </p>
        </div>

        <div className="absolute bottom-8 max-w-[390px] p-2">
          <p className="text-xs font-light text-slate-200">
            Get more access with our best plan to have a good experience with us
          </p>
        </div>
      </div>

    </div>
  </div>
)}
      {/* NEXT BUTTON */}
      {currentStep < TOTAL_STEPS && (
        <div className="flex justify-end mt-10">
          <button
            onClick={() => setCurrentStep((p) => p + 1)}
            className="bg-[#2D17FC] text-white px-6 py-3 rounded-lg text-sm"
          >
            {currentStep === 1 && "Next: Store details"}
            {currentStep === 2 && "Next: Finalize setup"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreSetup;


