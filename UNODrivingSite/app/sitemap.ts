import { MetadataRoute } from "next";
import { locations } from "@/app/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.unodrivingschool.com.au";

    const staticRoutes = [
        "",
        "/about-us",
        "/prices",
        "/locations",
        "/photo-gallery",
        "/faqs",
        "/blog",
        "/contact-us",
        "/code-of-conduct",
        "/terms-conditions",
        "/privacy-policy",
        "/careers",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Generate flat suburb URLs natively
    const allSuburbs = Object.values(locations).flat();
    const dynamicRoutes = allSuburbs.map((suburb) => {
        const slug = suburb.toLowerCase().replace(/ /g, "-");
        return {
            url: `${baseUrl}/locations/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        };
    });

    return [...staticRoutes, ...dynamicRoutes];
}
