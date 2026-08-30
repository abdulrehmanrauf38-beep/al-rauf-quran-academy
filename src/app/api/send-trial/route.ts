import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Al Rauf International Quran Academy <onboarding@resend.dev>";
const NOTIFY = process.env.NOTIFICATION_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      country,
      course,
      studentAge,
      preferredTime,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !country || !course || !studentAge) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Notify the academy
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      subject: `📚 New Free Trial Request — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
          <div style="background: #0f3d2e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 22px;">New Free Trial Booking</h1>
            <p style="color: #d6d3d1; margin: 4px 0 0; font-size: 14px;">Al Rauf International Quran Academy</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; width: 40%; font-size: 14px;"><strong>Full Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>WhatsApp / Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${phone}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Country</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${country}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Preferred Course</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${course}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 14px;"><strong>Student Age</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${studentAge}</td></tr>
              <tr><td style="padding: 10px 0; color: #78716c; font-size: 14px;"><strong>Preferred Class Time</strong></td><td style="padding: 10px 0; font-size: 14px;">${preferredTime || "Not specified"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 12px 16px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #15803d;">⏰ Please contact this student within 24 hours to schedule their free trial class.</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Confirmation to student
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Your Free Trial Is Confirmed — Al Rauf International Quran Academy 🌙",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
          <div style="background: #0f3d2e; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0 0 8px; font-size: 24px;">Al Rauf International Quran Academy</h1>
            <p style="color: #d6d3d1; margin: 0; font-size: 14px;">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          </div>
          <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0f3d2e; margin: 0 0 16px;">As-salamu alaykum, ${fullName}! 👋</h2>
            <p style="color: #44403c; line-height: 1.7; margin: 0 0 16px;">
              Thank you for booking your free trial with <strong>Al Rauf International Quran Academy</strong>. We're excited to begin this Quranic journey with you!
            </p>
            <div style="background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
              <p style="margin: 0; font-weight: bold; color: #92400e;">📅 What happens next?</p>
              <p style="margin: 8px 0 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                We'll contact you within <strong>24 hours</strong> to schedule your first free trial class. Our team will reach out via the email or WhatsApp number you provided.
              </p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="background: #f5f5f4;"><td style="padding: 10px 12px; font-size: 13px; color: #78716c; width: 45%;"><strong>Course Requested</strong></td><td style="padding: 10px 12px; font-size: 13px;">${course}</td></tr>
              <tr><td style="padding: 10px 12px; font-size: 13px; color: #78716c;"><strong>Preferred Time</strong></td><td style="padding: 10px 12px; font-size: 13px;">${preferredTime || "Flexible"}</td></tr>
            </table>
            <p style="color: #44403c; line-height: 1.7; font-size: 14px;">
              If you have any urgent questions, feel free to reach us at <a href="mailto:${NOTIFY}" style="color: #0f3d2e;">${NOTIFY}</a>.
            </p>
            <p style="color: #44403c; margin: 24px 0 0; line-height: 1.7;">
              Jazak Allah Khayran,<br/>
              <strong style="color: #0f3d2e;">The Al Rauf International Quran Academy Team</strong>
            </p>
          </div>
          <div style="text-align: center; padding: 16px; color: #a8a29e; font-size: 12px;">
            © ${new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-trial] Error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
