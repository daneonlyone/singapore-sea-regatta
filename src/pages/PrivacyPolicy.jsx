import LegalPage from "@/components/LegalPage";

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: [
      "We may collect the following types of personal data:",
      [
        "When you register for Singapore Sea Regatta events, races or competitions;",
        "When you purchase tickets, event passes or merchandise through our website;",
        "When you browse or use any of our services on our websites;",
        "When you accept cookies or tracking technologies on your devices;",
        "When you interact with us via phone calls, instant messaging, face-to-face meetings, social media platforms and emails;",
        "When you are contacted by, and respond to, our organising committees, staff or representatives;",
        "During photo, audio or video capturing at our events; or",
        "When you submit your personal data to us for any other reasons."
      ],
      "If you provide personal data relating to a third party (e.g., team members or minors), you represent and warrant that you have obtained the explicit consent of that third party (or parent/guardian) to share their data with us for the purposes outlined in this policy. You should ensure all personal data submitted is accurate and complete."
    ]
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use your personal data for the following purposes:",
      [
        "To process event registrations, manage race logistics, publish schedules, results and issue event passes or purchased merchandise;",
        "To respond to inquiries, provide participant support and manage emergency situations during events;",
        "To facilitate media coverage, marketing and promotional activities related to the SSR;",
        "To analyse website performance, improve user experience and enhance regatta operations;",
        "To process payments and prevent fraudulent transactions; or",
        "To comply with legal obligations, regulatory requirements or law enforcement requests."
      ]
    ]
  },
  {
    heading: "3. Sharing Your Information",
    body: [
      "We may share your personal data with trusted third parties to facilitate our operations, including:",
      [
        "Service Providers: Third-party vendors providing website hosting, payment processing, courier/shipping logistics, email communications and timing/race management. These vendors are contractually bound to keep your data secure and use it solely for specified services.",
        "Event Partners & Insurers: Co-organisers, medical personnel, and insurance providers where necessary for event safety and execution.",
        "Legal Requirements: Public authorities or courts if required by law, regulation or court order."
      ]
    ]
  },
  {
    heading: "4. Third-Party Links & Analytics",
    body: [
      "The SSR website may contain links to third-party websites. SSR is not responsible for the privacy practices, security or content of external sites. We encourage you to review their policies.",
      "We use services like Google Analytics to analyse site traffic via cookies and web beacons. This data is aggregated and anonymous. You can disable cookies in your browser settings to opt out of tracking."
    ]
  },
  {
    heading: "5. Data Security & Retention",
    body: [
      "We implement reasonable administrative, technical and physical safeguards to protect your personal data against unauthorised access, collection, use, disclosure or modification. Personal data is retained only for as long as necessary to fulfill business or legal purposes. Once no longer required, data is securely destroyed or permanently anonymised."
    ]
  },
  {
    heading: "6. Your Rights (Access, Correction, & Opt-Out)",
    body: [
      "Under the PDPA, you have the right to:",
      [
        "Request access to your personal data held by us;",
        "Request corrections to inaccurate or incomplete data; or",
        "Withdraw consent for promotional communications or specific data processing activities."
      ],
      "To exercise these rights, please contact us via the contact details below."
    ]
  },
  {
    heading: "7. Changes to This Policy",
    body: [
      "SSR reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. Continued use of our Services constitutes acceptance of the updated policy."
    ]
  },
  {
    heading: "8. Contact Us",
    body: [
      "For questions, feedback, or requests regarding your personal data and PDPA rights, please reach out to us at our official contact page."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy outlines how your Personal Data will be handled and managed in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. This policy describes how Singapore Sea Regatta (referred to as “SSR”, “we,” “us,” or “our”) collects, uses and discloses your personal information when you interact with us through our website, register for our events, purchase products or engage with our services."
      sections={SECTIONS}
      effectiveDate="August 1, 2026"
    />
  );
}