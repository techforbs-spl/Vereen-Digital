import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website, whatToGrow } = body;

    // Validate required fields
    if (!name || !email || !whatToGrow) {
      return NextResponse.json(
        { error: "Name, email, and inquiry details are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL ||
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      siteConfig.email ||
      "brandon@vereendigital.com";

    const companyName = siteConfig.name || "Vereen Digital";
    const subject = `New Inquiry: ${name} (${companyName})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f7ec; color: #182018; margin: 0; padding: 30px 20px; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(24, 32, 24, 0.12); padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
            .header { border-bottom: 2px solid #89BC30; padding-bottom: 20px; margin-bottom: 24px; }
            .title { font-size: 22px; font-weight: 700; color: #182018; margin: 0; }
            .badge { display: inline-block; background: #f0f7e4; color: #6f9925; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
            .row { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096; font-weight: 700; margin-bottom: 4px; }
            .value { font-size: 15px; color: #182018; line-height: 1.5; }
            .value a { color: #89BC30; text-decoration: none; font-weight: 600; }
            .message-box { background: #f3f7ec; border-radius: 10px; padding: 16px; border-left: 4px solid #89BC30; font-size: 14px; line-height: 1.6; color: #182018; white-space: pre-wrap; }
            .footer { margin-top: 30px; border-top: 1px solid rgba(24, 32, 24, 0.08); padding-top: 18px; font-size: 12px; color: #a0aec0; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1 class="title">New Growth Inquiry</h1>
              <span class="badge">Inbound Lead · ${companyName}</span>
            </div>
            
            <div class="row">
              <div class="label">Client Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>

            <div class="row">
              <div class="label">Business Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="row">
              <div class="label">Website / Company URL</div>
              <div class="value">
                ${
                  website
                    ? `<a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank">${website}</a>`
                    : '<span style="color: #a0aec0;">Not provided</span>'
                }
              </div>
            </div>

            <div class="row">
              <div class="label">What They Want to Grow</div>
              <div class="message-box">${whatToGrow}</div>
            </div>

            <div class="footer">
              Sent via ${companyName} website inquiry form on ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `;

    // 1. Try Resend if API Key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL ||
        `${companyName} <onboarding@resend.dev>`;

      await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, method: "resend" });
    }

    // 2. Try SMTP / Nodemailer (Hostinger, Gmail, Custom Domain)
    const hasSmtp =
      Boolean(process.env.SMTP_USER) &&
      Boolean(process.env.SMTP_PASS) &&
      process.env.SMTP_PASS!.trim().length > 0 &&
      process.env.SMTP_USER !== "your-email@yourdomain.com" &&
      process.env.SMTP_PASS !== "your-hostinger-password";

    if (hasSmtp) {
      const smtpUser = process.env.SMTP_USER!.trim();
      const smtpPass = process.env.SMTP_PASS!.trim();
      const smtpHost = (
        process.env.SMTP_HOST ||
        (smtpUser.includes("@gmail.com") ? "smtp.gmail.com" : "smtp.hostinger.com")
      ).trim();
      const smtpPort = parseInt(process.env.SMTP_PORT || "465");
      const isSecure = smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: isSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const senderEmail = (process.env.SMTP_FROM || smtpUser).trim();

      await transporter.sendMail({
        from: `"${companyName}" <${senderEmail}>`,
        to: recipientEmail,
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, method: "smtp" });
    }

    // 3. Fallback / Development mode logging
    console.log("------------------------------------------");
    console.log("📧 NEW CONTACT FORM INQUIRY RECEIVED:");
    console.log(`To: ${recipientEmail}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Website: ${website}`);
    console.log(`Message: ${whatToGrow}`);
    console.log(
      "Note: Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL in Vercel to receive emails."
    );
    console.log("------------------------------------------");

    return NextResponse.json({
      success: true,
      method: "dev-log",
      message:
        "Inquiry captured. Configure SMTP in Vercel to receive emails directly.",
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
