import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-card\\/90 { background-color: rgba(11, 26, 26, 0.95) !important; }
      `}</style>
      <main className="min-h-screen bg-[#060606] relative z-10">
        <Header />
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold text-text mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm text-muted space-y-6">
            <p className="text-sm leading-relaxed">
              Last updated: February 2026
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              When you use VibeLive, we may collect information you provide directly, such as your name, email address, and account credentials. We also collect usage data including how you interact with our services, device information, and log data.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">2. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">3. Video & Communication Data</h2>
            <p className="text-sm leading-relaxed">
              VibeLive facilitates peer-to-peer video connections. We do not record, store, or have access to the content of your video calls. Connection metadata may be temporarily processed to establish and maintain video sessions.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">4. Data Security</h2>
            <p className="text-sm leading-relaxed">
              We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">5. Cookies & Tracking</h2>
            <p className="text-sm leading-relaxed">
              We use essential cookies to maintain your session and preferences. We may use analytics tools to understand how our services are used. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">6. Your Rights</h2>
            <p className="text-sm leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also request a copy of your data or opt out of certain processing activities. Contact us to exercise these rights.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">7. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">8. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have questions about this privacy policy, please contact us at privacy@vibelive.site.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
