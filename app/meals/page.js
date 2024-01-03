import Link from "next/link";
export default function MealsPage() {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals</h1>
      <Link className="Link" href="/meals/share">
        Share Meal
      </Link>
      <Link className="Link" href="/meals/recipes">
        Recipes
      </Link>
    </div>
  );
}
