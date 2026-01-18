import PageHeader from "@/app/components/PageHeader";

export default function CodeOfConduct() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Code of Conduct"
            />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                    <p>We are committed to providing a safe, respectful, and professional environment for all students and instructors.</p>
                    {/* Extended content would go here */}
                </div>
            </section>
        </main>
    );
}
