export default function Slug({ params }) {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Welcome to: {params.slug}
      </h1>
    </div>
  );
}
