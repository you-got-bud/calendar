const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@you-got-bud/calendar'],
}
module.exports = withContentlayer(nextConfig)
