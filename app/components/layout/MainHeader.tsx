import Link from "next/link";
import CartIcon from "../cart/CartIcon";

const MainHeader = () => {
  return (
    <header className="pb-12 text-4xl flex items-center justify-between">
      <Link href="/">ANIQ®</Link>
      <CartIcon />
    </header>
  );
};

export default MainHeader;
