import Link from "next/link";

const LISTS = [
  {
    title: "SHOP CATEGORIES",
    items: [
      {
        label: "Unisex",
        href: "",
      },
      {
        label: "Women",
        href: "",
      },
      {
        label: "Men",
        href: "",
      },
    ],
  },

  {
    title: "SHOP COLLECTIONS",
    items: [
      {
        label: "Latest arrivals",
        href: "",
      },
      {
        label: "Urban Oasis",
        href: "",
      },
      {
        label: "Cozy Comfort",
        href: "",
      },
      {
        label: "Fresh Fusion",
        href: "",
      },
    ],
  },
];

const CategoriesLists = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between">
      <div>
        <span className="inline-block bold">ANIQ®</span>
        <p className="text-gray-500 ">
          Craft stunning style journeys that weave more joy into every thread.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mt-4 lg:mt-0">
        {LISTS.map((list) => {
          return (
            <div key={list.title}>
              <p className="text-gray-500 font-medium pb-3">{list.title}</p>
              <ul key={list.title} className="flex flex-col gap-1">
                {list.items.map((li) => {
                  return (
                    <li
                      key={li.label}
                      className="text-gray-600 hover:underline"
                    >
                      <Link href={li.href}>{li.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesLists;
