import { ItemWithId } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

const IMGURL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item";

const ItemPage = async () => {
  const data = await fetchItemList();
  const items: ItemWithId[] = Object.entries(data);
  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        아이템 목록
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {items.map((item) => {
          const [id, itemDetail] = item;
          return (
            <div
              key={id}
              className="h-auto min-h-[250px] w-[180px] border-2 border-solid p-2"
            >
              <Image
                src={`${IMGURL}/${id}.png`}
                width={100}
                height={100}
                alt={itemDetail.name}
                className="mx-auto my-2"
              />
              <div className="text-lg font-bold text-blue-600">
                {itemDetail.name}
              </div>
              <div>{itemDetail.plaintext}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemPage;
