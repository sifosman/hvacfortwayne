import { NextResponse } from "next/server";

export async function POST() {
  const twiml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Dial>+27658475289</Dial>
    </Response>
  `.trim();

  return new NextResponse(twiml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

// Support GET for testing or if Twilio is configured to use GET
export async function GET() {
  return POST();
}
