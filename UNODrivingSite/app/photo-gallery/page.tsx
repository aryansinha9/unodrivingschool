import PageHeader from "@/app/components/PageHeader";
import GalleryGrid from "@/app/components/GalleryGrid";

export default function PhotoGallery() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Photo Gallery"
                subtitle="Celebrating our students' success stories."
            />
            <section className="min-h-[50vh]">
                <GalleryGrid />
            </section>
        </main>
    );
}
