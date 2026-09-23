import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/validations';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = ContactSchema.parse(body);

    // Save message to database
    const savedMessage = await prisma.contactMessage.create({
      data: validatedData,
    });

    return NextResponse.json(
      { success: true, data: savedMessage, message: 'Message sent successfully!' },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}