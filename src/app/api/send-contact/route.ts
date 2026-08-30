import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Al Rauf International Quran Academy <onboarding@resend.dev>";
const NOTIFY = process.env.NOTIFICATION_EMAIL || "alraufquranacademy1@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Notify the academy
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      subject: `✉️ New Contact Message from ${name} ${subject ? `— ${subject}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
          <div style="background: #0f3d2e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 22px;">New Contact Message</h1>
            <p style="color: #d6d3d1; margin: 4px 0 0; font-size: 14px;">Al Rauf International Quran Academy</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; width: 30%; font-size: 14px;"><strong>Sender</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;"><a href="mailto:${email}">${email}</a></td></tr>
              ${subject ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Subject</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${subject}</td></tr>` : ""}
            </table>
            <div style="background: #fafaf9; border-left: 4px solid #145c42; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px; font-weight: bold; color: #0f3d2e; font-size: 14px;">Message Content:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #292524; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 0; font-size: 13px; color: #16a34a; font-weight: bold;">⏰ Please respond to this inquiry within 24 hours.</p>
          </div>
        </div>
      `,
    });

    // 2. Auto-responder to user
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your message — Al Rauf International Quran Academy 🌙",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
          <div style="background: #0f3d2e; padding: 28px 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0 0 6px; font-size: 24px;">Al Rauf International Quran Academy</h1>
            <p style="color: #d6d3d1; margin: 0; font-size: 14px;">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          </div>
          <div style="background: #ffffff; padding: 28px 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0f3d2e; margin: 0 0 14px;">As-salamu alaykum, ${name}! 👋</h2>
            <p style="color: #44403c; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out to <strong>Al Rauf International Quran Academy</strong>. We have received your inquiry and our support team will review your message.
            </p>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #166534;">⏰ Response Time</p>
              <p style="margin: 6px 0 0; color: #15803d; font-size: 14px; line-height: 1.5;">
                We typically respond to all messages within <strong>24 hours</strong>.
              </p>
            </div>
            <p style="color: #44403c; line-height: 1.6; font-size: 14px;">
              If your inquiry is urgent or related to an ongoing class, you can also reach us via email at <a href="mailto:${NOTIFY}" style="color: #0f3d2e; font-weight: bold;">${NOTIFY}</a>.
            </p>
            <p style="color: #44403c; margin: 24px 0 0; line-height: 1.7;">
              Jazak Allah Khayran,<br/>
              <strong style="color: #0f3d2e;">The Al Rauf International Quran Academy Support Team</strong>
            </p>
          </div>
          <div style="text-align: center; padding: 14px; color: #a8a29e; font-size: 12px;">
            © ${new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-contact] Error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
