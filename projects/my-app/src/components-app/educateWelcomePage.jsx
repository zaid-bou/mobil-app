import React from "react";
import { useNavigate } from "react-router-dom";

export default function EducateWelcomePage() {
  const navigate  = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
        
        .aclonica-font {
          font-family: 'Aclonica', sans-serif;
        }

        .wavy-line-left {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
          opacity: 0.8;
        }

        .btn-hover {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          background: linear-gradient(90deg, #FFFFFF 0%, #FFF200 100%);
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
        className="relative overflow-hidden"
        style={{
          width: "430px",
          height: "932px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), #FFF200",
        }}
      >
        {/* Wavy Line Left */}
        <img src="/wavy-line.png" alt="" className="wavy-line-left" />

        {/* Top Logo/Badge */}
        <div
          className="absolute"
          style={{ width: "430px", height: "430px", left: "0px", top: "0px" }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Student Character */}
        <div
          className="absolute"
          style={{
            width: "500px",
            height: "500px",
            left: "-49px",
            top: "338px",
          }}
        >
          <img
            src="/student.png"
            alt="Student"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Button at Bottom */}
        <div
          className="absolute flex justify-center items-center"
          style={{ left: "7.44%", right: "7.67%", top: "89.91%", bottom: "0%" }}
        >
          <button
            className="btn-hover text-black rounded-full flex items-center justify-between px-8 py-3 border-0 w-full"
            style={{
              borderRadius: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/levels")}
          >
            <span
              className="aclonica-font"
              style={{
                fontSize: "51px",
                lineHeight: "58px",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              Let's go
            </span>
            <div className="flex items-center gap-0">
              <img
                src="/row.png"
                alt="Arrow"
                className="w-8 h-8 object-contain "
              />
              <img
                src="/row.png"
                alt="Arrow"
                className="w-8 h-8 object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
