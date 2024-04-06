/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
			protocol: "https",
			hostname: "desiminimals.com",
			pathname: "**",
		},
		{
			protocol: "https",
			hostname: "images.pexels.com",
			pathname: "**",
		},
		{
			protocol: "https",
			hostname: "fakestoreapi.com",
			pathname: "**",
		},
		],
	},
};

export default nextConfig;