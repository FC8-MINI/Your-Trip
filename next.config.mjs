/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.postimg.cc", port: "" }],
  },
};

export default nextConfig;
