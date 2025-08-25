export default function getImageUrl(
  person: { imageId: string },
  size: string = "s"
) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
