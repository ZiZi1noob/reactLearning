import Avatar from "@/components/avatar";


export default function ScientistProfile({
  scientist,
}: {
  scientist: {
    name: string;
    isMale: boolean;
    imageId: string;
    profession: string;
    awards: string;
    discovered: string;
  };
}) {
  return (
    <div>
      <ScientistCardBg>
        <h1>
          {scientist.name} {!scientist.isMale && <>👩</>}
        </h1>
        <br></br>
        <Avatar person={scientist} size={150} />
        <br></br>
        <br></br>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
          <li>Profession: {scientist.profession}</li>
          <li>Awards: {scientist.awards}</li>
          <li>Discovered: {scientist.discovered}</li>
        </ul>
      </ScientistCardBg>
    </div>
  );
}

function ScientistCardBg({ children }: { children: React.ReactNode }) {
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
           hover:translate-y-2
                  hover:translate-x-1
        active:scale-95
        mx-8
        my-4
      "
      style={{
        textAlign: "left",
      }}
    >
      {children}
    </div>
  );
}
