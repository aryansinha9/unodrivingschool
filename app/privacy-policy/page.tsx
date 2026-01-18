import PageHeader from "@/app/components/PageHeader";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Privacy Policy"
            />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
                    <p>We collect personal information solely for the purpose of providing driving instruction services.</p>
                    {/* Extended content would go here */}
                </div>
            </section>
        </main>
    );
}
