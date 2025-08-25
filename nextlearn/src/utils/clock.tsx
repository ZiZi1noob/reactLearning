export default function Clock({
  color = "black",
  time,
}: {
  color?: string;
  time: string;
}) {
  return (
    <h1
      style={{
        color: color,
        fontSize: "48px",
        fontWeight: "bold",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      {time}
    </h1>
  );
}
