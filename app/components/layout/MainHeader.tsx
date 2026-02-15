import Link from "next/link";
import CartIcon from "../cart/CartIcon";

const MainHeader = () => {
  return (
    <header className="pt-6 md:pt-8 pb-12 text-4xl flex items-center justify-between">
      <Link href="/">ANIQ®</Link>
      <CartIcon />
    </header>
  );
};

export default MainHeader;
