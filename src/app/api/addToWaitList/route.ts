import { NextResponse } from 'next/server';

const allowedOrigins = [
  'https://decipad.webflow.io',
  'https://www.decipad.com',
  'https://decipad.netlify.app',
];

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin') || '';
  if (!allowedOrigins.includes(origin)) {
    return new NextResponse('CORS Error: Origin not allowed', { status: 403 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin') || '';

  if (!allowedOrigins.includes(origin)) {
    return new NextResponse('CORS Error: Origin not allowed', { status: 403 });
  }

  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return new NextResponse(
        JSON.stringify({ status: 400, message: 'Invalid email' }),
        { status: 400, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' } }
      );
    }

    const derivedName = email.split('@')[0] || 'Anonymous';

    // Check if email already exists
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      return new NextResponse(
        JSON.stringify({ status: 200, message: 'Email already in waitlist' }),
        { status: 200, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' } }
      );
    }

    // Add to Pipedrive
    const pipedriveResponse = await fetch('https://decipad.pipedrive.com/api/v2/persons', {
      method: 'POST',
      headers: {
        'x-api-token': process.env.PIPEDRIVE_API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: derivedName,
        emails: [{ value: email }],
        label_ids: [50],
      }),
    });

    const data = await pipedriveResponse.json();

    if (!data.success) {
      throw new Error('Failed to add to waitlist');
    }

    return new NextResponse(
      JSON.stringify({ status: 200, message: 'Email added to waitlist' }),
      { status: 200, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Failed to add to waitlist', error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: 'Failed to add to waitlist' }),
      { status: 500, headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' } }
    );
  }
}

// Utility
async function checkEmailExists(email: string): Promise<boolean> {
  const checkResponse = await fetch(
    `https://decipad.pipedrive.com/api/v2/persons/search?term=${encodeURIComponent(
      email
    )}&fields=email&exact_match=true`,
    {
      method: 'GET',
      headers: {
        'x-api-token': process.env.PIPEDRIVE_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }
  );

  const checkData = await checkResponse.json();
  return (
    checkData.success &&
    checkData.data &&
    checkData.data.items &&
    checkData.data.items.length > 0
  );
}
