"use client";

import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    id: "Facebook",
    href: "",
    icon: "/images/icons/facebook.png",
  },
  {
    id: "Instagram",
    href: "",
    icon: "/images/icons/instagram.png",
  },
  {
    id: "X",
    href: "",
    icon: "/images/icons/x.png",
  },
  {
    id: "Youtube",
    href: "",
    icon: "/images/icons/youtube.png",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3 ">
      {SOCIAL_LINKS.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.id}
            className="w-6 h-6 hover:underline"
            title={item.id}
            aria-label={`Follow us on ${item.id}`}
          >
            <Image width={24} height={24} src={item.icon} alt={item.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
