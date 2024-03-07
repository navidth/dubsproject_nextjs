"use client";
import { getProduct } from "@/api/GetData";
import DetailedProduct from "@/components/DetailedProduct";
import "../../../../styles/detailed.css";
import { CartProvaider } from "@/context/CartContex";
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
