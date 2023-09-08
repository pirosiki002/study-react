/** @type {import('next').NextConfig} */
const nextConfig = {
  // trueでuseEffectが２回マウントされる。必要な機能ですけど、学習時はわかりやすさ重視でfalseにしています。
  // reactStrictMode: true,
  reactStrictMode: false,
}

module.exports = nextConfig
