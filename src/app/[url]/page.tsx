import CardProduct from "../../components/CardProduct";
import { getCategory } from "@/Data/GetData";
import Header from "@/components/Header";
import Sortby from "@/components/Sortby";
import Moshavere from "@/components/Moshavere";
import PriceRange from "@/components/PriceBox";
import ResualtCat from "@/components/ResualtCat";

async function ProductShop({ params }: { params: { url: string } }) {
  const res = await getCategory();
  const resualtCat = res.find((cat) => cat.url === params.url);

  return (
    <main className="mt-5 d-flex justify-content-center container-lg">
      <section className="article me-3 w3-animate-right">
        <Moshavere />
        {resualtCat && (
          <ResualtCat
            pageFather={resualtCat.name}
            pageFatherUrl={resualtCat.url}
            names={resualtCat.subitems || []}
          />
        )}
        <PriceRange />
      </section>
      <section className="card-prudoct me-sm-5 me-0 rounded mb-5">
        {resualtCat && (
          <Header pageFather={resualtCat.name} pageChild={resualtCat.name} />
        )}
        <Sortby />
        <CardProduct params={params} />
      </section>
    </main>
  );
}

export default ProductShop;
