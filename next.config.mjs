/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/imgs/**",
        search: "",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
