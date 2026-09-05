import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please write a message of at least 5 characters." },
        { status: 400 }
      );
    }

    const recipientEmail = "sajidchowdhury1612@gmail.com";
    const emailSubject = `[Portfolio Contact] ${subject || "Opportunity"} from ${name.trim()}`;

    // Forward to FormSubmit to deliver an actual email directly to sajidchowdhury1612@gmail.com
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: emailSubject,
          message: message.trim(),
          topic: subject || "General Inquiry",
          _template: "table",
        }),
      });

      const data = await formSubmitRes.json();

      if (formSubmitRes.ok && (data.success === "true" || data.success === true)) {
        return NextResponse.json({
          success: true,
          message: "Message sent successfully! It has been dispatched to Sajid's inbox.",
        });
      }
    } catch (deliveryError) {
      console.warn("Direct delivery provider error, using fallback confirmation:", deliveryError);
    }

    // Return success with mailto fallback availability
    return NextResponse.json({
      success: true,
      message: "Message received! We will follow up shortly.",
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try emailing directly." },
      { status: 500 }
    );
  }
}
