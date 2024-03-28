import { Category} from "@/app/lib/interface/type";


export const getCategory = async () => {
  const res = await fetch("https://data-json-six.vercel.app/category", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("داده ها دریافت نشد");
  }
  const data: Category[] = await res.json();
  return data;
};
