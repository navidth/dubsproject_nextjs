"use client";
import { Products } from "@/app/lib/interface/type";
import React, { useState } from "react";

function DesceriptionsPreduct({ data }: { data: Products[]}) {
  console.log(data);
  
  const [readMe, setReadmeBtn] = useState(false);
  const readMeBtn = () => {
    setReadmeBtn(!readMe);
  };

  return (
    <div className="desceriptions bg-white rounded-4">
      <section className="headering-desceription px-3 py-2">
        <h3>توضیحات</h3>
      </section>
      <section className="header-desceription px-3 py-3">
        <h2> معرفی {data[0].title}</h2>
      </section>
      <section>
        {readMe && (
          <div>
            <p id="text" className="p-desceriptions text-muted">
              {data[0].description}
            </p>
          </div>
        )}
        {data[0].description && data[0].description.length > 200 ? (
          <button
            type="button"
            onClick={readMeBtn}
            className="fs-4 btn btn-readMe mx-auto d-block rounded-5 px-5"
          >
            {readMe ? "مخفی کردن" : "نمایش کامل"}
          </button>
        ) : (
          <p id="text" className="p-desceriptions text-muted">
            {data[0].description}
          </p>
        )}
      </section>
    </div>
  );
}

export default DesceriptionsPreduct;
