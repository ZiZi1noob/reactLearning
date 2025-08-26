import getImageUrl from "@/utils/imgUrl";

const people = [
  {
    id: 0,
    name: "凯瑟琳·约翰逊",
    profession: "数学家",
    accomplishment: "太空飞行相关数值的核算",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "马里奥·莫利纳",
    profession: "化学家",
    accomplishment: "北极臭氧空洞的发现",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "穆罕默德·阿卜杜勒·萨拉姆",
    profession: "物理学家",
    accomplishment: "关于基本粒子间弱相互作用和电磁相互作用的统一理论",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "珀西·莱温·朱利亚",
    profession: "化学家",
    accomplishment: "开创性的可的松药物、类固醇和避孕药",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "苏布拉马尼扬·钱德拉塞卡",
    profession: "天体物理学家",
    accomplishment: "白矮星质量计算",
    imageId: "lrWQx8l",
  },
];

export default function ScientistList() {
  const { chemists, scientists } = people.reduce(
    (account, person) => {
      if (person.profession === "化学家") {
        account.chemists.push(person);
      } else {
        account.scientists.push(person);
      }
      return account;
    },

    { chemists: [] as typeof people, scientists: [] as typeof people }
  );

  const listItems = (person: {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
  }) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}因{person.accomplishment}而闻名世界
      </p>
    </li>
  );
  return (
    <article>
      <h1>化学家</h1>
      <ul>{chemists.map(listItems)}</ul>
      <h1>科学家</h1>
      <ul>{scientists.map(listItems)}</ul>
    </article>
  );
}
