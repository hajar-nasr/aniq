import Image from "next/image";
import Link from "next/link";

const HomepageHero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 md:items-center *:flex-1 font-medium">
      <div className="text-center md:text-left md:max-w-120">
        <h1 className="text-(--main-color) text-4xl md:text-5xl lg:text-6xl">
          Summer styles are finally here
        </h1>
        <p className="text-xl text-gray-500 pt-3">
          This year, our new summer collection will be your haven from the
          world&#39;s harsh elements.
        </p>

        <Link
          href="/product/list"
          className="rounded-sm bg-blue-800 text-white py-3 px-8 inline-block mt-4 md:mt-10 font-semibold hover:bg-blue-900 min-w-50 text-center"
        >
          Shop now
        </Link>
      </div>

      <Image
        width={300}
        height={200}
        src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/cool-neo-retro-shoes/cool-netro-retro-shoes-1.jpg"
        alt=""
        quality={70}
        priority
        className="rounded-lg w-full max-h-200 object-cover"
      />
    </section>
  );
};

export default HomepageHero;
