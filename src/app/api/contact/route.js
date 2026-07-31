import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, propertyType, message, type } = body;

    // Configure SMTP transport with environment variables, falling back to Gmail defaults
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "kingsfordgroups@gmail.com",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `"Kingsford Lead Integration" <${process.env.SMTP_USER || "kingsfordgroups@gmail.com"}>`,
      to: "Kingsfordgroups@gmail.com",
      replyTo: email || undefined,
      subject: `New Lead Inquiry - ${name} (${type || "General Inquiry"})`,
      text: `
        New lead inquiry received:
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email || "N/A"}
        Service Required: ${service || "N/A"}
        Property Type: ${propertyType || "N/A"}
        Budget: ${budget || "N/A"}
        Message: ${message || "N/A"}
        
        Inquiry Category: ${type || "General"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0f2018; border-bottom: 2px solid #d9cba4; padding-bottom: 10px; margin-top: 0;">New Lead Inquiry</h2>
          <p style="font-size: 16px;">A new lead has submitted an inquiry on the Kingsford Landing Page:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; width: 150px; border-bottom: 1px solid #eee;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email ? `<a href="mailto:${email}">${email}</a>` : "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Service Required:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service || "N/A"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Property Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${propertyType || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || "N/A"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${message || "N/A"}</td>
            </tr>
          </table>
          
          <p style="margin-top: 25px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px; margin-bottom: 0;">
            Sent automatically from Kingsford Interiors landing page.
          </p>
        </div>
      `,
    };

    // If SMTP credentials are set in environment, attempt to send
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } else {
      // In development/test or if SMTP is not configured, log it and return successful simulation
      console.log("--- SMTP Credentials Missing. Lead submission logged: ---");
      console.log(mailOptions.text);
      return NextResponse.json({ 
        success: true, 
        message: "Inquiry logged. SMTP credentials not set in environment." 
      });
    }
  } catch (error) {
    console.error("Error sending email API handler:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
