import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetAccessModal from "@/components/GetAccessModal";

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
            <p className="text-[13px] text-muted">Last Updated: February 20, 2026</p>
          </div>

          {/* Intro */}
          <div className="mb-10 text-[15px] leading-[1.75] text-[rgba(230,241,242,0.65)] space-y-3">
            <p>
              This Privacy Policy describes how Makedo Inc, a California
              corporation (&ldquo;Makedo,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the VibeLive
              service (&ldquo;VibeLive&rdquo; or the &ldquo;Service&rdquo;) and
              collects, uses, and discloses information when you access or use
              the Service.
            </p>
            <p>By accessing or using VibeLive, you agree to this Privacy Policy.</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <Section id="scope" num={1} title="Scope">
              <p>
                VibeLive provides real-time video and audio communication
                infrastructure designed for developers and builders.
              </p>
              <p>This Privacy Policy applies to:</p>
              <BulletList
                items={[
                  "Developers who create accounts or integrate the Service",
                  "Visitors to our website",
                ]}
              />
              <p>
                Developers who integrate VibeLive into their own applications
                are responsible for their end users and must provide their own
                privacy policies and obtain any required consents.
              </p>
            </Section>

            <Section id="role" num={2} title="Role of Makedo">
              <p>
                When developers integrate VibeLive into their applications,
                Makedo acts as a service provider or data processor with respect
                to end-user data processed through the Service.
              </p>
              <p>
                Developers determine the purposes and means of processing such
                data and are responsible for:
              </p>
              <BulletList
                items={[
                  "Providing appropriate privacy disclosures",
                  "Obtaining legally sufficient consent from end users",
                  "Complying with applicable privacy, recording, and data protection laws",
                ]}
              />
            </Section>

            <Section id="information" num={3} title="Information We Collect">
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
                  "Developer email address",
                  "Developer authentication credentials",
                  "End-user authentication tokens and session credentials",
                ]}
              />

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                d. Cookies and Analytics
              </h3>
              <p>
                We use cookies and similar technologies for authentication,
                performance, and analytics purposes.
              </p>
              <p>
                We use Google Analytics to understand usage patterns and improve
                the Service. Google Analytics may collect information such as IP
                address, device information, and interaction data in accordance
                with its own privacy practices. You can opt out of Google
                Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </Section>

            <Section id="media" num={4} title="Media Handling">
              <p>
                As a video infrastructure provider, VibeLive routes and forwards
                real-time audio and video streams as part of normal SFU
                (Selective Forwarding Unit) operation. This transmission is
                transient — VibeLive does not analyze, store, or retain any
                media content.
              </p>
              <p>
                If developers enable recording functionality within their
                applications, recording occurs within the developer&rsquo;s
                environment and outside of Makedo&rsquo;s storage systems.
                Developers are solely responsible for obtaining legally
                sufficient consent from participants and complying with all
                applicable recording, wiretap, and privacy laws.
              </p>
            </Section>

            <Section id="how-we-use" num={5} title="How We Use Information">
              <p>We use collected information to:</p>
              <BulletList
                items={[
                  "Operate and maintain the Service",
                  "Improve performance, reliability, and security",
                  "Prevent abuse, fraud, and misuse",
                  "Provide billing and account management (including through Stripe)",
                ]}
              />
            </Section>

            <Section id="retention" num={6} title="Data Retention">
              <p>We retain data as follows:</p>
              <BulletList
                items={[
                  "IP addresses and access logs: up to 60 days",
                  "Session metadata: for the duration of an active account and up to 90 days after account termination",
                  "Analytics data: according to Google Analytics retention settings",
                ]}
              />
              <p>
                We may retain information longer if required by law or for
                legitimate business purposes such as dispute resolution or
                enforcement of agreements.
              </p>
            </Section>

            <Section id="sharing" num={7} title="Data Sharing">
              <p>We do not sell personal information.</p>
              <p>
                We do not sell or share personal information for cross-context
                behavioral advertising.
              </p>
              <p>We may share information with:</p>
              <BulletList
                items={[
                  "Service providers, such as hosting providers, Stripe for payment processing, and Google Analytics for analytics",
                  "Legal authorities if required by law",
                  "A successor entity in the event of a merger, acquisition, or corporate restructuring",
                ]}
              />
              <p>
                Service providers are authorized to use information only as
                necessary to provide services to us.
              </p>
            </Section>

            <Section id="international" num={8} title="International Users">
              <p>VibeLive operates from the United States.</p>
              <p>
                If you access the Service from outside the United States, you
                understand that your information may be transferred to and
                processed in the United States, which may have different data
                protection laws than your jurisdiction.
              </p>
            </Section>

            <Section id="security" num={9} title="Security">
              <p>
                We implement industry-standard administrative, technical, and
                organizational safeguards designed to protect information,
                including encryption in transit where appropriate.
              </p>
              <p>
                However, no method of transmission over the Internet or method
                of electronic storage can be guaranteed to be 100% secure.
              </p>
            </Section>

            <Section id="children" num={10} title="Children's Privacy">
              <p>The Service is not directed to children under the age of 13.</p>
              <p>
                We do not knowingly collect personal information from children
                under 13. If we become aware that such information has been
                collected, we will take appropriate steps to delete it.
              </p>
            </Section>

            <Section id="rights" num={11} title="Your Rights">
              <p>
                Depending on your jurisdiction, you may have rights to access,
                correct, delete, or request information about the personal
                information we collect.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                Account Closure &amp; Data Deletion
              </h3>
              <p>
                To close your account and request deletion of your data, email{" "}
                <a
                  href="mailto:contact@makedo.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  contact@makedo.com
                </a>{" "}
                with the subject line &ldquo;Account Deletion Request.&rdquo;
                Include the email address associated with your account. We will
                confirm receipt and complete the deletion within 5 business days.
              </p>
              <p>
                For any other privacy-related requests — such as accessing,
                correcting, or exporting your data — contact us at the same
                address.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                California Privacy Rights
              </h3>
              <p>
                If you are a California resident, you may have rights under the
                California Consumer Privacy Act (CCPA), including the right to
                request access to, deletion of, or information about personal
                information we collect.
              </p>
              <p>
                We will not discriminate against you for exercising your privacy
                rights.
              </p>

              <h3 className="text-[15px] font-semibold text-text mt-4 mb-2">
                European Privacy Rights
              </h3>
              <p>
                If you are located in the European Economic Area (EEA) or
                United Kingdom, you may have additional rights under the
                General Data Protection Regulation (GDPR), including the right
                to access, correct, delete, restrict processing of, or port
                your personal data. You may also have the right to object to
                processing or withdraw consent at any time.
              </p>
              <p>
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:contact@makedo.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  contact@makedo.com
                </a>
                .
              </p>
            </Section>

            <Section id="changes" num={12} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time.
              </p>
              <p>
                If we make material changes, we will update the
                &ldquo;Last Updated&rdquo; date at the top of this Policy.
              </p>
              <p>
                Continued use of the Service after updates constitutes
                acceptance of the revised Privacy Policy.
              </p>
            </Section>

            <section id="contact">
              <h2 className="text-base font-semibold text-text mb-3 pt-4 flex items-baseline gap-2">
                <span className="text-[13px] font-medium text-accent tabular-nums">
                  13.
                </span>
                Contact Information
              </h2>
              <div className="p-5 bg-[#0c0c0c] border border-white/[0.08] rounded-lg text-[15px] text-[rgba(230,241,242,0.65)]">
                <p className="mb-1">Makedo Inc</p>
                <p>
                  Email:{" "}
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
        <GetAccessModal />
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
