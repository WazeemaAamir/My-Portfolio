import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/validations';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check the form fields.',
          errors: result.error.issues,
        },
        { status: 400 }
      );
    }

    const savedMessage = await prisma.contactMessage.create({
      data: result.data,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
        data: savedMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('CONTACT API ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}