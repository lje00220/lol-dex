import ItemList from "@/components/ItemList";
import { fetchItemList } from "@/utils/serverApi";

const ItemPage = async () => {
  const items = await fetchItemList();
  return (
    <div className="px-5">
      <h2 className="my-5 text-3xl font-extrabold text-blue-300">
        아이템 목록
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-10 gap-y-5">
        {items?.map((item) => <ItemList item={item} key={item[0]} />)}
      </div>
    </div>
  );
};

export default ItemPage;
