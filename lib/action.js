"use server";

import { saveMeal } from "@/lib/meals";

export async function ShareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  await saveMeal(meal);
}
