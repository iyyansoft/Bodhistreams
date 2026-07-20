import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const port = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

app.post('/api/send-invoice', async (req, res) => {
  console.log('[Diagnostic] GMAIL_USER:', !!process.env.GMAIL_USER, 'gmail_user:', !!process.env.gmail_user);
  console.log('[Diagnostic] GMAIL_APP_PASS:', !!process.env.GMAIL_APP_PASS, 'gmail_app_pass:', !!process.env.gmail_app_pass);
  console.log('[Diagnostic] RESEND_API_KEY:', !!process.env.RESEND_API_KEY);

  const { to, company, invoiceNumber, pdfBase64 } = req.body;

  if (!to || !pdfBase64) {
    return res.status(400).json({ error: 'Missing required parameters (to, pdfBase64)' });
  }

  const htmlContent = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
      <p>Dear <strong>${company || 'BODHI'}</strong>,</p>
      <p>Thank you for your business. Your invoice <strong>${invoiceNumber || ''}</strong> has been generated successfully.</p>
      <p>Please find the complete invoice PDF attached to this email.</p>
      <br/>
      <p>Best Regards,</p>
      <p><strong>BodhiStreams Convergence Pvt Ltd</strong></p>
    </div>
  `;

  // Option A: If Gmail SMTP configuration is provided, use Nodemailer (case-insensitive checks)
  const gmailUser = process.env.GMAIL_USER || process.env.gmail_user || process.env.Gmail_User;
  const gmailAppPass = process.env.GMAIL_APP_PASS || process.env.gmail_app_pass || process.env.Gmail_App_Pass;

  if (gmailUser && gmailAppPass) {
    try {
      console.log('Sending invoice using Gmail SMTP...');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPass,
        },
      });

      const mailOptions = {
        from: `"BodhiStreams" <${gmailUser}>`,
        to: to,
        subject: `Invoice ${invoiceNumber || ''} - BodhiStreams`,
        html: htmlContent,
        attachments: [
          {
            filename: `Invoice-${invoiceNumber || 'BS'}.pdf`,
            content: pdfBase64,
            encoding: 'base64',
          },
        ],
      };

      const data = await transporter.sendMail(mailOptions);
      console.log('Gmail SMTP email sent successfully!');
      return res.status(200).json({ message: 'Email sent successfully via Gmail SMTP!', data });
    } catch (error) {
      console.error('Gmail SMTP error:', error);
      return res.status(500).json({ error: 'Failed to send email via Gmail SMTP', details: error.message });
    }
  }

  // Option B: Fallback/Default to Resend API
  try {
    console.log('Sending invoice using Resend API...');
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Invoice <onboarding@resend.dev>',
      to: to,
      subject: `Invoice ${invoiceNumber || ''} - BodhiStreams`,
      html: htmlContent,
      attachments: [
        {
          filename: `Invoice-${invoiceNumber || 'BS'}.pdf`,
          content: pdfBase64,
        },
      ],
    });

    if (error) {
      console.error('Resend API returned an error:', error);
      return res.status(error.statusCode || 500).json({ 
        error: error.message || 'Failed to send email via Resend', 
        details: error 
      });
    }

    console.log('Resend API email sent successfully!');
    res.status(200).json({ message: 'Email sent successfully via Resend!', data });
  } catch (error) {
    console.error('Resend email error:', error);
    res.status(500).json({ error: 'Failed to send email via Resend', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
