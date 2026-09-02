import LegalPage from "@/components/LegalPage";

const SECTIONS = [
  {
    heading: "1. Eligibility",
    body: [
      "You must be at least 18 years of age to participate in the SSR. By accessing or using our Services, you represent and warrant that you are at least 18 years of age and possess the legal capacity to enter into these Terms.",
      "If you are under 18 years old, you may only access and use our Services with the involvement of a parent or legal guardian. We assume that all transactions and interactions are conducted with the consent of your parent/guardian."
    ]
  },
  {
    heading: "2. Registration",
    body: [
      "To participate in the SSR competition, you may be required to register on our website and provide certain information. You agree to provide accurate, current and complete information during the registration process and to update such information to keep it accurate, current and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Parents/Guardians of minors must ensure that all provided information is accurate."
    ]
  },
  {
    heading: "3. Pricing and Payment",
    body: [
      "All prices listed for registrations, event entries, tickets or merchandise are in Singapore Dollars (SGD) unless stated otherwise. SSR reserves the right to adjust pricing at any time without prior notice. Full payment must be completed via our designated online payment gateways before any registration, entry or order is processed and confirmed."
    ]
  },
  {
    heading: "4. Shipping and Delivery",
    body: [
      "Physical items, merchandise, event kits or entry passes purchased through our Services will be shipped to the delivery address provided during checkout. Shipping fees and estimated timelines are calculated at checkout. SSR is not responsible for shipping delays caused by third-party delivery carriers, postal services, customs clearance or inaccurate address information provided by the user."
    ]
  },
  {
    heading: "5. Risk of Product Loss and Confiscation",
    body: [
      "All physical items purchased from SSR are made pursuant to a shipment contract. The risk of loss, damage and title for such items pass to you upon our delivery to the shipping carrier. SSR shall not be held liable for any items lost, damaged, delayed, or confiscated by customs or government authorities during transit."
    ]
  },
  {
    heading: "6. Order Cancellation and Amendment",
    body: [
      "Once an order, merchandise purchase, or event registration is submitted and paid for, it is final. SSR does not permit order cancellations, detail modifications, or transfer requests once a transaction is confirmed."
    ]
  },
  {
    heading: "7. Exchange and Refund",
    body: [
      "All sales, registrations, ticket purchases and merchandise orders are final. SSR strictly does not accept requests for refunds, exchanges, returns or credit notes under any circumstances, including but not limited to participant non-attendance, scheduling conflicts, weather disruptions, event alterations, or a change of mind."
    ]
  },
  {
    heading: "8. Code of Conduct",
    body: [
      "You agree to use the Services in accordance with all applicable laws and regulations and in a manner that does not infringe or violate the rights of others, or that is harmful, fraudulent, deceptive, or offensive. You may not use the Services to engage in any illegal, harmful, or unauthorised activity, including but not limited to:",
      [
        "Violating any applicable laws or regulations;",
        "Interfering with or disrupting the Services or servers or networks connected to the Services;",
        "Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity;",
        "Collecting or storing personal data about other users without their explicit consent;",
        "Transmitting spam, chain letters or other unsolicited communications; or",
        "Engaging in any other conduct that SSR, in its sole discretion, determines to be inappropriate or harmful."
      ]
    ]
  },
  {
    heading: "9. Assumption of Risk and Waiver",
    body: [
      "By participating in SSR events, you acknowledge that water sports and regattas involve inherent risks, including physical injury, property damage, or death. You voluntarily assume all risks associated with your participation and waive any and all claims against SSR, its organisers, staff, volunteers, or representatives."
    ]
  },
  {
    heading: "10. Intellectual Property",
    body: [
      "All content, materials and intellectual property rights associated with the Services — including text, graphics, logos, images, audio clips, video clips and software — are owned or licensed by SSR and are protected by copyright, trademark, patent, trade secret and other intellectual property laws. You may not modify, reproduce, distribute, display, or create derivative works of any content or materials provided through the Services without prior written consent from SSR."
    ]
  },
  {
    heading: "11. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, SSR and its organizers, staff, volunteers and representatives shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:",
      [
        "Your access to or use of or inability to access or use the Services;",
        "Any conduct or content of any third party on or related to the Services; or",
        "Unauthorised access, use or alteration of your transmissions or content."
      ]
    ]
  },
  {
    heading: "12. Indemnification",
    body: [
      "You agree to indemnify and hold SSR and its organisers, staff, volunteers and representatives harmless from any claims, losses, damages, liabilities, costs or expenses (including reasonable legal fees) arising out of or relating to:",
      [
        "Your access to or use of the Services;",
        "Your participation in the event;",
        "Your violation of these Terms; or",
        "Your violation of any rights of any third party."
      ],
      "This applies to all claims related to personal injury, property damage and legal fees."
    ]
  },
  {
    heading: "13. Media Consent",
    body: [
      "By participating in SSR events, you consent to the capture and use of your image, voice and likeness in photos and videos for promotional, marketing and media purposes. Parents and legal guardians of minors consent to this on behalf of their children. SSR retains all rights to use and distribute these materials indefinitely without compensation to participants."
    ]
  },
  {
    heading: "14. Governing Law and Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Singapore to resolve any disputes arising out of or relating to these Terms or the Services."
    ]
  },
  {
    heading: "15. Changes to Terms",
    body: [
      "SSR reserves the right to modify or update these Terms at any time without prior notice by posting the revised Terms on our website. Your continued use of the Services after any such changes constitutes your acceptance of the revised Terms. You are responsible for regularly reviewing these Terms."
    ]
  },
  {
    heading: "16. Contact Us",
    body: [
      "If you have any questions about these Terms, please contact us at our official contact page."
    ]
  }
];

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Thank you for visiting Singapore Sea Regatta (referred to as, “SSR”, “we,” “us,” or “our”) website. These Terms of Use (“Terms”) govern your access to and use of the SSR website, services and events (collectively, the “Services”). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services."
      sections={SECTIONS}
      effectiveDate="August 1, 2026"
    />
  );
}