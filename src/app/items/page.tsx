import ItemCard from "@/components/ItemCard";
import Loading from "@/components/Loading";
import { fetchItemList } from "@/utils/serverApi";
import { Suspense } from "react";

/**
 * 아이템 리스트 페이지(SSG)
 *
 * @returns {JSX.Element}
 */

const ItemPage = async () => {
  const items = await fetchItemList();

  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        아이템 목록
      </h2>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-10 gap-y-5">
          {items?.map((item) => <ItemCard item={item} key={item[0]} />)}
        </div>
      </Suspense>
    </div>
  );
};

export default ItemPage;
