import React from "react";

export default function EducationCoursePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
        
        .itim-font {
          font-family: 'Itim', cursive;
        }

        .course-button {
          transition: all 0.3s ease;
        }

        .course-button:hover {
          transform: translateX(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .course-button:active {
          transform: translateX(-2px);
        }

        .wavy-border {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: auto;
          opacity: 0.8;
        }

        .menu-icon {
          width: 40px;
          height: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .menu-line {
          width: 100%;
          height: 4px;
          background: white;
          border-radius: 2px;
        }
      `}</style>

      <div
        className="relative overflow-hidden"
        style={{
          width: "430px",
          height: "932px",
          background: "linear-gradient(192.02deg, #131CC3 0%, #FFF200 100%)",
        }}
      >
        {/* Wavy Line Border */}
        <img
          src="/wavy-line.png"
          alt=""
          className="wavy-border absolute left-65"
        />

        {/* Top Logo */}
        <div className="absolute left-0 top-0 w-[200px] h-[200px] flex items-center justify-center ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-50 h-50 object-contain"
          />
        </div>

        {/* Menu Icon */}
        <div className="absolute right-8 top-8">
          <div className="menu-icon">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>

        {/* Education Course Title */}
        <h1
          className="itim-font absolute text-white text-center"
          style={{
            left: "80px",
            top: "167px",
            width: "221px",
            fontSize: "48px",
            lineHeight: "58px",
            fontWeight: "400",
          }}
        >
          Education Course
        </h1>

        {/* Course Buttons */}

        {/* Arts Graphiques */}
        <button
          className="course-button absolute flex items-center px-6"
          style={{
            width: "280px",
            height: "90px",
            left: "20px",
            top: "314px",
            background: "linear-gradient(90deg, #330375 49.52%, #D9D9D9 100%)",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            className="itim-font text-white"
            style={{
              fontSize: "36px",
              lineHeight: "43px",
              fontWeight: "400",
            }}
          >
            Arts Graphiques
          </span>
        </button>

        {/* Audiovisuel et Cinéma */}
        <button
          className="course-button absolute flex items-center px-6"
          style={{
            width: "280px",
            height: "90px",
            left: "20px",
            top: "438px",
            background: "linear-gradient(90deg, #12650C 60.1%, #D9D9D9 100%)",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            className="itim-font text-white"
            style={{
              fontSize: "28px",
              lineHeight: "34px",
              fontWeight: "400",
            }}
          >
            Audiovisuel et
            <br />
            Cinéma
          </span>
        </button>

        {/* Métiers de l'Aéronautique */}
        <button
          className="course-button absolute flex items-center px-6"
          style={{
            width: "280px",
            height: "90px",
            left: "20px",
            top: "562px",
            background: "linear-gradient(90deg, #1D0C65 70%, #D9D9D9 100%)",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            className="itim-font text-white"
            style={{
              fontSize: "28px",
              lineHeight: "34px",
              fontWeight: "400",
            }}
          >
            Métiers de
            <br />
            l'Aéronautique
          </span>
        </button>

        {/* Métiers de l'Artisanat */}
        <button
          className="course-button absolute flex items-center px-6"
          style={{
            width: "280px",
            height: "90px",
            left: "20px",
            top: "686px",
            background: "linear-gradient(90deg, #650C0C 80%, #D9D9D9 100%)",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            className="itim-font text-white"
            style={{
              fontSize: "28px",
              lineHeight: "34px",
              fontWeight: "400",
            }}
          >
            Métiers de
            <br />
            l'Artisanat
          </span>
        </button>

        {/* Bottom Left Student Image */}
        <div className="absolute left-0 bottom-[15px] w-[152px] h-[152px]">
          <img
            src="/student.png"
            alt="Student"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right Graduate Image */}
        <div className="absolute right-0 bottom-[11px] w-[100px] h-[100px]">
          <img
            src="/download__2_-removebg-preview (1).png"
            alt="Graduate"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
}
