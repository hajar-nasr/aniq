import Link from "next/link";

type Props = {
  collection: {
    title: string;
    items: {
      collection_id: string;
      name: string;
      image_url: string;
      created_at: string;
      description: string;
    }[];
  };
};

const GridCollection = ({ collection: { title, items } }: Props) => {
  return (
    <section className="w-full">
      <h2 className="text-(--main-color) pb-5 text-2xl md:text-3xl">{title}</h2>

      <div className="grid gap-2 md:gap-4 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 text-white">
        {items.map((item) => {
          return (
            <Link
              key={item.collection_id}
              className="text-base p-3 md:p-4 rounded-xl bg-cover w-full h-full border-2 first:col-span-1 first:row-span-2 min-h-40 md:min-h-50 lg:min-h-80 bg-center cursor-pointer flex items-end"
              style={{
                backgroundImage: `url('${item.image_url}')`,
              }}
              href="/products/list"
            >
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="font-medium">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GridCollection;
