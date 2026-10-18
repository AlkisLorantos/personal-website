import PlainPage from "@/components/PlainPage";
import ItemList from "@/components/ItemList";
import { writing } from "@/lib/site";

export default function Writing() {
  return (
    <PlainPage title="Writing">
      <ItemList items={writing} />
    </PlainPage>
  );
}