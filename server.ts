import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // load .env
console.log("🔐 Loaded API Key:", process.env.RESEND_API_KEY); // ✅ Debug log

const app = express();
app.use(express.json());

// CORS allow
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  next();
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Mayank Srivastava's Portfolio Website
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // ✅ temp safe sender
        to: ["mayanksrivas11@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        text: emailContent,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(400).json({ error: errorText });
    }

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
