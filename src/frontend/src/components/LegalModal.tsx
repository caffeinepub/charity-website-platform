import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export type LegalType = "privacy" | "terms" | "registration" | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const legalContent: Record<
  Exclude<LegalType, null>,
  { title: string; sections: { heading: string; body: string }[] }
> = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "We collect personal information that you voluntarily provide when you contact us, donate, or sign up to volunteer. This may include your name, email address, postal address, and phone number. We also collect non-personal data such as browser type and pages visited to improve our website experience.",
      },
      {
        heading: "2. How We Use Your Information",
        body: "Your information is used solely to respond to enquiries, process donations, coordinate volunteer activities, and send you updates about our work — where you have given consent. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
      },
      {
        heading: "3. Data Retention",
        body: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Donor records are retained for seven years in accordance with UK charity accounting regulations.",
      },
      {
        heading: "4. Your Rights",
        body: "Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at privacy@saidishemafoundation.org.",
      },
      {
        heading: "5. Cookies",
        body: "Our website uses essential cookies to ensure basic functionality. We do not use tracking or advertising cookies without your explicit consent. You may disable cookies in your browser settings at any time.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website. We reserve the right to update these terms at any time without prior notice.",
      },
      {
        heading: "2. Use of Content",
        body: "All content on this website — including text, images, logos, and graphics — is the property of Saidi Shema Foundation and is protected by copyright law. You may not reproduce, distribute, or use any content without prior written permission, except for personal, non-commercial use.",
      },
      {
        heading: "3. Donations",
        body: "All donations made through this website are voluntary and non-refundable unless an error has occurred in processing. Saidi Shema Foundation is a registered charity and all eligible donations may qualify for Gift Aid. Zakat and Sadaqah receipts are provided upon request.",
      },
      {
        heading: "4. Limitation of Liability",
        body: "Saidi Shema Foundation makes every effort to ensure the accuracy of information on this website but accepts no liability for errors or omissions. We are not responsible for the content of external websites linked from this site.",
      },
      {
        heading: "5. Governing Law",
        body: "These terms are governed by the laws of England and Wales. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      },
    ],
  },
  registration: {
    title: "Charity Registration Details",
    sections: [
      {
        heading: "Registered Charity",
        body: "Saidi Shema Foundation is a registered charity in England and Wales. Charity Registration Number: SSF-2009-UK. We are regulated by the Charity Commission for England and Wales and operate in full compliance with the Charities Act 2011.",
      },
      {
        heading: "Registered Address",
        body: "Saidi Shema Foundation, 12 Mercy Lane, London, EC1A 1BB, United Kingdom. Company Registration Number (if applicable): 09876543.",
      },
      {
        heading: "Governance",
        body: "The charity is governed by a Board of Trustees who serve in a voluntary capacity. Our annual reports and accounts are filed with the Charity Commission and are publicly available. We adhere to the Charity Governance Code and the Fundraising Regulator's Code of Fundraising Practice.",
      },
      {
        heading: "Zakat & Sadaqah Compliance",
        body: "Saidi Shema Foundation follows established Islamic guidelines for Zakat disbursement. All Zakat funds are directed to eligible recipients as defined under Shariah. Donors receive detailed receipts confirming the classification and use of their contributions.",
      },
    ],
  },
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;
  const content = legalContent[type];

  return (
    <Dialog
      open={!!type}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            {content.title}
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            Last updated: January 2026
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4 mt-2">
          <div className="space-y-6 pb-4">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">
                  {section.heading}
                </h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
