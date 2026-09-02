export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Vereen Digital",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "brandon@vereendigital.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/vereendigitall/30min",
};
