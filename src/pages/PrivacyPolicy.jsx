import LegalPage from "@/components/LegalPage";

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: [
      "We may collect the following types of personal data:",
      [
        "When you register for the Singapore Sea Regatta events;",
        "When you browse and/or use any of our services on our websites;",
        "When you accept cookies on your devices;",
        "When you interact with us via phone calls, instant messaging, face-to-face meetings, social media platforms, and emails;",
        "When you are contacted by, and respond to, our organising committees;",
        "During photo or video capturing at events; or",
        "When you submit your personal data to us for any other reasons."
      ],
      "If you provide personal data relating to a third party to us, you represent that you have obtained the consent of the third party to provide us with their personal data for the respective purposes mentioned in this policy.",
      "You should ensure that all personal data submitted to us is accurate and complete."
    ]
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your personal data for the following purposes:",
      [
        "To process your registration for the SSR and to provide you with important information about the competition, such as schedule updates and race results;",
        "To respond to your inquiries and requests and to offer you race-related support;",
        "To enhance our website and the SSR experience;",
        "To send you promotional materials about the SSR and other events or services that we offer;",
        "Where necessary, for any investigation or proceedings; or",
        "To comply with applicable laws and regulations."
      ]
    ]
  },
  {
    heading: "Sharing Your Information",
    body: [
      "We may share your personal data with third-party vendors who provide us with services, such as website hosting, email marketing, and event management. These vendors are obligated to use your information only for the purpose of providing these services.",
      "We may also disclose your personal data if we are required to do so by law or if we believe that such disclosure is necessary to protect our rights, safety, or property, as well as those of others."
    ]
  },
  {
    heading: "Links to Other Websites",
    body: [
      "The SSR website may contain links to external websites that we believe may be of interest to our users. However, these websites are operated and maintained by independent entities over which we have no control.",
      "Once you navigate to an external website through a link provided on our website, you are subject to the terms of use and privacy policies of that external website. We are not responsible for the content, accuracy, or security of any external website.",
      "We encourage you to review the Privacy Policy of any external website you visit before providing any personal information."
    ]
  },
  {
    heading: "Terms of Use",
    body: [
      "In addition to this Privacy Policy, we encourage you to review our Terms of Use, which establish the permitted uses, disclaimers of responsibility, and limitations of liability that govern your access to and use of our website."
    ]
  },
  {
    heading: "Your Choices",
    body: [
      "You can opt out of receiving promotional emails from us, as well as request to access or delete your personal information by contacting us at the email address provided below."
    ]
  },
  {
    heading: "Third Party Web Analytics",
    body: [
      "We may use third party web analytics services, such as Google Analytics, to analyse how visitors use our websites. These service providers use technologies such as cookies, web server logs and web beacons to collect information (including IP address) for analytical purposes. However, we do not combine this information with personally identifiable information. You can prevent analytical tools from recognizing you on return visits to our websites by disabling cookies in your browser settings.",
      "More information on the handling of user data by Google can be found in the Google Privacy Policy."
    ]
  },
  {
    heading: "Data Security",
    body: [
      "We take measures to protect your personal data from unauthorized access, use, or disclosure. We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, and as permitted by law. Personal data that is no longer needed will be securely destroyed or anonymized."
    ]
  },
  {
    heading: "Changes to This Privacy Policy",
    body: [
      "We reserve the right to change or update this policy periodically, and any such changes will become effective when we post the revised policy on our website. You can check the effective date posted at the bottom of this policy to stay informed about any revisions. We encourage you to read this policy whenever you visit our website to ensure that you remain up-to-date with any changes."
    ]
  },
  {
    heading: "Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at hello@sgsearegatta.com."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy outlines how your Personal Data will be handled and managed in accordance with the Personal Data Protection Act 2012 (PDPA). The PDPA aims to protect the personal data of individuals. This policy describes how Singapore Sea Regatta (referred to as “SSR”, “we”, “us”, or “our”) collects, uses, and discloses your personal information when you interact with us through our website, register for our events, or engage with our services."
      sections={SECTIONS}
      effectiveDate="1 October 2024"
    />
  );
}