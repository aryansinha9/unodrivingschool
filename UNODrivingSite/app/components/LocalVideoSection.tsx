export default function LocalVideoSection({ videoId, suburbName }: { videoId: string, suburbName: string }) {
    return (
        <section className="bg-background-alt py-14">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="font-anton text-3xl uppercase mb-8 text-text-main">
                    {suburbName} Video
                </h2>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-black max-w-4xl mx-auto">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`${suburbName} Driving Lessons Video`}
                    />
                </div>
            </div>
        </section>
    );
}
