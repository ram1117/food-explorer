"use client";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="!px-12 link-style">
      {pending ? "Submitting..." : "Share Recipt"}
    </button>
  );
};

export default FormSubmit;
