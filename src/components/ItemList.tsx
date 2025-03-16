import { ItemWithId } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: ItemWithId;
};

const IMG_URL = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item";

const ItemList = ({ item }: Props) => {
  const [id, itemDetail] = item;
  return (
    <div className="h-auto min-h-[250px] w-[180px] border-2 border-solid p-2">
      <Image
        src={`${IMG_URL}/${id}.png`}
        width={100}
        height={100}
        alt={itemDetail.name}
        className="mx-auto my-2"
      />
      <div className="text-lg font-bold text-blue-600">{itemDetail.name}</div>
      <div>{itemDetail.plaintext}</div>
    </div>
  );
};

export default ItemList;
