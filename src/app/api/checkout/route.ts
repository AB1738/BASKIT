import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { CartItem } from "@/stores/cart-store";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Create Checkout Sessions from body params.

    const line_items = data.map((item: CartItem) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.qty,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.json({ redirectUrl: session.url });
  } catch (e: unknown) {
    if (e instanceof Error) return NextResponse.json({ error: e.message });
  }
};
