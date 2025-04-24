import { notFound, redirect } from "next/navigation";
import { stripe } from "../api/checkout/route";
import SuccessfulPayment from "./successfulPayment";

interface SuccessPagePropType {
  searchParams: {
    session_id: string;
  };
}

export default async function Success({ searchParams }: SuccessPagePropType) {
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
