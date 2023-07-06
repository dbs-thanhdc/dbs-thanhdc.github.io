/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
//   distDir: 'docs', // Change the output directory `out` -> `docs`
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
