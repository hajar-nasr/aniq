import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const body = await request.json();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    if (!Array.isArray(body.cart)) throw Error("Invalid items");

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1T0gRrDsPuO6sNfUZ3VbIDDE",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/post-purchase?session_id={CHECKOUT_SESSION_ID}`,
    });

    if (!session.url) throw Error("Failed to create session url");

    // redirect user to our purchase success link
    return NextResponse.json({
      sessionUrl: session.url,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 },
    );
  }
}
