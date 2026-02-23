import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Venus Estetika — Chirurgie Esthétique en Tunisie';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#20295b',
          position: 'relative',
        }}
      >
        {/* Decorative gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '630px',
            background: 'linear-gradient(135deg, rgba(122,194,215,0.3) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            height: '100%',
          }}
        >
          {/* Brand badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#7ac2d7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 800,
              }}
            >
              V
            </div>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#7ac2d7',
                letterSpacing: '2px',
              }}
            >
              VENUS ESTETIKA
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '24px',
              maxWidth: '800px',
            }}
          >
            Chirurgie Esthétique en Tunisie
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: '28px',
              color: '#7ac2d7',
              fontWeight: 600,
              marginBottom: '40px',
            }}
          >
            À partir de 1 400 € Tout Compris
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
            }}
          >
            {[
              { value: '2 500+', label: 'Patients' },
              { value: '4.8/5', label: 'Avis Google' },
              { value: '-60%', label: 'vs France' },
              { value: '15 ans', label: "d'expérience" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'white',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#7ac2d7',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
