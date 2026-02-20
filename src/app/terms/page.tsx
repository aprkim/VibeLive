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
            <p className="text-[13px] text-muted">Last Updated: February 20, 2026</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section id="acceptance" num={1} title="Acceptance of Terms">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern access to
                and use of VibeLive (the &ldquo;Service&rdquo;), operated by
                Makedo Inc, a California corporation (&ldquo;VibeLive,&rdquo;
                &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by
                these Terms. If you do not agree, do not use the Service.
              </p>
              <p>
                If you use the Service on behalf of an entity, you represent
                that you have authority to bind that entity.
              </p>
            </Section>

            <Section id="description" num={2} title="Description of Service">
              <p>
                VibeLive provides real-time video, audio, and communication
                infrastructure designed for developers and builders to embed
                live functionality into their own applications.
              </p>
              <p>The Service may include:</p>
              <BulletList
                items={[
                  "Real-time video and audio transmission",
                  "Screen sharing capabilities",
                  "Room/session creation",
                  "API and SDK integrations",
                  "Optional transcription functionality",
                  "Limited session metadata storage",
                  "Beta or experimental features",
                ]}
              />
              <p>
                VibeLive is a technology infrastructure provider and does not
                operate a social network, content hosting platform, or
                moderation service.
              </p>
            </Section>

            <Section id="eligibility" num={3} title="Eligibility">
              <p>You must be at least 13 years old to use the Service.</p>
              <p>The Service is not directed to children under 13.</p>
              <p>
                Developers are solely responsible for compliance with applicable
                child privacy laws, including COPPA and similar international
                laws.
              </p>
            </Section>

            <Section id="accounts" num={4} title="Accounts and Access">
              <p>The Service may permit:</p>
              <BulletList
                items={[
                  "Account-based access",
                  "Guest participation",
                  "API key or project key access",
                ]}
              />
              <p>
                You are responsible for maintaining the confidentiality of your
                credentials and API keys.
              </p>
              <p>
                You are responsible for all activity occurring under your
                credentials.
              </p>
            </Section>

            <Section
              id="developer-responsibility"
              num={5}
              title="Developer Responsibility"
            >
              <p>VibeLive is a neutral infrastructure provider.</p>
              <p>You are solely responsible for:</p>
              <BulletList
                items={[
                  "Applications you build using the Service",
                  "Content transmitted through your implementation",
                  "Obtaining legally required user consents",
                  "Recording consent compliance (including two-party consent laws such as California)",
                  "Compliance with privacy, data protection, and consumer protection laws",
                  "Your end users and their conduct",
                ]}
              />
              <p>
                VibeLive does not monitor, moderate, or control communications
                transmitted through developer implementations and has no
                obligation to do so.
              </p>
            </Section>

            <Section
              id="recording"
              num={6}
              title="Recording and Transcription"
            >
              <p>Unless explicitly stated otherwise:</p>
              <BulletList
                items={[
                  "VibeLive does not store video or audio recordings.",
                  "Any recording functionality is controlled by developers and/or occurs within end-user environments.",
                  "Developers are solely responsible for obtaining legally required consent before enabling recording or transcription.",
                ]}
              />
              <p>If transcription features are enabled:</p>
              <BulletList
                items={[
                  "Transcriptions may be processed using third-party AI providers.",
                  "Developers are responsible for notifying end users of such processing.",
                  "VibeLive may store transcription data as described in the Privacy Policy.",
                ]}
              />
              <p>
                VibeLive assumes no liability for unauthorized or unlawful
                recording conducted by developers or end users.
              </p>
            </Section>

            <Section id="data" num={7} title="Data and Metadata">
              <p>
                VibeLive may store limited session metadata, including:
              </p>
              <BulletList
                items={[
                  "Room identifiers",
                  "Timestamps",
                  "Participant counts",
                  "Technical diagnostics",
                ]}
              />
              <p>
                We do not store media content unless explicitly disclosed.
              </p>
            </Section>

            <Section id="acceptable-use" num={8} title="Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <BulletList
                items={[
                  "Violate any law or regulation",
                  "Transmit unlawful, abusive, infringing, or harmful content",
                  "Interfere with system integrity",
                  "Attempt unauthorized access",
                  "Reverse engineer or exploit the Service",
                ]}
              />
              <p>
                We may suspend or terminate access for violations or suspected
                abuse.
              </p>
            </Section>

            <Section
              id="api-limits"
              num={9}
              title="API Limits and Plan Enforcement"
            >
              <p>We may:</p>
              <BulletList
                items={[
                  "Enforce usage limits",
                  "Rate limit traffic",
                  "Throttle bandwidth",
                  "Suspend accounts exceeding plan limits",
                  "Modify or discontinue plan features",
                ]}
              />
              <p>Free or trial plans may have usage restrictions.</p>
            </Section>

            <Section
              id="beta"
              num={10}
              title="Beta and Experimental Features"
            >
              <p>We may offer beta or experimental features.</p>
              <p>Such features:</p>
              <BulletList
                items={[
                  "May be modified or discontinued at any time",
                  "May be unstable",
                  "Are provided without warranties",
                ]}
              />
            </Section>

            <Section id="payments" num={11} title="Payments and Billing">
              <p>
                Paid plans are billed via third-party payment processors (e.g.,
                Stripe).
              </p>
              <p>Fees are:</p>
              <BulletList
                items={[
                  "Recurring unless canceled",
                  "Non-refundable unless required by law",
                ]}
              />
              <p>We may suspend access for non-payment.</p>
              <p>You are responsible for applicable taxes.</p>
            </Section>

            <Section
              id="third-party"
              num={12}
              title="Third-Party Services"
            >
              <p>
                The Service may rely on third-party providers, including cloud
                hosting, AI services, or payment processors.
              </p>
              <p>
                We are not responsible for third-party service performance.
              </p>
            </Section>

            <Section id="privacy" num={13} title="Privacy">
              <p>
                Use of the Service is subject to our{" "}
                <a
                  href="/privacy"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p>By using the Service, you agree to that policy.</p>
            </Section>

            <Section
              id="disclaimers"
              num={14}
              title="Disclaimer of Warranties"
            >
              <p>
                The Service is provided &ldquo;AS IS&rdquo; and &ldquo;AS
                AVAILABLE.&rdquo;
              </p>
              <p>
                We disclaim all warranties, express or implied, including:
              </p>
              <BulletList
                items={[
                  "Merchantability",
                  "Fitness for a particular purpose",
                  "Non-infringement",
                  "Uninterrupted availability",
                ]}
              />
            </Section>

            <Section
              id="liability"
              num={15}
              title="Limitation of Liability"
            >
              <p>To the maximum extent permitted by law:</p>
              <p>
                VibeLive&rsquo;s total liability shall not exceed the lesser of:
              </p>
              <BulletList
                items={[
                  "$100 USD; or",
                  "The amount paid by you in the preceding 12 months.",
                ]}
              />
              <p>
                We are not liable for indirect, incidental, special,
                consequential, or punitive damages.
              </p>
            </Section>

            <Section id="indemnification" num={16} title="Indemnification">
              <p>
                You agree to indemnify and hold harmless Makedo Inc from claims
                arising out of:
              </p>
              <BulletList
                items={[
                  "Your use of the Service",
                  "Your applications",
                  "Your end users",
                  "Your violation of law",
                  "Recording or consent violations",
                ]}
              />
            </Section>

            <Section
              id="arbitration"
              num={17}
              title="Arbitration and Dispute Resolution"
            >
              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Informal Resolution
              </h3>
              <p>
                Before filing a claim, parties agree to attempt informal
                resolution for 30 days.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Binding Arbitration
              </h3>
              <p>
                Any dispute arising from these Terms shall be resolved by
                binding arbitration administered by the American Arbitration
                Association under its Commercial Arbitration Rules.
              </p>
              <p>Arbitration shall take place in California.</p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Class Action Waiver
              </h3>
              <p>
                Disputes must be brought on an individual basis. Class actions
                and representative actions are waived.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Jury Trial Waiver
              </h3>
              <p>You waive any right to a jury trial.</p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Small Claims
              </h3>
              <p>
                Either party may bring individual claims in small claims court.
              </p>
            </Section>

            <Section id="termination" num={18} title="Termination">
              <p>
                We may suspend or terminate access at any time for violation or
                risk.
              </p>
              <p>You may stop using the Service at any time.</p>
              <p>
                Provisions that by nature should survive termination shall
                survive.
              </p>
            </Section>

            <Section
              id="export-compliance"
              num={19}
              title="Export Compliance"
            >
              <p>
                You agree not to use the Service in violation of U.S. export
                control or sanctions laws.
              </p>
            </Section>

            <Section id="force-majeure" num={20} title="Force Majeure">
              <p>
                We are not liable for delays caused by events beyond our
                reasonable control.
              </p>
            </Section>

            <Section id="assignment" num={21} title="Assignment">
              <p>
                We may assign these Terms without restriction. You may not
                assign without consent.
              </p>
            </Section>

            <Section id="governing-law" num={22} title="Governing Law">
              <p>
                These Terms are governed by the laws of the State of California,
                without regard to conflict of law principles.
              </p>
            </Section>

            <Section id="changes" num={23} title="Changes to Terms">
              <p>We may update these Terms.</p>
              <p>Continued use constitutes acceptance.</p>
            </Section>

            <section id="contact">
              <h2 className="text-base font-semibold text-text mb-3 pt-4 flex items-baseline gap-2">
                <span className="text-[13px] font-medium text-accent tabular-nums">
                  24.
                </span>
                Contact
              </h2>
              <div className="p-5 bg-[#0c0c0c] border border-white/[0.08] rounded-lg text-[15px] text-[rgba(230,241,242,0.65)]">
                <p className="mb-1">Makedo Inc</p>
                <p>
                  <a
                    href="mailto:contact@makedo.com"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    contact@makedo.com
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
