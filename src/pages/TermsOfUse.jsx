import LegalPage from "@/components/LegalPage";

const SECTIONS = [
  {
    heading: "Eligibility",
    body: [
      "You must be at least 18 years of age to participate in the SSR. By accessing or using our Services, you represent and warrant that you are at least 18 years of age and possess the legal capacity to enter into these Terms.",
      "If you are under 18 years old, you may only access and use our Services with the involvement of a parent/guardian. We assume that all transactions and interactions are done with the consent of your parent/guardian."
    ]
  },
  {
    heading: "Registration",
    body: [
      "To participate in the SSR competition, you may be required to register on our website and provide certain information. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Parents/Guardians of minors must ensure that all provided information is accurate."
    ]
  },
  {
    heading: "Code of Conduct",
    body: [
      "You agree to use the Services in accordance with all applicable laws and regulations and in a manner that does not infringe or violate the rights of others, or that is harmful, fraudulent, deceptive, or offensive. You may not use the Services to engage in any illegal, harmful, or unauthorized activity, including but not limited to:",
      [
        "Violating any applicable laws or regulations;",
        "Interfering with or disrupting the Services or servers or networks connected to the Services;",
        "Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity;",
        "Collecting or storing personal data about other users without their consent;",
        "Transmitting spam, chain letters, or other unsolicited communications; or",
        "Engaging in any other conduct that SSR, in its sole discretion, determines to be inappropriate or harmful."
      ]
    ]
  },
  {
    heading: "Assumption of Risk and Waiver",
    body: [
      "By participating in SSR events, you acknowledge that there are inherent risks, including physical injury, property damage, or death. You voluntarily assume all risks associated with your participation and waive any claims against SSR, its organisers, staff, volunteers or representatives."
    ]
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content, materials, and intellectual property rights associated with the Services, including but not limited to text, graphics, logos, images, audio clips, video clips, and software, are owned or licensed by SSR and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. You may not modify, reproduce, distribute, display, or create derivative works of any content or materials provided through the Services without the prior written consent of SSR."
    ]
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, SSR and its organisers, staff, volunteers and representatives shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on or related to the Services; or (iii) unauthorised access, use, or alteration of your transmissions or content."
    ]
  },
  {
    heading: "Indemnification",
    body: [
      "You agree to indemnify and hold SSR and its organisers, staff, volunteers and representatives harmless from any claims, losses, damages, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to (i) your access to or use of the Services, (ii) your participation in the event, (iii) your violation of these Terms, or (iv) your violation of any rights of any third party. This applies to all claims related to personal injury, property damage and legal fees."
    ]
  },
  {
    heading: "Media Consent",
    body: [
      "By participating in SSR events, you consent to the capture and use of your image and likeness in photos and videos for promotional purposes. Parents/Guardians of minors consent to this on behalf of their child. SSR retains all rights to use and distribute these materials without compensation."
    ]
  },
  {
    heading: "Governing Law and Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Singapore to resolve any disputes arising out of or relating to these Terms or the Services."
    ]
  },
  {
    heading: "Changes to Terms",
    body: [
      "SSR reserves the right to modify or update these Terms at any time, without prior notice, by posting the revised Terms on our website. Your continued use of the Services after any such changes constitutes your acceptance of the revised Terms. You are responsible for regularly reviewing these Terms."
    ]
  },
  {
    heading: "Contact Us",
    body: [
      "If you have any questions about these Terms, please contact us at hello@sgsearegatta.com."
    ]
  }
];

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Thank you for visiting the Singapore Sea Regatta (referred to as “SSR”, “we”, “us”, or “our”) website. These Terms of Use (“Terms”) govern your access to and use of the SSR website, services, and events (collectively, the “Services”). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services."
      sections={SECTIONS}
      effectiveDate="1 October 2024"
    />
  );
}