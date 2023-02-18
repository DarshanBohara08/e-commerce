import { ISubItem } from "@/types/sideBar";
import Link from "next/link";
import React from "react";

export const DropDown = ({
  subItem,
  isActive,
}: {
  subItem: ISubItem[];
  isActive: (url: string) => string;
}) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-2  bg-white">
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
