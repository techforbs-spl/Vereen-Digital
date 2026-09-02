export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Vereen Digital",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@vereendigital.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/vereendigital/30min",
};
