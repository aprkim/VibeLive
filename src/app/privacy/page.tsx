import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-[13px] text-muted">Last Updated: February 2026</p>
          </div>

          {/* Intro */}
          <div className="mb-10 text-[15px] leading-[1.75] text-[rgba(230,241,242,0.65)] space-y-3">
            <p>
              This Privacy Policy describes how VibeLive, a product operated by
              Tabbi AI, Inc., a Delaware corporation (&ldquo;VibeLive,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;),
              collects, uses, and discloses information when you access or use
              our Service.
            </p>
            <p>By using VibeLive, you agree to this Privacy Policy.</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section id="scope" num={1} title="Scope">
              <p>
                VibeLive provides real-time video and audio communication
                infrastructure designed for developers and builders.
              </p>
              <p>
                This Privacy Policy applies to developers using the Service and
                visitors to our website. Developers are responsible for their own
                end users and must provide their own privacy policies where
                required.
              </p>
            </Section>

            <Section id="information" num={2} title="Information We Collect">
              <p>
                We may collect the following categories of information:
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                a. Technical Information
              </h3>
              <BulletList
                items={[
                  "IP address",
                  "Device and browser information",
                  "Access logs",
                  "Error logs",
                ]}
              />

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                b. Usage Information
              </h3>
              <BulletList
                items={[
                  "Room identifiers",
                  "Session timestamps",
                  "Participant counts",
                  "Feature usage data",
                ]}
              />

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                c. Account Information
              </h3>
              <BulletList
                items={[
                  "Developer email address (if account created)",
                  "Authentication credentials",
                ]}
              />

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                d. Transcription Data
              </h3>
              <p>
                If transcription functionality is enabled, we may temporarily
                store transcriptions generated during sessions.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                e. Cookies and Analytics
              </h3>
              <p>
                We use cookies and similar technologies for authentication,
                performance, and analytics purposes.
              </p>
              <p>We may use third-party analytics providers.</p>
            </Section>

            <Section id="recording" num={3} title="Recording">
              <p>
                VibeLive does not store video or audio recordings.
              </p>
              <p>
                Recording functionality, if enabled, is performed locally in the
                participant&rsquo;s browser or application environment and is
                controlled by the developer.
              </p>
              <p>
                Developers are responsible for storage, consent, and legal
                compliance related to recordings.
              </p>
            </Section>

            <Section id="how-we-use" num={4} title="How We Use Information">
              <p>We use collected information to:</p>
              <BulletList
                items={[
                  "Operate and maintain the Service",
                  "Improve performance and reliability",
                  "Prevent abuse and ensure security",
                  "Provide billing and account management",
                  "Generate optional transcription features",
                ]}
              />
            </Section>

            <Section id="retention" num={5} title="Data Retention">
              <p>We retain data as follows:</p>
              <BulletList
                items={[
                  "IP addresses and access logs: up to 60 days",
                  "Session metadata: for the duration of an active account and up to 90 days after account termination",
                  "Transcriptions: up to 30 days unless exported earlier",
                  "Analytics data: according to provider retention settings",
                ]}
              />
              <p>
                We may retain information longer if required by law or for
                legitimate business purposes.
              </p>
            </Section>

            <Section id="sharing" num={6} title="Data Sharing">
              <p>We do not sell personal information.</p>
              <p>We may share information with:</p>
              <BulletList
                items={[
                  "Service providers (e.g., hosting providers, analytics providers, Stripe for billing)",
                  "Legal authorities if required by law",
                  "Successors in the event of merger or acquisition",
                ]}
              />
            </Section>

            <Section id="international" num={7} title="International Users">
              <p>VibeLive operates from the United States.</p>
              <p>
                If you access the Service from outside the U.S., you understand
                that information may be transferred to and processed in the
                United States.
              </p>
            </Section>

            <Section id="security" num={8} title="Security">
              <p>
                We implement reasonable administrative, technical, and
                organizational safeguards to protect information.
              </p>
              <p>However, no system can be guaranteed 100% secure.</p>
            </Section>

            <Section id="children" num={9} title="Children's Privacy">
              <p>The Service is not directed to children under 13.</p>
              <p>
                We do not knowingly collect personal information from children
                under 13.
              </p>
            </Section>

            <Section id="rights" num={10} title="Your Rights">
              <p>
                Depending on your jurisdiction, you may have rights to access,
                correct, or delete your information.
              </p>
              <p>
                Requests may be submitted to{" "}
                <a
                  href="mailto:hello@vibelive.site"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  hello@vibelive.site
                </a>
                .
              </p>
            </Section>

            <Section id="changes" num={11} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time.
              </p>
              <p>
                Continued use of the Service after updates constitutes
                acceptance of the revised policy.
              </p>
            </Section>

            <section id="contact">
              <h2 className="text-base font-semibold text-text mb-3 pt-4 flex items-baseline gap-2">
                <span className="text-[13px] font-medium text-accent tabular-nums">
                  12.
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
