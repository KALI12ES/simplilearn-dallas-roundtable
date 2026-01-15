"use server";

import { saveRSVP } from "@/lib/airtable";

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false };
  }

  await saveRSVP(email);

  return { success: true };
}
