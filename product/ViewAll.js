import { Section } from "../components/section";
import Image from "next/image";
import { Icon } from "../utils/icons";

export default function ViewAll({ data }) {
  const handleText = (text, maxLen = 126) =>
    text.length > maxLen ? `${text.substring(0, maxLen - 3)}...` : text;

  return (
    <Section title="Products" iconName="product">
      <div className="grid lg:grid-cols-2 gap-4">
        {data &&
          data.map((p) => (
            <div
              className="flex items-start justify-start w-full px-5 py-6 border border-slate-300 flex-col sm:flex-row"
              key={p.id}
            >
              <div className="h-full w-full sm:w-max mb-4 flex items-center justify-center overflow-hidden px-6 py-4 bg-white rounded min-w-[145px] sm:mb-0">
                <Image
                  src={p.image}
                  alt="product_img"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-between sm:pl-10 h-full">
                <h2 className="font-bold text-slate-900 text-xl leading-6 mb-2">
                  {handleText(p.title, 56)}
                </h2>
                <p className="text-slate-500 leading-5 text-[14px]">
                  {handleText(p.description)}
                </p>
                <div>
                  <button className="mt-3 bg-violet-700 text-slate-200 px-4 py-2 rounded inline-flex items-center gap-2 text-sm">
                    {Icon("addToBag")} Add to Bag
                  </button>
                  <span className="inline-block px-2 ml-4 text-sky-500">
                    {p.price} TL
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
