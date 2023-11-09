"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BsSignpostSplit } from "react-icons/bs";
import { SearchBar } from "../searchBar";

const DynamicMultiButton = dynamic(
  async () => {
    return (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton;
  },
  { ssr: false }
);

export const TopNavigation = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const path = usePathname();

  useEffect(() => {
    if (path === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [path]);

  return !isHomePage ? (
    <div
      aria-labelledby="Navigation Menu"
      className="flex justify-between items-center p-2 sticky top-0 left-0 bg-black/30 backdrop-blur-sm z-10"
    >
      <div className="w-1/2">
        <SearchBar placeholder="Search for people"  className="bg-gray-900 outline-none w-full px-2 text-lg"/>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <div
          className="border p-2 rounded-lg  cursor-pointer text-xl"
          aria-describedby="my post"
          role="link"
        >
          <BsSignpostSplit />
        </div>
        <DynamicMultiButton />
      </div>
    </div>
  ) : null;
};
