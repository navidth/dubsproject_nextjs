"use client";
import DetailedProduct from "@/components/DetailedProduct";
import "../../../../styles/detailed.css";
import DesceriptionsProduct from "@/components/DesceriptionsProduct";
import CardSimilar from "@/components/CardSimilar";
import { Products } from "@/app/lib/interface/type";

function page({ params }: { params: { title: string } }) {
  return (
    <>
      <DetailedProduct params={params}></DetailedProduct>
    </>
  );
}

export default page;
