import { useEffect } from "react";
import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const professional = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "May 29, 2026",
    expires: "May 29, 2029",
    validation: "112df6416b594adbb7765e2f784ad05e",
    validateUrl: "https://aws.amazon.com/verification",
    credlyId: "98b80acb-5dfe-4d49-b803-781f2ab3a37d",
    credlyUrl:
      "https://www.credly.com/badges/98b80acb-5dfe-4d49-b803-781f2ab3a37d/public_url",
    pdfPath: "/certs/AWS_CCP.pdf",
    color: "#FF9900",
  },
  {
    id: "python-pcep",
    name: "Certified Entry-Level Python Programmer (PCEP)",
    issuer: "OpenEDG Python Institute",
    issued: "July 16, 2026",
    expires: null, // PCEP is lifetime-valid
    validation: "AZBM.wmXM.z5uR",
    validateUrl: "https://verify.openedg.org/?id=AZBM.wmXM.z5uR",
    credlyId: "22980ce8-ac34-4aca-91d8-41f01d10c94a",
    credlyUrl:
      "https://www.credly.com/badges/22980ce8-ac34-4aca-91d8-41f01d10c94a/public_url",
    pdfPath: "/certs/PCEP.pdf",
    color: "#3776AB",
  },
];

const cocurricular = [
  {
    id: "bfm-football",
    name: "Certificate of Appreciation",
    issuer: "Brighter Future Myanmar (KBZ BFM & KBZ FC)",
    description:
      "Volunteer — Football training, donation & lunch arrangements for Hnget Aww San Social Welfare Training School, Kawhmu Township, Yangon",
    date: "September 2016",
    pdfPath: "/certs/HngetAwwSan.pdf",
    color: "#4ec9b0",
  },
  {
    id: "bfm-vaccine",
    name: "Certificate of Appreciation",
    issuer: "Brighter Future Myanmar (KBZ BFM & SSC Shwegondine Hospital)",
    description:
      "Volunteer — Hepatitis B vaccine inoculation drive, Hlegu Township",
    date: "Jul – Sep 2018",
    pdfPath: "/certs/HepatitisB.pdf",
    color: "#4ec9b0",
  },
  {
    id: "aikido",
    name: "Certificate of Completion",
    issuer: "Yangon International Hotel Aikido Dojo (M.A.A)",
    description: "Successfully completed the TTC Aikido Summer Camp",
    date: "Mar 15 – Apr 4, 2019",
    pdfPath: "/certs/Aikido.pdf",
    color: "#569cd6",
  },
  {
    id: "burmese-academic",
    name: "Certificate of Commendation (ဂုဏ်ပြုမှတ်တမ်းလွှာ)",
    issuer: "National Education Department, Myanmar",
    description: "Academic commendation — school-level award",
    date: "2018 – 2019",
    pdfPath: "/certs/PyithuNiTi.pdf",
    color: "#dcdcaa",
  },
  {
    id: "sp-rpa-hackathon",
    name: "Certificate of Achievement",
    issuer: "SimplifyNext & UiPath Community",
    description: "Finalist — SP RPA Hackathon 2024",
    date: "11 April 2024",
    pdfPath: "/certs/SimplifyNext.pdf",
    color: "#c586c0",
  },
];

// ─── Animation variant ────────────────────────────────────────────────────────

const cardVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.3 },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeader = ({ children }) => (
  <h2 className="certs-section-header">{children}</h2>
);

const CredlyCard = ({ cert }) => (
  <motion.div
    custom={0}
    initial="hidden"
    animate="visible"
    variants={cardVariant}
    className="cert-card credly-card"
    style={{ "--cert-color": cert.color }}
  >
    <div className="credly-badge">
      <div
        data-iframe-width="120"
        data-iframe-height="210"
        data-share-badge-id={cert.credlyId}
        data-share-badge-host="https://www.credly.com"
      />
    </div>

    <div className="cert-info">
      <div className="cert-name">{cert.name}</div>
      <div className="cert-issuer">{cert.issuer}</div>

      <div className="cert-meta">
        <span className="cert-meta-row">
          {"// issued: "}
          <span className="value-green">{cert.issued}</span>
        </span>

        <span className="cert-meta-row">
          {"// expires: "}
          <span className="value-orange">{cert.expires ?? "no expiry"}</span>
        </span>

        {cert.validation && (
          <span className="cert-meta-row">
            {"// validation: "}
            <span className="value-blue">{cert.validation}</span>
          </span>
        )}
      </div>

      <div className="cert-links">
        <a
          href={cert.credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          View on Credly ↗
        </a>
        <a
          href={cert.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          View Certificate ↗
        </a>
        {cert.validateUrl && (
          <a
            href={cert.validateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link cert-link--validate"
          >
            Validate ↗
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const CoCurricularCard = ({ cert, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariant}
    className="cert-card cocu-card"
    style={{ "--cert-color": cert.color }}
  >
    <div className="cocu-header">
      <span className="cocu-name">{cert.name}</span>
      <span className="cocu-date">{`// ${cert.date}`}</span>
    </div>
    <div className="cocu-issuer">{cert.issuer}</div>
    <div className="cocu-description">{cert.description}</div>
    <a
      href={cert.pdfPath}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-link"
    >
      View Certificate ↗
    </a>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const Certs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="certs-page"
    >
      <div className="certs-header">
        <h1>$ cat certs.log</h1>
        <p>{"// professional certifications · co-curricular achievements"}</p>
      </div>

      <section className="certs-section">
        <SectionHeader>professional</SectionHeader>
        {professional.map((cert) => (
          <CredlyCard key={cert.id} cert={cert} />
        ))}
      </section>

      <section className="certs-section">
        <SectionHeader>co-curricular</SectionHeader>
        {cocurricular.map((cert, i) => (
          <CoCurricularCard key={cert.id} cert={cert} index={i} />
        ))}
      </section>
    </motion.div>
  );
};

export default Certs;
