import { Category} from "@/app/lib/interface/type";


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
