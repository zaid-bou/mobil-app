import React from 'react';

export default function EducationLevelComponent() {
  const educationLevels = [
    { number: '1', title: 'First Year' },
    { number: '2', title: 'Second Year' },
    { number: '3', title: 'Third Year' },
  ];

  return (
    <div className="relative w-[430px] h-[932px] flex items-center justify-center p-4" style={{
      background: 'linear-gradient(168.09deg, #131CC3 0%, #FFFFFF 98.77%)',
    }}>
      {/* Full-height wavy line background */}
      <img src="/wavy-line.png" alt="Wavy Line" className="absolute left-0 top-0  h-full object-cover pointer-events-none" />
      
      {/* Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Header with Logo and Title */}
        <div className="text-center mb-12">
          {/* Logo Circle */}
          <div className="flex justify-center mb-2">
            <img src="/whitelogo.png" alt="Educate Logo" className="w-80 h-80" />
          </div>
          <h2 className="text-gray-900 text-4xl font-bold tracking-wider">EDUCATION</h2>
          <h2 className="text-gray-900 text-4xl font-bold tracking-wider">LEVEL</h2>
        </div>

        {/* Timeline with Decorative Line */}
        <div className="relative pl-16">
          {/* Education Level Items */}
          <div className="space-y-8">
            {educationLevels.map((level, index) => (
              <div key={index} className="relative">
                {/* Number Circle */}
                <div className="absolute -left-14 top-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{level.number}</span>
                </div>

                {/* Level Card */}
                <div className="rounded-[50px] py-4 px-6 shadow-lg hover:shadow-xl transition-shadow" style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, #737373 100%)',
                }}>
                  <span className="text-gray-900 text-xl font-semibold tracking-wide">{level.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stick figure at bottom */}
        <div className="absolute" style={{
          width: '187px',
          height: '119px',
          left: '217px',
          top: '813px',
        }}>
          <img src="/stickfigure.png" alt="Stick Figure" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}


