/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withFonts = require("next-fonts");
module.exports = withFonts();

module.exports = nextConfig;
