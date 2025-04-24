import { notFound, redirect } from "next/navigation";
import SuccessfulPayment from "./successfulPayment";
import { stripe } from "@/lib/stripe";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) notFound();

  const { status } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return <SuccessfulPayment />;
  }
}
