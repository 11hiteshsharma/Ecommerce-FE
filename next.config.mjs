/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "desiminimals.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
