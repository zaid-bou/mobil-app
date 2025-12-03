import React from "react";
import { useNavigate } from "react-router-dom";

export default function EducationLevelPage() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
        
        .itim-font {
          font-family: 'Itim', cursive;
        }

        .year-button {
          transition: all 0.3s ease;
        }

        .year-button:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .year-button:active {
          transform: translateX(5px);
        }

        .wavy-line-left {
          position: absolute;
          left: 0;
          top: -27px;
          height: 910.71px;
          width: auto;
          opacity: 0.8;
        }
      `}</style>

      <div
        className="relative overflow-hidden"
        style={{
          width: "430px",
          height: "932px",
          background: "linear-gradient(168.09deg, #131CC3 0%, #FFFFFF 98.77%)",
        }}
      >
        {/* Wavy Line Left */}
        <img src="/wavy-line.png" alt="" className="wavy-line-left" />

        {/* Top Logo */}
        <div
          className="absolute"
          style={{
            width: "300px",
            height: "300px",
            left: "59px",
            top: "-27px",
          }}
        >
          <img
            src="/whitelogo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* EDUCATION LEVEL Title */}
        <h1
          className="itim-font absolute text-black text-center"
          style={{
            width: "286px",
            left: "85px",
            top: "215px",
            fontSize: "48px",
            lineHeight: "58px",
            fontWeight: "400",
          }}
        >
          EDUCATION LEVEL
        </h1>

        {/* Year Buttons Container */}
        <div
          className="absolute"
          style={{
            width: "380px",
            height: "422px",
            left: "19px",
            top: "361px",
          }}
        >
          {/* First Year Button */}
          <button
            className="year-button absolute flex items-center"
            style={{
              left: "15px",
              top: "0px",
              width: "365px",
              height: "94px",
              background:
                "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #737373 100%)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/course")}
          >
            <img
              src="/1.png"
              alt="1"
              className="absolute left-0 h-[90px] w-auto"
            />
            <span
              className="itim-font absolute"
              style={{
                left: "90px",
                fontSize: "48px",
                lineHeight: "58px",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              First Year
            </span>
          </button>

          {/* Second Year Button */}
          <button
            className="year-button absolute flex items-center"
            style={{
              left: "30px",
              top: "164px",
              width: "365px",
              height: "94px",
              background:
                "radial-gradient(50% 50% at 42.47% 50%, #D9D9D9 0%, #737373 100%)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/course")}
          >
            <img
              src="/2.png"
              alt="2"
              className="absolute left-0 h-[90px] w-auto"
            />
            <span
              className="itim-font absolute"
              style={{
                left: "90px",
                fontSize: "48px",
                lineHeight: "58px",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              Second Year
            </span>
          </button>

          {/* Third Year Button */}
          <button
            className="year-button absolute flex items-center"
            style={{
              left: "15px",
              top: "328px",
              width: "365px",
              height: "94px",
              background:
                "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #737373 100%)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/course")}
          >
            <img
              src="/3.png"
              alt="3"
              className="absolute left-0 h-[90px] w-auto"
            />
            <span
              className="itim-font absolute"
              style={{
                left: "90px",
                fontSize: "48px",
                lineHeight: "58px",
                fontWeight: "400",
                color: "#000000",
              }}
            >
              Third Year
            </span>
          </button>
        </div>

        {/* Bottom Character with Sign */}
        <div
          className="absolute"
          style={{
            width: "187px",
            height: "119px",
            left: "217px",
            top: "813px",
          }}
        >
          <img
            src="/stickfigure.png"
            alt="Character"
            className="w-full h-full object-contain"
          />

          <img
            src="/stickfigure.png"
            alt="Character"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
}
