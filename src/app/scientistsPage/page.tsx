import ScientistProfile from "@/app/scientistsPage/scientistProfile";
import ScientistList from "@/app/scientistsPage/scientistList";

export default function ScientistsPage() {
  const scientists = [
    {
      name: "Katsuko Saruhashi",
      isMale: false,
      imageId: "YfeOqp2",
      profession: "Japanese geochemist",

      awards:
        "Avon Special Prize for Women (1981); Miyake Prize for Geochemistry (1985); Tanaka Prize of the Society of Sea Water Sciences (1993)",
      discovered:
        "Discovery of the dangers of radioactive fallout in seawater and the atmosphere",
    },

    {
      name: "Lin Lanying",
      isMale: false,
      imageId: "1bX5QH6",
      profession: " physicist and chemist",
      awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
      discovered: "a method for measuring carbon dioxide in seawater",
    },
    {
      name: "Aklilu Lemma",
      isMale: true,
      imageId: "OKS67lh",
      profession: "Pathology",
      awards: "Right Livelihood Award Scientific career",
      discovered:
        "discovering and campaigning relentlessly for an affordable preventative against bilharzia",
    },
  ];

  return (
    <>
      <p
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Notable Scientists
      </p>
      {scientists.map((scientist) => (
        <ScientistProfile
          key={`${scientist.name}-${scientist.imageId}`}
          scientist={scientist}
        />
      ))}
      <ScientistList />
    </>
  );
}
