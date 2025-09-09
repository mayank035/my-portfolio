// import express from "express";

// const app = express();
// app.use(express.json());

// app.post("/send-email", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   const emailContent = `
//   New Contact Form Submission

//   Name: ${name}
//   Email: ${email}
//   Subject: ${subject}

//   Message:
//   ${message}
//   `;

//   const response = await fetch("https://api.resend.com/emails", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: "portfolio@yourverifieddomain.com",
//       to: ["mayanksrivas11@gmail.com"],
//       subject: `Portfolio Contact: ${subject}`,
//       text: emailContent,
//       reply_to: email,
//     }),
//   });

//   if (!response.ok) {
//     return res.status(400).json({ error: await response.text() });
//   }

//   res.json({ success: true, message: "Email sent successfully" });
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));
