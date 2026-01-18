import PageHeader from "@/app/components/PageHeader";

export default function TermsConditions() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Terms & Conditions"
            />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Booking Policy</h2>
                    <p>All lessons must be booked in advance. Cancellations require 24 hours notice.</p>
                    {/* Extended content would go here */}
                </div>
            </section>
        </main>
    );
}
