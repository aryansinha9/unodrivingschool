import PageHeader from "@/app/components/PageHeader";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen">
            <PageHeader title="PRIVACY POLICY" />
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="prose max-w-none text-gray-700 font-roboto leading-relaxed space-y-8">
                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Information Gathered</h2>
                        <p className="mb-4">
                            At Uno e Driving School, we gather your personal particulars through interactions on our website and via email or phone communications. This data may encompass details like your name, contact information, phone numbers, and payment particulars.
                        </p>
                        <p className="mb-4">
                            Furthermore, we might gather non-identifiable details, such as your IP address, browser version, and operating system, for analytical purposes. This information may be presented in an anonymous manner, like a report outlining our website usage patterns.
                        </p>
                        <p className="mb-4">
                            Any credit card information is securely processed via a PCI compliant payment gateway utilising a secure HTTPS connection.
                        </p>
                        <p>
                            Similar to most online platforms, Uno Driving School uses cookies to save a user’s website preferences. If you prefer not to have cookies stored on your device, adjust your browser settings to reject cookies before accessing our website, although this may affect the functionality of certain features.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Utilisation of Information</h2>
                        <p className="mb-4">
                            The personal data gathered is utilised for billing, identification, authentication, service enhancement, research, and website advancement purposes.
                        </p>
                        <p className="mb-4">
                            Uno Driving School will not disclose your personal details to any party except for delivering requested services, enhancing our products, safeguarding our rights, aiding in lawful investigations, complying with legal obligations, or contacting you.
                        </p>
                        <p className="mb-4">
                            Certain third-party service providers, like website hosts, payment processors, and backup service providers, may access the personal data retained by us if they a) require this information to process requests on behalf of Uno Driving School, or to offer services on the website, and b) have agreed not to disclose this information to any other parties.
                        </p>
                        <p>
                            Aggregated non-personal data compiled by Uno Driving School may be shared with third parties to enhance the Uno Driving School website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Social Networking</h2>
                        <p>
                            Uno Driving School may tag you in a photograph on social media or feature your Facebook profile image if you provide a testimonial. Should you wish for your photo not to be displayed or shared, you have the option to request this.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Business Transfers</h2>
                        <p>
                            In the event of Uno Driving School being acquired, going out of business, or filing for bankruptcy, user information would be considered one of the assets that may be transferred or acquired by a third party. By utilizing our services, you acknowledge that such transfers could take place, and any entity acquiring Uno Driving School may continue to handle your personal information in accordance with this policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Changes to Privacy Policy</h2>
                        <p>
                            While most modifications are expected to be minor, Uno Driving School reserves the right to alter its Privacy Policy periodically, at our discretion. We recommend that users regularly review this page to stay informed about any updates to our Privacy Policy. By continuing to use our website following any adjustments to this Privacy Policy, you signify your acceptance of the revised terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-anton text-text-main uppercase mb-4">Queries or Concerns</h2>
                        <p>
                            We value your privacy. If you have any inquiries or concerns regarding the handling of your personal information, please feel free to contact Uno Driving School at <a href="mailto:hello@unofrivingschool.com.au" className="text-primary hover:underline">hello@unofrivingschool.com.au</a>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
