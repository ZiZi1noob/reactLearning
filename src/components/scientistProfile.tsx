import Avatar from "@/components/avatar";

export default function ScientistProfile({
  scientist,
}: {
  scientist: {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovered: string;
  };
}) {
  return (
    <div>
      <ScientistCardGb>
        <h1>{scientist.name}</h1>
        <br></br>
        <Avatar person={scientist} size={150} />
        <br></br>
        <br></br>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
          <li>Profession: {scientist.profession}</li>
          <li>Awards: {scientist.awards}</li>
          <li>Discovered: {scientist.discovered}</li>
        </ul>
      </ScientistCardGb>
    </div>
  );
}

function ScientistCardGb({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        rounded-xl
        bg-gradient-to-br from-white/60 to-blue-200/40
        backdrop-blur-md
        border border-white/100
        shadow-lg
        p-8
        flex flex-col items-start justify-start
        transition-shadow
        hover:shadow-2xl
      "
      style={{
        textAlign: "left",
        // aspectRatio: "1/1", // 可以移除或根据需要调整
      }}
    >
      {children}
    </div>
  );
}
