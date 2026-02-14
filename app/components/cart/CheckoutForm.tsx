"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "../core/Button";

type Props = {
  cart: { price: string; quantity: number }[];
};
const CheckoutForm = ({ cart }: Props) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const alertError = () => {
    alert("An unexpected error occurred, please try again");
    setSubmitting(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // create and redirect the user to a payment session
    const response = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    if (!response.ok) return alertError();

    try {
      const { sessionUrl } = await response.json();
      router.push(sessionUrl);
    } catch {
      alertError();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        role="link"
        label="Checkout"
        className="cursor block w-full rounded-sm py-3 text-center px-6 font-semibold hover:bg-blue-900 text-white bg-blue-800"
      />

      {submitting && (
        <div className="fixed inset-0 bg-white/80 flex justify-center items-center">
          <p className="text-center text-(--tertiary-color)">Please wait...</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
