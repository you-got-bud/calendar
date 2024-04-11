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
              background: 'linear-gradient(to bottom right, #f2f2f2, #fafafa)',
              backgroundClip: 'text',
              textAlign: 'center',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            A fast, flexible, server component friendly date-picker for react.
          </h2>
          <p
            className="text-center text-lg text-gray-500"
            style={{
              color: '#666',
              fontSize: '18px',
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
