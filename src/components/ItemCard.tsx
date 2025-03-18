import { IMG_URL } from "@/public/constants/url";
import { ItemWithId } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: ItemWithId;
};

/**
 * 아이템 카드를 출력하는 컴포넌트
 *
 * @param {ItemWithId} item
 * @returns {JSX.Element}
 */

const ItemCard = ({ item }: Props) => {
  const [id, itemDetail] = item;
  return (
    <div className="flex h-auto min-h-[250px] max-w-[180px] flex-col items-center border-2 border-solid p-2">
      <Image
        src={`${IMG_URL}/item/${id}.png`}
        width={100}
        height={100}
        alt={itemDetail.name}
        className="mx-auto my-2 h-auto w-full"
      />
      <div className="text-center text-lg font-bold text-blue-600">
        {itemDetail.name}
      </div>
      <div className="text-center">{itemDetail.plaintext}</div>
    </div>
  );
};

export default ItemCard;
