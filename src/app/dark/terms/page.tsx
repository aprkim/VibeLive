import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
        .dark .bg-card\\/90 { background-color: rgba(11, 26, 26, 0.95) !important; }
      `}</style>
      <main className="min-h-screen bg-[#060606] relative z-10">
        <Header />
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h1 className="text-3xl font-bold text-text mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm text-muted space-y-6">
            <p className="text-sm leading-relaxed">
              Last updated: February 2026
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing or using VibeLive, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">2. Description of Service</h2>
            <p className="text-sm leading-relaxed">
              VibeLive provides a plug-and-play video chat SDK for developers building applications in the AI era. Our service enables real-time video communication within your applications without requiring video infrastructure setup.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">3. User Accounts</h2>
            <p className="text-sm leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">4. Acceptable Use</h2>
            <p className="text-sm leading-relaxed">
              You agree not to use VibeLive for any unlawful purpose or in any way that could damage, disable, or impair our services. You may not attempt to gain unauthorized access to any part of the service or its related systems.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">5. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              VibeLive and its original content, features, and functionality are owned by VibeLive and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">6. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              VibeLive shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, including but not limited to loss of data or profits.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">7. Termination</h2>
            <p className="text-sm leading-relaxed">
              We may terminate or suspend your access to the service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">8. Changes to Terms</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to modify or replace these terms at any time. Material changes will be communicated with at least 30 days notice before the new terms take effect.
            </p>

            <h2 className="text-lg font-semibold text-text mt-8">9. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have questions about these Terms of Service, please contact us at legal@vibelive.site.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
