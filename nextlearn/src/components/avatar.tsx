import getImageUrl from "@/utils/imgUrl";
import Image from "next/image";

export default function Avatar({
  person,
  size = 100,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <Image
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: "50%" }}
    />
  );
}
