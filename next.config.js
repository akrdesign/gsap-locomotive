/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withTM = require("next-transpile-modules")(["gsap", "locomotive-scroll"]);

module.exports = withTM();