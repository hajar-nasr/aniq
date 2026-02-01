import { useMemo, useState } from "react";
import tabs from "@/app/data/features-tabs.json";
import Image from "next/image";
import Button from "./core/Button";

const FeaturesTabs = () => {
  return (
    <section>
      <h2 className="text-2xl text-(--main-color) pb-4 font-medium md:text-3xl lg:text-4xl">
        Discover timeless elegance
      </h2>
      <p className="text-(--secondary-color)">
        Step into a word where quintessential charm with our collection. Every
        thread weaves a promise of unparalleled quality, ensuring that each
        garment is not just a part of your wardrobe, but a piece of art. Here is
        the essence of what makes our apparel the hallmark for those with an eye
        of excellence for the environment.
      </p>

      <Tabs tabs={tabs} />
    </section>
  );
};

type TapsProps = {
  tabs: {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    features: { icon: string; title: string; description: string }[];
  }[];
};

const Tabs = ({ tabs }: TapsProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const labels = useMemo(() => tabs.map((tab) => tab.label), [tabs]);

  return (
    <div>
      <div className="flex font-medium text-sm my-6 gap-4 border-b border-b-gray-200">
        {labels.map((label, index) => {
          const isActive = label === currentTab.label;
          return (
            <Button
              key={label}
              onClick={() => {
                setCurrentTab(tabs[index]);
              }}
              label={label}
              className={`border-b-2 pb-2 ${isActive ? "text-(--tertiary-color) border-b-[--tertiary-color]" : "text-(--secondary-color) border-b-transparent"} cursor-pointer`}
            />
          );
        })}
      </div>

      <div className="flex gap-2 md:gap-6 lg:gap-10 flex-col-reverse lg:flex-row w-full">
        <Image
          src={currentTab.image}
          alt={currentTab.label}
          width={400}
          height={400}
          className="rounded-lg w-full"
        />

        <div>
          <h3 className="text-(--main-color) pb-3 text-2xl font-medium">
            {currentTab.title}
          </h3>

          <p className="text-sm md:text-base text-(--secondary-color)">
            {currentTab.description}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 py-3 gap-2">
            {currentTab.features.map((feature) => {
              return (
                <li
                  key={feature.title}
                  className="text-sm md:text-base text-(--secondary-color) flex items-center gap-2"
                >
                  <div className="w-7 h-7 flex justify-center items-center">
                    <Image
                      src={feature.icon}
                      width={24}
                      height={24}
                      alt=""
                      className="rounded-full"
                    />
                  </div>

                  <span>{feature.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTabs;
