export const BreastSurgeryHeroVector = ({ className }: { className?: string }) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 z-0 opacity-20 ${className || ''}`}
    >
        {/* Abstract Premium Curves */}
        <path
            d="M0,450 C300,600 600,300 1200,450 L1200,600 L0,600 Z"
            fill="url(#gold-gradient-bottom)"
        />
        <path
            d="M0,0 L1200,0 L1200,150 C900,-50 300,150 0,-50 Z"
            fill="url(#blue-gradient-top)"
        />

        {/* Elegant Silhouette Lines */}
        <path
            d="M400,150 C550,250 550,350 400,450"
            stroke="url(#warm-line)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
        />
        <path
            d="M800,150 C650,250 650,350 800,450"
            stroke="url(#warm-line)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
        />

        <defs>
            <linearGradient id="gold-gradient-bottom" x1="0" y1="450" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="1" stopColor="#B38B22" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="blue-gradient-top" x1="0" y1="0" x2="1200" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1C3F60" stopOpacity="0.3" />
                <stop offset="1" stopColor="#1C3F60" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="warm-line" x1="400" y1="150" x2="400" y2="450" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="0.5" stopColor="#D4AF37" stopOpacity="1" />
                <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);
