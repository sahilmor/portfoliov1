import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, scope, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is not configured in .env.local yet. Please provide your Resend API key.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || "mor.sahil05.28@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Brief <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${scope || "General Inquiry"} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.5;">
          <h2 style="border-bottom: 2px solid #E53935; padding-bottom: 10px; margin-bottom: 16px;">
            Portfolio Communication Brief
          </h2>
          <p><strong>Sender:</strong> ${name} (${email})</p>
          <p><strong>Project Scope / Role:</strong> ${scope}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f5f5f5; border: 1px solid #ddd;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #777;">
            Dispatched via Sahil Mor Portfolio API
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
