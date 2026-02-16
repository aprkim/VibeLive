import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Terms() {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      <style>{`
        .dark section { background-color: transparent !important; }
      `}</style>
      <main className="min-h-screen bg-[#060606] relative z-10">
        <Header />
        <div className="max-w-[700px] mx-auto px-6 py-20">
          {/* Title */}
          <div className="mb-12 pb-8 border-b border-white/[0.08]">
            <h1 className="text-[1.75rem] font-bold text-text tracking-tight mb-2">
              Terms of Service
            </h1>
            <p className="text-[13px] text-muted">Last Updated: February 2026</p>
          </div>

          {/* Intro */}
          <div className="mb-10 text-[15px] leading-[1.75] text-[rgba(230,241,242,0.65)] space-y-3">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern access to and
              use of VibeLive (the &ldquo;Service&rdquo;), a product operated by
              Tabbi AI, Inc., a Delaware corporation (&ldquo;VibeLive,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p>
              By accessing or using the Service, you agree to these Terms. If you
              do not agree, do not use the Service.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section id="description" num={1} title="Description of Service">
              <p>
                VibeLive provides real-time video and audio communication
                infrastructure designed for developers and builders to embed live
                video functionality into their applications.
              </p>
              <p>The Service may include:</p>
              <BulletList
                items={[
                  "Real-time video and audio transmission",
                  "Screen sharing capabilities",
                  "Room creation and access via link or code",
                  "Optional client-side recording capabilities",
                  "Storage of limited session metadata",
                ]}
              />
              <p>
                Recording functionality, if enabled, is performed locally within
                the participant&rsquo;s browser or application environment.
                VibeLive does not store or retain video or audio recordings.
              </p>
              <p>
                VibeLive does not provide social networking services, content
                hosting, or content moderation.
              </p>
            </Section>

            <Section id="eligibility" num={2} title="Eligibility">
              <p>
                You must be at least 13 years old to use the Service.
              </p>
              <p>
                If you use VibeLive on behalf of a company or organization, you
                represent that you have authority to bind that entity to these
                Terms.
              </p>
            </Section>

            <Section id="accounts" num={3} title="Accounts and Access">
              <p>VibeLive may allow:</p>
              <BulletList
                items={[
                  "Account-based access",
                  "Guest participation without account creation",
                ]}
              />
              <p>
                You are responsible for maintaining the confidentiality of your
                credentials and access keys.
              </p>
            </Section>

            <Section
              id="developer-responsibility"
              num={4}
              title="Developer Responsibility"
            >
              <p>
                VibeLive is a neutral technology infrastructure provider.
              </p>
              <p>You are solely responsible for:</p>
              <BulletList
                items={[
                  "The applications you build using VibeLive",
                  "All content transmitted through your implementation",
                  "Any recordings generated through your implementation",
                  "Your end users",
                  "Compliance with applicable laws and regulations",
                  "Obtaining any legally required consents, including consent for recording or transcription",
                ]}
              />
              <p>
                VibeLive does not monitor, control, store, or moderate
                communications transmitted using the Service.
              </p>
            </Section>

            <Section id="acceptable-use" num={5} title="Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <BulletList
                items={[
                  "Violate any law or regulation",
                  "Transmit unlawful, harmful, abusive, or infringing content",
                  "Interfere with network integrity or security",
                  "Attempt unauthorized access to systems",
                  "Reverse engineer or misuse the Service",
                ]}
              />
              <p>
                We may suspend or terminate access if we determine misuse.
              </p>
            </Section>

            <Section id="data" num={6} title="Data and Storage">
              <p>VibeLive does not store:</p>
              <BulletList
                items={[
                  "Video recordings",
                  "Audio recordings",
                  "Client-side recordings generated through developer applications",
                ]}
              />
              <p>
                Recording functionality, if enabled, occurs locally in the
                user&rsquo;s browser or application and is controlled by the
                developer.
              </p>
              <p>VibeLive may store:</p>
              <BulletList
                items={[
                  "Limited session metadata (such as room ID, timestamps, and participant counts)",
                  "Transcriptions when explicitly requested or enabled",
                ]}
              />
              <p>
                Developers are responsible for storage, management, and deletion
                of any recordings created through their applications.
              </p>
            </Section>

            <Section id="payments" num={7} title="Payments and Billing">
              <p>
                Paid plans are billed via Stripe on a recurring monthly basis.
              </p>
              <p>
                All fees are non-refundable unless required by law. We may:
              </p>
              <BulletList
                items={[
                  "Suspend access for non-payment",
                  "Modify pricing with reasonable notice",
                  "Modify plan features",
                ]}
              />
              <p>Taxes are your responsibility unless otherwise stated.</p>
            </Section>

            <Section id="ip" num={8} title="Intellectual Property">
              <p>
                All rights, title, and interest in the Service remain with Tabbi
                AI, Inc.
              </p>
              <p>
                These Terms do not grant you ownership of the Service or
                underlying technology.
              </p>
              <p>
                You retain ownership of content transmitted through your
                implementation.
              </p>
            </Section>

            <Section id="privacy" num={9} title="Privacy">
              <p>
                Our{" "}
                <a
                  href="/privacy"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                explains how we collect and use information.
              </p>
              <p>
                By using the Service, you agree to our Privacy Policy.
              </p>
            </Section>

            <Section id="disclaimers" num={10} title="Disclaimers">
              <p>
                The Service is provided &ldquo;AS IS&rdquo; and &ldquo;AS
                AVAILABLE.&rdquo;
              </p>
              <p>We do not guarantee:</p>
              <BulletList
                items={[
                  "Continuous availability",
                  "Error-free operation",
                  "Compatibility with all environments",
                ]}
              />
              <p>
                We disclaim all warranties to the fullest extent permitted by law.
              </p>
            </Section>

            <Section id="liability" num={11} title="Limitation of Liability">
              <p>To the maximum extent permitted by law:</p>
              <p>
                VibeLive&rsquo;s total liability arising out of or relating to the
                Service shall not exceed the lesser of:
              </p>
              <BulletList
                items={[
                  "$100 USD; or",
                  "The amount paid by you to VibeLive in the preceding 12 months.",
                ]}
              />
              <p>
                We are not liable for indirect, incidental, special,
                consequential, or punitive damages.
              </p>
            </Section>

            <Section id="indemnification" num={12} title="Indemnification">
              <p>
                You agree to indemnify and hold harmless Tabbi AI, Inc. from
                claims arising out of:
              </p>
              <BulletList
                items={[
                  "Your use of the Service",
                  "Your applications",
                  "Your end users",
                  "Your violation of these Terms",
                ]}
              />
            </Section>

            <Section id="termination" num={13} title="Termination">
              <p>
                We may suspend or terminate access at our discretion, including
                for violation of these Terms.
              </p>
              <p>You may stop using the Service at any time.</p>
            </Section>

            <Section id="governing-law" num={14} title="Governing Law">
              <p>
                These Terms are governed by the laws of the State of Delaware,
                without regard to conflict of law principles.
              </p>
            </Section>

            <Section id="changes" num={15} title="Changes to Terms">
              <p>
                We may update these Terms from time to time.
              </p>
              <p>
                Continued use of the Service after changes means you accept the
                updated Terms.
              </p>
            </Section>

            <section id="contact">
              <h2 className="text-base font-semibold text-text mb-3 pt-4 flex items-baseline gap-2">
                <span className="text-[13px] font-medium text-accent tabular-nums">
                  16.
                </span>
                Contact
              </h2>
              <div className="p-5 bg-[#0c0c0c] border border-white/[0.08] rounded-lg text-[15px] text-[rgba(230,241,242,0.65)]">
                <p className="mb-1">Tabbi AI, Inc.</p>
                <p>
                  <a
                    href="mailto:hello@vibelive.site"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    hello@vibelive.site
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <h2 className="text-base font-semibold text-text mb-3 pt-4 flex items-baseline gap-2">
        <span className="text-[13px] font-medium text-accent tabular-nums">
          {num}.
        </span>
        {title}
      </h2>
      <div className="text-[15px] leading-[1.75] text-[rgba(230,241,242,0.65)] space-y-3">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-2 ml-5 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="relative pl-3 text-[15px]">
          <span className="absolute left-0 top-[10px] w-1 h-1 bg-accent/60 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  );
}
