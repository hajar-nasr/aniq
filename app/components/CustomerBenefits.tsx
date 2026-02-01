import Image from "next/image";

const BENEFITS = [
  {
    id: "shipping",
    icon: "/images/icons/truck.png",
    title: "Complimentary Shipping",
    description:
      "Enjoy free shipping on all orders with transparent pricing. What you see is what you pay—no surprise fees.",
  },
  {
    id: "quality",
    icon: "/images/icons/shield.png",
    title: "2-Year Quality Promise",
    description:
      "Shop with confidence knowing we stand behind our products. If an issue arises within two years, we offer a hassle-free replacement.",
  },
  {
    id: "exchanges",
    icon: "/images/icons/refresh.png",
    title: "Easy Exchanges",
    description:
      "If your purchase isn't quite right, we're happy to facilitate an easy exchange so you end up with the perfect item.",
  },
];

const CustomerBenefits = () => {
  return (
    <section className="space-y-4 md:space-y-12 text-center">
      <div>
        <span className="text-(--tertiary-color) text-sm font-bold">
          Evaluate Your Experience
        </span>

        <h2 className="text-(--main-color) text-2xl md:text-3xl lg:text-4xl font-medium md:max-w-140 m-auto my-2">
          Our Commitment to Exceptional Service
        </h2>

        <p className="text-gray-500 font-medium text-base  md:max-w-180 m-auto">
          We pride ourselves on a foundation of exceptional customer service,
          where every interaction is a testament to our dedication to
          excellence.
        </p>
      </div>

      <BenefitsList benefits={BENEFITS} />
    </section>
  );
};

const BenefitsList = ({
  benefits,
}: {
  benefits: {
    id: string;
    icon: string;
    description: string;
    title: string;
  }[];
}) => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-20">
      {benefits.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-col text-base items-center gap-2 md:gap-3"
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full  shadow-xl shadow-black/10 bg-white flex justify-center items-center">
              <Image src={item.icon} alt="" width={24} height={24} />
            </div>

            <h3 className="text-(--main-color) font-medium">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CustomerBenefits;
