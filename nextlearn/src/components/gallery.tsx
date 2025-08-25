import Image from "next/image";

function Img({ srcUrl, name }: { srcUrl: string; name: string }) {
  return <Image src={srcUrl} alt={name} width={300} height={300} />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <div style={{ display: "flex", textAlign: "center" }}>
        <Img
          srcUrl="https://i.imgur.com/MK3eW3As.jpg"
          name="Katherine Johnson"
        />
        <Img
          srcUrl="https://i.imgur.com/MK3eW3As.jpg"
          name="Katherine Johnson"
        />
        <Img
          srcUrl="https://i.imgur.com/MK3eW3As.jpg"
          name="Katherine Johnson"
        />
      </div>
    </section>
  );
}
