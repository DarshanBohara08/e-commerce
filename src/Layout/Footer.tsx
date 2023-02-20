import { quickLink } from "@/Data/QuickLink";
import { socialMedia } from "@/Data/SocialMedia";
import { IQuickLink } from "@/types/quickLink";
import { ISocialMedia } from "@/types/socialMediaLink";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-bgColor text-white lg:px-12 px-4 py-6 flex flex-col gap-4 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-2 ">
        <h4 className="text-lg font-semibold">Quick Link</h4>
        <div className="flex flex-col gap-2 ">
          {quickLink.map((i: IQuickLink) => {
            return (
              <div key={i.id}>
                <Link className="capitalize font-thin " href={i.link}>
                  {i.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg ">Contact Us</h3>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-row gap-6">
            <picture className=" ">
              <img
                className="rounded-full p-3 bg-primary"
                src="/Assets/navigation.png"
                alt="location"
              />
            </picture>
            <div>
              <h2>Head Office</h2>
              <p className="text-gray-400 text-thin">123,street,city</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <picture className="">
              <img
                className="rounded-full p-3 bg-primary"
                src="/Assets/phone-call.png"
                alt="Phone"
              />
            </picture>
            <div>
              <h2>PhoneNumber</h2>
              <p className="text-gray-400 text-thin">+123568895</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <picture className="">
              <img
                className="rounded-full p-3 bg-primary"
                src="/Assets/mail.png"
                alt="Mail"
              />
            </picture>
            <div>
              <h2>Email</h2>
              <p className="text-gray-400 text-thin">email@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold">Social Media</h4>
        <div className="flex flex-col gap-4">
          {socialMedia.map((i: ISocialMedia) => {
            return (
              <div key={i.id}>
                <Link
                  href={i.link}
                  className="flex flex-row gap-4 items-center "
                >
                  <picture>
                    <img className="w-10 h-10" src={i.src} alt="socialmedia" />
                  </picture>
                  <span className="capitalize">{i.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
