"use client";

import CategoriesLists from "./footer/CategoriesLists";
import SocialLinks from "./footer/SocialLinks";
import SubscribeToNewsletter from "./footer/SubscribeToNewsletter";

const MainFooter = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="pt-20 lg:pt-30 pb-10 space-y-6">
      <SubscribeToNewsletter />
      <CategoriesLists />

      <hr className="border-t-gray-200 border-t my-3" />

      <div className="flex flex-col-reverse gap-3 md:flex-row items-center md:justify-between">
        <p className="text-sm text-gray-400">
          &copy;{currentYear} <b>ANIQ®</b>, Inc. All rights reserved.
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
};

export default MainFooter;
