import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Al Rauf International Quran Academy <onboarding@resend.dev>";
const NOTIFY = process.env.NOTIFICATION_EMAIL || "alraufquranacademy1@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      studentName,
      parentEmail,
      course,
      date,
      covered,
      strengths,
      areasToPractice,
      homework,
      teacherName,
    } = body;

    // Validate required fields
    if (!studentName || !parentEmail || !course || !covered) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Student Name, Parent Email, Course, and Covered material)." },
        { status: 400 }
      );
    }

    const formattedDate = date
      ? new Date(date + "T00:00:00").toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

    const teacher = teacherName || "Al Rauf International Quran Academy Instructor";

    // 1. Send clean, structured report to the Parent Email
    try {
      await resend.emails.send({
        from: FROM,
        to: parentEmail,
        cc: [NOTIFY],
        subject: `${studentName}'s Quran Class Progress Report — Al Rauf International Quran Academy`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #1c1917; line-height: 1.6; background: #fafaf9; padding: 20px;">
            
            {/* Header */}
            <div style="background: #0f3d2e; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
              <div style="display: inline-block; width: 36px; height: 36px; line-height: 36px; border-radius: 50%; background: #f59e0b; color: #0f3d2e; font-weight: bold; font-size: 18px; margin-bottom: 8px;">R</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold;">Al Rauf International Quran Academy</h1>
              <p style="color: #f59e0b; margin: 4px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Class Progress Report</p>
            </div>

            {/* Main Content */}
            <div style="background: #ffffff; padding: 28px 24px; border: 1px solid #e7e5e4; border-top: none; border-radius: 0 0 12px 12px;">
              
              <div style="border-bottom: 2px solid #f5f5f4; padding-bottom: 18px; margin-bottom: 20px;">
                <h2 style="color: #0f3d2e; margin: 0 0 6px; font-size: 20px;">Assalamu Alaikum wa Rahmatullah,</h2>
                <p style="color: #57534e; margin: 0; font-size: 14px;">Here is the structured learning summary for <strong>${studentName}</strong>'s recent Quran class session.</p>
              </div>

              {/* Session Meta */}
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin-bottom: 22px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 4px 0; color: #64748b; width: 35%;"><strong>Student Name:</strong></td>
                    <td style="padding: 4px 0; color: #0f3d2e; font-weight: bold;">${studentName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;"><strong>Course:</strong></td>
                    <td style="padding: 4px 0; color: #1c1917; font-weight: 600;">${course}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;"><strong>Session Date:</strong></td>
                    <td style="padding: 4px 0; color: #1c1917;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;"><strong>Teacher:</strong></td>
                    <td style="padding: 4px 0; color: #1c1917;">${teacher}</td>
                  </tr>
                </table>
              </div>

              {/* Section 1: Covered */}
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="font-size: 16px;">📖</span>
                  <h3 style="color: #0f3d2e; margin: 0; font-size: 15px; font-weight: bold;">1. What We Covered This Session:</h3>
                </div>
                <div style="background: #fcfbf9; border-left: 4px solid #145c42; padding: 12px 16px; border-radius: 4px; font-size: 14px; color: #292524; white-space: pre-line;">
                  ${covered}
                </div>
              </div>

              {/* Section 2: Strengths */}
              ${
                strengths
                  ? `
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="font-size: 16px;">🌟</span>
                  <h3 style="color: #0f3d2e; margin: 0; font-size: 15px; font-weight: bold;">2. Strengths & Achievements:</h3>
                </div>
                <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 12px 16px; border-radius: 4px; font-size: 14px; color: #065f46; white-space: pre-line;">
                  ${strengths}
                </div>
              </div>
              `
                  : ""
              }

              {/* Section 3: Areas to Practice */}
              ${
                areasToPractice
                  ? `
              <div style="margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="font-size: 16px;">🎯</span>
                  <h3 style="color: #0f3d2e; margin: 0; font-size: 15px; font-weight: bold;">3. Focus Areas & Practice:</h3>
                </div>
                <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 4px; font-size: 14px; color: #92400e; white-space: pre-line;">
                  ${areasToPractice}
                </div>
              </div>
              `
                  : ""
              }

              {/* Section 4: Homework */}
              ${
                homework
                  ? `
              <div style="margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="font-size: 16px;">📝</span>
                  <h3 style="color: #0f3d2e; margin: 0; font-size: 15px; font-weight: bold;">4. Homework & Next Steps:</h3>
                </div>
                <div style="background: #f1f5f9; border-left: 4px solid #64748b; padding: 12px 16px; border-radius: 4px; font-size: 14px; color: #334155; white-space: pre-line;">
                  ${homework}
                </div>
              </div>
              `
                  : ""
              }

              {/* Closing */}
              <div style="border-top: 1px solid #f5f5f4; padding-top: 18px; text-align: center; color: #78716c; font-size: 13px;">
                <p style="margin: 0 0 4px; font-weight: 600; color: #0f3d2e;">بارك الله فيكم (Barakallahu feekum)</p>
                <p style="margin: 0;">May Allah bless ${studentName}'s Quran journey with ease, understanding, and steadfastness.</p>
                <p style="margin: 8px 0 0; font-size: 12px;">Questions or feedback? Reply directly to this email or reach us on WhatsApp at <strong>+92 371 2215078</strong>.</p>
              </div>

            </div>

            <div style="text-align: center; padding: 14px; color: #a8a29e; font-size: 11px;">
              © ${new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.
            </div>

          </div>
        `,
      });
    } catch (emailErr) {
      console.error("[send-progress-report] Resend Error:", emailErr);
      return NextResponse.json(
        { error: "Failed to dispatch email via Resend service." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-progress-report] Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
