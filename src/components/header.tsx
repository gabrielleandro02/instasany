import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/logo.svg';
import SearchIcon from '/public/icon-search.svg';
import UserIcon from '/public/icon-user.svg';
import GridContainer from "./grid";

const defaultStyle = 'px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all';
const activedStyle = 'px-3 py-1 text-white bg-green-actived text-white rounded-full'; 
const menus = [
    {
        label: 'Início',
        class: activedStyle
    },
    {
        label: 'Benefícios',
        class: defaultStyle
    },
    {
        label: 'Para quem é o curso?',
        class: defaultStyle
    },
    {
        label: 'Sobre nós',
        class: defaultStyle
    }
];

const Header = (): ReactNode => {
    return (
        <header className="relative w-full h-24 bg-green-primary flex item-center">
            <GridContainer className="flex items-center justify-between">
                <Image
                    src={Logo}
                    alt={"logo-instasany"}
                />
                <div className="flex items-center gap-20">
                    <nav className="flex gap-2">
                        {menus.map((menu, menuIndex) => {
                            return (
                                <Link
                                    key={menuIndex}
                                    href="#"
                                    className={menu.class}
                                >
                                    {menu.label}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className="flex items-center gap-6">
                        <button>
                            <Image
                                src={SearchIcon}
                                alt={"search-icon"}
                            />
                        </button>
                        <button className="flex items-center gap-2">
                            <Image
                                src={UserIcon}
                                alt={"user-icon"}
                            />
                            <span className="text-white font-medium">Fazer login</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    );
}

export default Header
