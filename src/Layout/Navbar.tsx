import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { sidebarData } from "@/Data/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem } from "./MenuItem";
export const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const route = useRouter();
  const isActive = (url: string) => {
    const pathName = route.pathname;
    if (pathName === url) {
      return "text-primary";
    } else {
      return "text-font  hover:text-primary";
    }
  };
  return (
    <div className="bg-red-600">
      <div className="bg-yellow-600 sm:hidden flex justify-between items-center p-4">
        <picture>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
            alt="logo"
          />
        </picture>
        <BiMenu onClick={() => setDrawer(true)} className="text-4xl" />
      </div>
      <div>
        <Drawer
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
          direction="top"
          className="drawer"
        >
          <div className="pt-4 px-4 flex flex-col gap-10">
            <div className="flex justify-between items-center">
              <picture>
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
                  alt="logo"
                />
              </picture>
              <AiOutlineClose
                className="text-2xl text-primary"
                onClick={() => setDrawer(false)}
              />
            </div>
            <div className="flex flex-col gap-3">
              {sidebarData.map((i) => {
                return (
                  <>
                    <MenuItem
                      id={i.id}
                      link={i.link}
                      name={i.name}
                      subItem={i.subItem}
                      key={i.id}
                    />
                    ;
                  </>
                );

                // return (
                //   <div key={i.id}>
                //     <Link href={i.link}>
                //       <span
                //         onClick={() => setDrawer(false)}
                //         className={`${isActive(i.link)} capitalize text-font`}
                //       >
                //         {i.name}
                //       </span>
                //     </Link>
                //   </div>
                // );
              })}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
