import { getProduct } from "@/api/GetData"
import DetailedProduct from "@/components/DetailedProduct"
import "../../../../styles/detailed.css"
import { CartProvaider } from "@/context/CartContex"
import DesceriptionsPreduct from "@/components/DesceriptionsPreduct"
import CardSimilar from "@/components/CardSimilar"
import { Products } from "@/app/lib/interface/type"

async function page({params}:{params:{title:string}}) {

  const product:any = await getProduct()
  let data = product.filter((i:any)=> i.title.replace(/\s/g, '-') === params.title)
  let similar = data.map((i:Products)=> i.category.url)
  console.log(similar)
  

  return (
      <DetailedProduct data={data}>
         <DesceriptionsPreduct items = {data}/>
         <CardSimilar data={product} similar={similar} />
      </DetailedProduct>
  )
}

export default page