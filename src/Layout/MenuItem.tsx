import { ISidebar } from "@/types/sideBar";
import Link from "next/link";
import React from "react";

export const MenuItem = ({ id, link, name, subItem }: ISidebar) => {
  return (
    <>
      {subItem ? (
        // <DropDown subItem={subItem} />
        <p></p>
      ) : (
        <div key={id}>
          <Link href={link}>
            <span
            //   onClick={() => setDrawer(false)}
            //   className={`${isActive(link)} capitalize text-font`}`
            >
              {name}
            </span>
          </Link>
        </div>
      )}
    </>
  );
};
