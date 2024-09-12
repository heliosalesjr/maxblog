import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function MyNavbar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        
        <p className="text-slate-500 font-semibold">Hélio<span className="text-slate-900 font-black">Sal</span></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/posts">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/contact" aria-current="page">
            Contact
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
       
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
