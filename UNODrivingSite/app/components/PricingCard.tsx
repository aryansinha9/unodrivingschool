import Link from "next/link";

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    highlight?: boolean;
}

export default function PricingCard({ title, subtitle, price, features, highlight = false }: PricingCardProps) {
    return (
        <div className={`flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 ${highlight ? 'border-4 border-primary transform scale-105 z-10' : 'border border-gray-100'}`}>
            <div className={`${highlight ? 'bg-primary' : 'bg-gray-900'} p-6 text-center`}>
                <h3 className="font-anton text-white text-2xl uppercase tracking-wide">{title}</h3>
                {highlight && <span className="inline-block mt-2 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span>}
            </div>
            <div className="p-8 flex-grow flex flex-col items-center">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 text-center">{subtitle}</p>
                <div className="font-anton text-4xl text-primary mb-8">{price}</div>
                <ul className="space-y-3 mb-8 w-full flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start justify-center text-center text-gray-700 font-roboto">
                            <span className="mr-2 text-primary">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <Link
                    href="/contact-us"
                    className={`w-full block text-center py-3 rounded-lg font-anton uppercase tracking-wider transition-colors ${highlight ? 'bg-primary text-white hover:bg-green-600' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}
