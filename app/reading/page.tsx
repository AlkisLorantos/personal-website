import PlainPage from "@/components/PlainPage";
import ItemList from "@/components/ItemList";
import { reading } from "@/lib/site";

export default function Reading() {
  return (
    <PlainPage title="Reading">
      <ItemList items={reading} />
    </PlainPage>
  );
}