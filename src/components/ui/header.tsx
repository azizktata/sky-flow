"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";

import { Phone } from "lucide-react";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/#about" },
    { label: "Services", path: "/#services" },
    { label: "Contact us", path: "/#contact" },
  ];
  const handleWhatsAppCall = () => {
    const phoneNumber = "21698797410";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBlurred
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Link href={"/"} className="font-bold text-inherit">
            <Image src="/logo-skyflow.png" alt="logo" width={50} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16 text-lg" justify="center">
        <NavbarItem>
          <Link color="foreground" className="hover:text-gray-500" href="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            className="hover:text-gray-500"
            href="/#services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base hover:text-gray-500" href="/#about">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base hover:text-gray-500" href="/#contact">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="flex gap-2 text-[#DD7DB8] border-[#DD7DB8]"
            href="#"
            variant="bordered"
            onPress={handleWhatsAppCall}
          >
            <Phone size={16} />
            <span>+216 98 797 410</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col  gap-8 pt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${item}-${index}`}
            className="border-b border-gray-300 pb-2 w-auto"
          >
            <Link
              className="w-auto text-xl"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
