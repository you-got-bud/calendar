import {ImageResponse} from '@vercel/og'

export const runtime = 'edge'

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '60px',
              fontWeight: 'bold',
              lineHeight: '54px',
              letterSpacing: '-0.05em',
              color: '#fefefe',
            }}
          >
            A fast, flexible, server component <br /> friendly date-picker for
            react.
          </h2>
          <p
            className="text-center text-lg text-gray-500"
            style={{
              color: '#666',
              fontSize: '32px',
              textAlign: 'center',
            }}
          >
            Themed with @shadcn/ui and customizable down to the last element.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
