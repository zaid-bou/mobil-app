import React from "react";

export default function EducateMobileUI() {
  return (
    <>
      <style>{`
        .gradient-bg {
          background: linear-gradient(180deg, #FFE600 0%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .wavy-line-img {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
          opacity: 0.4;
          object-fit: cover;
        }

        .btn-hover {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          background: linear-gradient(180deg, #FFE600 0%, #FFFFFF 100%);
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .btn-hover:active {
          transform: translateY(0px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div
        className="gradient-bg relative flex flex-col items-center"
        style={{ width: "430px", height: "932px" }}
      >
        {/* Wavy Line Image */}
        <img src="/wavy-line.png" alt="" className="wavy-line-img" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8">
          {/* Logo */}
          <div className="mb-16">
            <img
              src="/logo.png"
              alt="Educate Logo"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Character */}
          <div className="mb-16">
            <img
              src="/student.png"
              alt="Student"
              className="w-72 h-auto object-contain"
            />
          </div>
        </div>

        {/* Button at bottom */}
        <div className="relative z-10 pb-12 px-8 w-full flex justify-center">
          <button className="btn-hover text-black text-3xl font-bold py-6 px-16 rounded-full flex items-center gap-4 border-4 border-black w-full max-w-sm">
            <span className="flex-1 text-center">Let's go</span>
            <span className="text-4xl">»</span>
          </button>
        </div>
      </div>
    </>
  );
}
