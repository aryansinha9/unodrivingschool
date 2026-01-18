import PageHeader from "@/app/components/PageHeader";

export default function Careers() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Careers"
                subtitle="Join our team of professional driving instructors."
            />
            <section className="container mx-auto px-6 py-12">
                <div className="prose max-w-none">
                    <h2>Become an Instructor</h2>
                    <p>We are always looking for passionate and patient individuals to join our team.</p>
                    <button className="bg-primary text-white px-6 py-2 rounded mt-4">Apply Now</button>
                </div>
            </section>
        </main>
    );
}
