import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const derivedName = email.split("@")[0] || "Anonymous";

    // Check if email already exists
    const emailExists = await checkEmailExists(email);
    console.log('emailExists', emailExists);
    if (emailExists) {
      return NextResponse.json({ status: 200, message: "Email already in waitlist" });
    }

    // If email doesn't exist, add to waitlist
    const response = await fetch("https://decipad.pipedrive.com/api/v2/persons", {
      method: "POST",
      headers: {
        "x-api-token": process.env.PIPEDRIVE_API_KEY || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: derivedName, 
        emails: [{ value: email }], 
        label_ids: [50] 
      }),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error("Failed to add to waitlist");
    }
    
    return NextResponse.json({ status: 200, message: "Email added to waitlist" });
  } catch (error) {
    console.error("Failed to add to waitlist", error);
    return NextResponse.json({ status: 500, message: "Failed to add to waitlist" });
  }
}

/**
 * Check if an email already exists in Pipedrive
 * @param email The email to check
 * @returns Boolean indicating if the email exists
 */
async function checkEmailExists(email: string): Promise<boolean> {
  const checkResponse = await fetch(`https://decipad.pipedrive.com/api/v2/persons/search?term=${encodeURIComponent(email)}&fields=email&exact_match=true`, {
    method: "GET",
    headers: {
      "x-api-token": process.env.PIPEDRIVE_API_KEY || "",
      "Content-Type": "application/json",
    }
  });

  const checkData = await checkResponse.json();

  console.log('checkData', checkData);
  
  return checkData.success && 
         checkData.data && 
         checkData.data.items && 
         checkData.data.items.length > 0;
}