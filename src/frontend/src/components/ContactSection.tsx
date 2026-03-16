import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactEntry } from "@/hooks/useQueries";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const contactDetails = [
  { icon: Mail, label: "Email", value: "info@saidishemafoundation.org" },
  { icon: Phone, label: "Phone", value: "+256771173835" },
  {
    icon: MapPin,
    label: "Address",
    value: "12 Mercy Lane, London, UK, EC1A 1BB",
  },
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitContact, isPending } = useSubmitContactEntry();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    submitContact(
      { name: form.name, email: form.email, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
      },
    );
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Reach Out
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base">
            Have a question, want to volunteer, or explore a partnership? We
            would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Message Received — JazakAllah Khair
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Thank you for reaching out. Our team will respond within 2
                      business days, In sha Allah.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full font-body"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div>
                      <Label
                        htmlFor="name"
                        className="font-body text-sm font-medium mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        data-ocid="contact.name.input"
                        className={`font-body ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs font-body mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="font-body text-sm font-medium mb-1.5 block"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        data-ocid="contact.email.input"
                        className={`font-body ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs font-body mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="font-body text-sm font-medium mb-1.5 block"
                      >
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how you'd like to get involved, or ask us anything..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        data-ocid="contact.message.textarea"
                        className={`font-body resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-destructive text-xs font-body mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      data-ocid="contact.submit.primary_button"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full font-body py-3"
                    >
                      {isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-5">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <detail.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-0.5">
                          {detail.label}
                        </p>
                        <p className="text-foreground font-body text-sm font-medium">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-5">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-muted-foreground transition-all duration-200 hover:scale-110"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-xs mt-4 leading-relaxed">
                  Stay updated on our latest projects, Ramadan campaigns, and
                  impact stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
