import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Fade as Hamburger } from "hamburger-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [hashFragment, setHashFragment] = React.useState("");

    React.useEffect(() => {
        const handleHashChange = () => {
            const fragment = window.location.hash;
            setHashFragment(fragment);
        };

        window.addEventListener("hashchange", handleHashChange);

        handleHashChange();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const menuItems = ["About Us", "Services", "Latest Work", "Contact"];
    const menuItemsRouting = ["#about", "#services", "#lastest", "#cotact"];

    return (
        <Navbar
            position='static'
            className='border'
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                base: "backdrop-saturate-100 backdrop-blur-none bg-transparent",
                wrapper: "max-w-[312rem] m-0 p-0",
            }}>
            <NavbarBrand className='desktop:ml-[10.625rem] tablet:ml-[5rem] mobile:ml-[1.5rem] cursor-pointer'>
                <Image
                    onClick={() => (window.location.pathname = "/")}
                    src='/trynityflow3.png'
                    width={83}
                    height={83}
                    alt='logo'
                />
            </NavbarBrand>
            <NavbarContent
                justify='center'
                className='mx-[5.5rem] gap-[3.125rem] mobile:hidden'>
                <NavbarItem className='flex items-center'>
                    <Link
                        style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }}
                        className={hashFragment === "#about" ? "active" : ""}
                        color='foreground'
                        href='#about'>
                        O nas
                    </Link>
                </NavbarItem>
                <NavbarItem className='flex items-center'>
                    <Link
                        style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }}
                        className={hashFragment === "#services" ? "active" : ""}
                        color='foreground'
                        href='#services'>
                        Oferta
                    </Link>
                </NavbarItem>
                <NavbarItem className='flex items-center'>
                    <Link
                        style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }}
                        className={hashFragment === "#lastest" ? "active" : ""}
                        color='foreground'
                        href='#lastest'>
                        Ostatnie prace
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent
                justify='end'
                className='mr-[10.625rem] mobile:hidden'>
                <NavbarItem>
                    <Button className='bg-main text-[#fff] font-[500] rounded-full'>Skontaktuj się</Button>
                </NavbarItem>
            </NavbarContent>

            <div className='desktop:hidden tablet:hidden mobile:mr-[2rem] z-50'>
                <Hamburger
                    color='#2746e3'
                    duration={0.5}
                    size={30}
                    toggled={isMenuOpen}
                    toggle={setIsMenuOpen}
                />
            </div>

            <NavbarMenu style={{ backgroundColor: "#0D0D0D", padding: 0, gap: 0, rowGap: 0 }}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem
                        style={{ border: "1px solid #131313", height: 50, display: "flex", alignItems: "center" }}
                        key={`${item}-${index}`}>
                        <Link
                            href={`${menuItemsRouting[index]}`}
                            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                            className='font-display mx-[44px] text-[#FFF] text-[14px] cursor-pointer'>
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
