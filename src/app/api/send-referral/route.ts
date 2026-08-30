import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Al Rauf International Quran Academy <onboarding@resend.dev>";
const NOTIFY = process.env.NOTIFICATION_EMAIL || "alraufquranacademy1@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      referrerName,
      referrerEmail,
      friendName,
      friendContact,
      message,
    } = body;

    // Validate required fields
    if (!referrerName || !referrerEmail || !friendName || !friendContact) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // 1. Notify the academy
    try {
      await resend.emails.send({
        from: FROM,
        to: NOTIFY,
        subject: `🎁 New Student Referral — from ${referrerName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
            <div style="background: #0f3d2e; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #f59e0b; margin: 0; font-size: 22px;">New Referral Submission</h1>
              <p style="color: #d6d3d1; margin: 4px 0 0; font-size: 14px;">Al Rauf International Quran Academy Referral Program</p>
            </div>
            <div style="background: #ffffff; padding: 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
              <h3 style="color: #0f3d2e; margin-top: 0;">Referrer Information:</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; width: 40%;"><strong>Referrer Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4;">${referrerName}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4; color: #78716c;"><strong>Referrer Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4;"><a href="mailto:${referrerEmail}">${referrerEmail}</a></td></tr>
              </table>

              <h3 style="color: #0f3d2e;">Referred Friend Details:</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; width: 40%;"><strong>Friend's Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4;">${friendName}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4; color: #78716c;"><strong>Friend's Contact:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4;">${friendContact}</td></tr>
                <tr><td style="padding: 8px 0; color: #78716c;"><strong>Personal Message:</strong></td><td style="padding: 8px 0;">${message || "No message provided."}</td></tr>
              </table>

              <div style="margin-top: 20px; padding: 12px 16px; background: #fefce8; border-left: 4px solid #f59e0b; border-radius: 4px; font-size: 13px; color: #854d0e;">
                🌟 <strong>Action:</strong> Reach out to <strong>${friendName}</strong> with 3 Free Trial Classes and note that <strong>${referrerName}</strong> will receive a 10% discount on their next month once enrolled.
              </div>
            </div>
          </div>
        `,
      });
    } catch (notifyErr) {
      console.warn("[send-referral] Admin notify warning:", notifyErr);
    }

    // 2. Send friendly confirmation to the referrer
    try {
      await resend.emails.send({
        from: FROM,
        to: referrerEmail,
        subject: "Thank You for Your Referral! 🎁 — Al Rauf International Quran Academy",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917; line-height: 1.6;">
            <div style="background: #0f3d2e; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #f59e0b; margin: 0 0 6px; font-size: 24px;">Al Rauf International Quran Academy</h1>
              <p style="color: #d6d3d1; margin: 0; font-size: 14px;">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            </div>
            <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #0f3d2e; margin: 0 0 16px;">Jazak Allah Khayran, ${referrerName}! 🌙</h2>
              <p style="color: #44403c; margin: 0 0 16px; font-size: 15px;">
                Thank you so much for referring <strong>${friendName}</strong> to Al Rauf International Quran Academy. Helping others connect with the Holy Quran is a blessed act with continuous reward (Sadaqah Jariyah).
              </p>

              <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 18px 20px; margin: 24px 0;">
                <p style="margin: 0; font-weight: bold; color: #065f46; font-size: 15px;">🎁 Your 10% Referral Discount</p>
                <p style="margin: 8px 0 0; color: #047857; font-size: 14px;">
                  We will contact <strong>${friendName}</strong> to offer them 3 free trial classes. As soon as they complete their enrollment, <strong>both of you will receive 10% off</strong> your next month's tuition!
                </p>
              </div>

              <p style="color: #64748b; font-size: 13px; margin: 24px 0 0;">
                If you have any questions or would like to check on the status of your referral, feel free to reply to this email or contact us at <a href="mailto:${NOTIFY}" style="color: #0f3d2e;">${NOTIFY}</a>.
              </p>
              
              <p style="color: #44403c; margin: 20px 0 0; font-size: 14px;">
                Warmest regards,<br/>
                <strong style="color: #0f3d2e;">The Al Rauf International Quran Academy Team</strong>
              </p>
            </div>
            <div style="text-align: center; padding: 16px; color: #a8a29e; font-size: 12px;">
              © ${new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.
            </div>
          </div>
        `,
      });
    } catch (referrerErr) {
      console.warn("[send-referral] Referrer email warning:", referrerErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-referral] Error:", err);
    return NextResponse.json(
      { error: "Failed to submit referral. Please try again." },
      { status: 500 }
    );
  }
}
