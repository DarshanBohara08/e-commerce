import { ISidebar, ISubItem } from "@/types/sideBar";
import Link from "next/link";
import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";
export const MenuItem = ({
  id,
  link,
  name,
  subItem,
  setDrawer,
}: {
  id: number;
  link: string;
  name: string;
  subItem: ISubItem[] | undefined;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const route = useRouter();
  const pathName = route.pathname;
  console.log(pathName);
  let position = "relative";
  if (pathName === "/shop") {
    position = "top-12 left-20 bg-red-600";
  }
  const isActive = (url: string) => {
    const pathName = route.pathname;
    if (pathName === url) {
      return "text-primary";
    } else {
      return "text-font  hover:text-primary";
    }
  };

  return (
    <>
      {subItem ? (
        <>
          <div className="flex flex-row gap-2 items-center">
            <p className="capitalize"> {name}</p>
            {!showDropDown && (
              <BsChevronDown
                onClick={() => setShowDropDown(true)}
                className="text-font text-sm"
              />
            )}
            {showDropDown && (
              <BsChevronUp
                onClick={() => setShowDropDown(false)}
                className="text-font text-sm"
              />
            )}
          </div>
          <div className="lg:absolute ">
            {showDropDown && (
              <DropDown
                pathName={position}
                isActive={isActive}
                subItem={subItem}
              />
            )}
          </div>
        </>
      ) : (
        <div key={id}>
          <Link href={link} passHref>
            <span
              onClick={() => setDrawer(false)}
              className={`${isActive(link)} capitalize text-font`}
            >
              <p> {name}</p>
            </span>
          </Link>
        </div>
      )}
    </>
  );
};
