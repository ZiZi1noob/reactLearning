import ScientistProfile from '@/components/scientistProfile'

export default function ScientistsPage() {
 
const scientist1 = {
    name: "Lin Lanying",
    imageId: 'YfeOqp2',
    profession: " Chinese electrical engineer, materials scientist, physicist, and politician",
    awards: "	CAS S&T Progress AwardHenry Fok Award Scientific career",
    discovered: "First mono-crystalline silicon and gallium arsenide in China"};

    const scientist2 = {
    name: "Lin Lanying",
    imageId: '1bX5QH6',
    profession: " physicist and chemist",
    awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater"};

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
    <ScientistProfile scientist={scientist1} />
    <ScientistProfile scientist={scientist2} />
    </>
  );


}
