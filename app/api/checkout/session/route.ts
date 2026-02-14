import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/app/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const body = await request.json();

    if (!Array.isArray(body.cart)) throw Error("Invalid items");

    const session = await stripe.checkout.sessions.create({
      line_items: body.cart.map(
        ({ price, quantity }: { price: string; quantity: number }) => ({
          price,
          quantity,
        }),
      ),
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
