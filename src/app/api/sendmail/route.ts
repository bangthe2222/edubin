import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name')
  const email = request.nextUrl.searchParams.get('email')
  const phone = request.nextUrl.searchParams.get('phone')
  const message = request.nextUrl.searchParams.get('message')
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_HOST,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_HOST,
    to: process.env.EMAIL_HOST,
    subject: 'CONTACT FROM ' + name?.toUpperCase(),
    text: "Name: " + name +"\n" +
          "Email: " + email + "\n"+ 
          "Phone: "+ phone + "\n" +
          "Message: "+ message+ "\n"
          ,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error send mail' }, { status: 401 })
  }

  return NextResponse.json({ revalidated: true, now: Date.now() })
}