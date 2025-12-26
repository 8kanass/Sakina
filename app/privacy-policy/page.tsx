import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold text-slate-900 font-serif mb-8">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="lead text-xl text-slate-600 mb-8">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
                        <p>
                            Sakina Pause ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our "Sakina Pause" Android application collects, uses, and discloses information about you.
                            Sakina Pause is a Digital Wellbeing app designed to help Muslims reduce screen time by intervening when distracting apps are opened.
                        </p>
                    </section>

                    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mb-8">
                        <h2 className="text-2xl font-bold text-emerald-900 mb-4">2. Accessibility Service API Disclosure</h2>
                        <p className="text-emerald-800 mb-4 font-medium">
                            Sakina Pause uses the Android Accessibility Service API to function. We want to be completely transparent about how and why this is used:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-emerald-800">
                            <li><strong>Purpose:</strong> We use the Accessibility Service solely to detect which application is currently active on your screen. This allows us to identify if you have opened one of the "distracting apps" you specifically selected to block.</li>
                            <li><strong>Data Collection:</strong> We do <strong>NOT</strong> collect, read, or store any user content, personal text, passwords, or financial information through this service.</li>
                            <li><strong>Data Transmission:</strong> No data collected via the Accessibility Service is transmitted off your device. All processing happens locally on your phone.</li>
                            <li><strong>User Control:</strong> You must explicitly grant this permission for the app to work. You can revoke it at any time in your Android system settings.</li>
                        </ul>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Display Over Other Apps</h2>
                        <p>
                            Sakina Pause requires the "Display Over Other Apps" permission (System Alert Window) to show the "Intervention Screen" (containing Quranic verses or Duas) on top of the distracting apps you have chosen to block. This is the core functionality of the app.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Storage and Account Information</h2>
                        <p>
                            <strong>Local Storage Only:</strong> All your preferences, usage statistics, and custom configurations are stored locally on your device. We do not operate a backend server to store your personal data.
                        </p>
                        <p>
                            <strong>No Account Required:</strong> You do not need to create an account to use Sakina Pause. We do not collect your email address, phone number, or any other personal identifiers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
                        <p>
                            Sakina Pause uses <strong>Google Firebase Analytics</strong> to collect anonymous usage data (e.g., number of active users, session duration, crash reports) to help us improve the App's stability and performance.
                        </p>
                        <p className="mt-2">
                            This usage data is aggregated and does not identify you personally. We do <strong>not</strong> use this data for advertising purposes or share it with third-party tracking networks.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the date at the top of the policy and, depending on the significance of the changes, providing a clear notice within the app.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: sakinapause@gmail.com
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
