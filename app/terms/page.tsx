import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-slate-900 font-serif mb-8">Terms of Use</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="lead text-xl text-slate-600 mb-8">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using the Sakina Pause mobile application ("App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
                        <p>
                            Sakina Pause is a digital wellbeing tool designed to help users limit screen time on specific applications. The App uses Android system permissions to interrupt the usage of user-selected apps.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
                        <p>
                            You are responsible for configuring the App according to your preferences. You acknowledge that by enabling the blocking features, access to certain apps on your device will be temporarily restricted based on the rules you set.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Permissions</h2>
                        <p>
                            The App requires specific Android permissions (Accessibility Service, Display Over Apps) to function. You agree to grant these permissions for the sole purpose of the App's stated functionality. Misuse or tampering with these permissions is prohibited.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
                        <p>
                            The App, including its design, code, and content (excluding Quranic texts which are public domain), is the property of Sakina Pause and is protected by copyright laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Disclaimer of Warranties</h2>
                        <p>
                            The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. We do not guarantee that the App will be error-free or uninterrupted.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Sakina Pause shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the App.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these specific terms at any time. Your continued use of the App following any changes indicates your acceptance of the new Terms of Use.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact</h2>
                        <p>
                            For any legal concerns or questions, please contact us at: sakinapause@gmail.com
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
