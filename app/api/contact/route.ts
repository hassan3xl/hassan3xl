import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ Send email to yourself
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "elhassanehussaine@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Send confirmation email to the sender
    await resend.emails.send({
      from: "Hassan Saidu <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hey ${name},</p>
        <p>Thanks for reaching out! I’ve received your message and will get back to you soon.</p>
        <br/>
        <p>Best,<br/>Hassan Saidu</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
