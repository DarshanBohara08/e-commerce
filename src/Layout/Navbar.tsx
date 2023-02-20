import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { sidebarData } from "@/Data/Navbar";
import { MenuItem } from "./MenuItem";
export const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="">
      <div className="lg:hidden sticky">
        <div className="flex justify-between items-center p-4">
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
            direction="right"
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
                        setDrawer={setDrawer}
                      />
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
      <div className=" hidden lg:flex w-full px-8">
        <div className="flex flex-row w-full gap-32 items-center p-4">
          <div>
            <picture>
              <img
                src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
                alt="logo"
              />
            </picture>
          </div>
          <div className="flex flex-row gap-16">
            {sidebarData.map((i) => {
              return (
                <>
                  <MenuItem
                    id={i.id}
                    link={i.link}
                    name={i.name}
                    subItem={i.subItem}
                    key={i.id}
                    setDrawer={setDrawer}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
