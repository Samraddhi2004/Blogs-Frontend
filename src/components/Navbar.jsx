import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function App() {

  return (
    <Navbar shouldHideOnScroll className="bg-black">
      <NavbarBrand>
        {/* <p className="font-bold text-inherit text-white text-2xl"></p> */}
        <Link href="/"><img src="/logo.png" className="w-auto h-12"/></Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex md:gap-24" justify="center">
        <NavbarItem>
          <Link className="text-white text-lg hover:text-pastal" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/blogs" className="text-white text-lg hover:text-pastal">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg hover:text-pastal" href="/create">
            Create
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
