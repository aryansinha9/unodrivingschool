import Link from "next/link";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <div className="bg-background-alt py-12 lg:py-20 text-center px-6">
            <h1 className="font-anton text-4xl lg:text-6xl uppercase text-text-main mb-4">
                {title}
            </h1>
            {subtitle && (
                <p className="font-roboto-slab text-lg text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
