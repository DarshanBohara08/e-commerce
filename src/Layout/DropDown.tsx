import { ISubItem } from "@/types/sideBar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const DropDown = ({
  subItem,
  isActive,
  pathName,
}: {
  subItem: ISubItem[];
  isActive: (url: string) => string;
  pathName: string;
}) => {
  return (
    <div className={`${pathName} flex flex-col gap-2 px-2 py-2  bg-white`}>
      {subItem.map((i) => {
        return (
          <div key={i.id} className="border-b pb-2 border-gray-200 ">
            <Link href={i.link} passHref>
              <span
                className={`${isActive(i.link)} capitalize text-font text-sm`}
              >
                {i.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
