/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/imags/**",
        search: "",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
