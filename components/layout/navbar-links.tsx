import Link from "next/link";

interface NavbarLinksProps {
    onNavItemClick: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ onNavItemClick }) => {
    const links = [
        { href: "/gramado-talks", label: "Gramado Talks" },
        { href: "/programa-do-caique", label: "Programa do Caíque" },
        { href: "/politica", label: "Política" },
        { href: "/geral", label: "Geral" },
        { href: "/economia", label: "Economia" },
        { href: "/turismo", label: "Turismo" },
        { href: "/cultura", label: "Cultura" },
    ];

    return (
        <>
            {links.map((link) => (
                <li className="nav-item" key={link.href}>
                    <Link href={link.href} className="nav-link text-nowrap" onClick={onNavItemClick}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavbarLinks;
