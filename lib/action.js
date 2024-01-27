"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !test || text.trim() === "";
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
