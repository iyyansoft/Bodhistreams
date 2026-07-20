import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS configuration for local/cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  console.log('[Diagnostic] GMAIL_USER defined:', !!process.env.GMAIL_USER);
  console.log('[Diagnostic] GMAIL_APP_PASS defined:', !!process.env.GMAIL_APP_PASS);
  console.log('[Diagnostic] RESEND_API_KEY defined:', !!process.env.RESEND_API_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  // Option A: If Gmail SMTP configuration is provided in process.env, use Nodemailer
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
    try {
      console.log('Sending invoice using Gmail SMTP...');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASS,
        },
      });

      const mailOptions = {
        from: `"BodhiStreams" <${process.env.GMAIL_USER}>`,
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
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
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
}
