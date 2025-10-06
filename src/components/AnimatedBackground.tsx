export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Neural network pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.02]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.6;0.3;0.6" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4">
              <animate attributeName="stop-opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Animated connecting lines */}
        <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
          <path d="M100,100 Q300,200 500,100 T900,200" className="animate-thoughtRipple">
            <animate attributeName="d" 
              values="M100,100 Q300,200 500,100 T900,200;M100,150 Q300,50 500,150 T900,100;M100,100 Q300,200 500,100 T900,200" 
              dur="8s" 
              repeatCount="indefinite" 
            />
          </path>
          <path d="M200,300 Q400,100 600,300 T1000,100" className="animate-mindFlow">
            <animate attributeName="d" 
              values="M200,300 Q400,100 600,300 T1000,100;M200,250 Q400,400 600,250 T1000,400;M200,300 Q400,100 600,300 T1000,100" 
              dur="10s" 
              repeatCount="indefinite" 
            />
          </path>
          <path d="M50,500 Q250,300 450,500 T850,300" className="animate-neuralPulse">
            <animate attributeName="d" 
              values="M50,500 Q250,300 450,500 T850,300;M50,450 Q250,600 450,450 T850,600;M50,500 Q250,300 450,500 T850,300" 
              dur="12s" 
              repeatCount="indefinite" 
            />
          </path>
        </g>
        
        {/* Neural nodes */}
        <g fill="url(#neuralGradient)">
          <circle cx="200" cy="150" r="3" className="animate-neuralPulse" />
          <circle cx="400" cy="250" r="2" className="animate-thoughtRipple" />
          <circle cx="600" cy="180" r="4" className="animate-mindFlow" />
          <circle cx="800" cy="320" r="2" className="animate-zoomPulse" />
          <circle cx="300" cy="400" r="3" className="animate-particleFloat" />
        </g>
      </svg>
      
      {/* Quantum field effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.02] via-transparent to-teal-900/[0.02] animate-prismaticShift"></div>
      
      {/* Morphing blobs */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-purple-500/[0.03] to-transparent rounded-full animate-liquidMorph"></div>
      <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-gradient-to-tr from-teal-500/[0.03] to-transparent rounded-full animate-liquidMorph delay-3000"></div>
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-gradient-to-bl from-purple-400/[0.02] to-transparent rounded-full animate-liquidMorph delay-1500"></div>
    </div>
  );
}