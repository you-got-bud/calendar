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
        <div className="text-center flex flex-col justify-center items-center">
          <img src="/logo.png" width={100} height={100} alt="Logo" />
          <h2 className="bg-gradient from-zinc-200 to-zinc-500 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent mb-3">
            A fast, flexible, server component friendly date-picker for react.
          </h2>
          <p className="text-center text-lg text-gray-500 md:text-xl lg:text-2xl">
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
