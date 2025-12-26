import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-12 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-400 text-sm">© 2025 Sakina Pause. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="/privacy-policy" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Privacy Policy</a>
                    <a href="/terms" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Terms of Use</a>
                    <a href="mailto:sakinapause@gmail.com" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Email Us</a>
                </div>
            </div>
        </footer>
    );
}
