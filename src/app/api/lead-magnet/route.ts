import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Al Rauf International Quran Academy <onboarding@resend.dev>";
const NOTIFY = process.env.NOTIFICATION_EMAIL || "alraufquranacademy1@gmail.com";
const BASE_URL = "https://globalquraninstitute.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source = "Website Lead Magnet" } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const chartUrl = `${BASE_URL}/resources/arabic-alphabet-chart`;

    // 1. Notify the academy
    try {
      await resend.emails.send({
        from: FROM,
        to: NOTIFY,
        subject: `📥 New Lead Magnet Download — ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
            <div style="background: #0f3d2e; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #f59e0b; margin: 0; font-size: 20px;">New Arabic Alphabet Chart Download</h1>
              <p style="color: #d6d3d1; margin: 4px 0 0; font-size: 14px;">Al Rauf International Quran Academy Lead Magnet</p>
            </div>
            <div style="background: #ffffff; padding: 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="font-size: 15px; margin: 0 0 16px;">
                A new user just requested the Free Arabic Alphabet Chart:
              </p>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; width: 35%;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f5f5f4;"><strong><a href="mailto:${email}">${email}</a></strong></td></tr>
                <tr><td style="padding: 8px 0; color: #78716c;"><strong>Source:</strong></td><td style="padding: 8px 0;">${source}</td></tr>
                <tr><td style="padding: 8px 0; color: #78716c;"><strong>Date:</strong></td><td style="padding: 8px 0;">${new Date().toLocaleString()}</td></tr>
              </table>
              <div style="padding: 12px 16px; background: #fefce8; border-left: 4px solid #f59e0b; border-radius: 4px; font-size: 13px; color: #854d0e;">
                💡 <em>Tip: Follow up with this subscriber in 2-3 days with tips for learning Noorani Qaida and an invitation to 3 free trial classes.</em>
              </div>
            </div>
          </div>
        `,
      });
    } catch (notifyErr) {
      console.warn("[lead-magnet] Notification email warning:", notifyErr);
    }

    // 2. Send the chart link to the subscriber
    try {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Your Free Arabic Alphabet Chart Is Ready! 📖 — Al Rauf International Quran Academy",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917; line-height: 1.6;">
            <div style="background: #0f3d2e; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #f59e0b; margin: 0 0 6px; font-size: 24px;">Al Rauf International Quran Academy</h1>
              <p style="color: #d6d3d1; margin: 0; font-size: 14px;">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            </div>
            <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #0f3d2e; margin: 0 0 16px; font-size: 20px;">As-salamu alaykum! 🌙</h2>
              <p style="color: #44403c; margin: 0 0 16px; font-size: 15px;">
                Thank you for requesting our <strong>Free Arabic Alphabet Chart</strong>. This reference sheet covers all 28 Arabic letters with correct English transliteration, Makhārij (articulation points), and pronunciation keys for Quran beginners.
              </p>
              
              <!-- Direct Button -->
              <div style="text-align: center; margin: 28px 0;">
                <a href="${chartUrl}" style="background: #f59e0b; color: #0f3d2e; font-weight: bold; text-decoration: none; padding: 14px 28px; border-radius: 50px; display: inline-block; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  📥 Open &amp; Print Your Free Chart →
                </a>
              </div>

              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 24px 0;">
                <h3 style="color: #0f3d2e; margin: 0 0 8px; font-size: 15px;">💡 How to use this chart:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px;">
                  <li style="margin-bottom: 6px;">Click the button above to view the high-resolution chart.</li>
                  <li style="margin-bottom: 6px;">Use the <strong>"Print / Save PDF"</strong> button on the page to print a copy for your child or student desk.</li>
                  <li>Practice the pronunciation keys daily for 5-10 minutes.</li>
                </ul>
              </div>

              <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center;">
                <h3 style="color: #065f46; margin: 0 0 8px; font-size: 16px;">Want to practice with a live certified teacher?</h3>
                <p style="color: #047857; margin: 0 0 16px; font-size: 14px;">
                  Experience 1-on-1 personalized lessons with our patient Pakistani scholars. 
                </p>
                <a href="${BASE_URL}/book-trial" style="background: #0f3d2e; color: #ffffff; font-weight: bold; text-decoration: none; padding: 10px 22px; border-radius: 50px; display: inline-block; font-size: 14px;">
                  Book 3 Free Trial Classes →
                </a>
              </div>

              <p style="color: #64748b; font-size: 13px; margin: 24px 0 0;">
                If you have any questions, feel free to reply to this email or reach us anytime at <a href="mailto:${NOTIFY}" style="color: #0f3d2e;">${NOTIFY}</a>.
              </p>
              
              <p style="color: #44403c; margin: 20px 0 0; font-size: 14px;">
                Warm regards,<br/>
                <strong style="color: #0f3d2e;">The Al Rauf International Quran Academy Team</strong>
              </p>
            </div>
            <div style="text-align: center; padding: 16px; color: #a8a29e; font-size: 12px;">
              © ${new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.
            </div>
          </div>
        `,
      });
    } catch (subscriberErr) {
      console.warn("[lead-magnet] Subscriber email warning:", subscriberErr);
    }

    return NextResponse.json({
      success: true,
      chartUrl,
    });
  } catch (err) {
    console.error("[lead-magnet] Error:", err);
    return NextResponse.json(
      { error: "Failed to process download. Please try again." },
      { status: 500 }
    );
  }
}
