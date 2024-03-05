import { Category, Products } from "@/app/lib/interface/type";
import { error } from "console";

export const getProduct = async () => {
  const responeProduct = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
  });
  if (!responeProduct.ok) {
    throw error("not fetching");
  }
  let data: Products[] = await responeProduct.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(data);
    }, 1000);
  });
};

export const getCategory = async () => {
  const res = await fetch("http://localhost:4000/category", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("داده ها دریافت نشد");
  }
  const data: Category[] = await res.json();
  return data;
};
