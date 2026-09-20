type NavbarProps = {
    isOpen: boolean;
};

export const Navbar = ({ isOpen }: NavbarProps) => {
    return (
        <nav className={isOpen ? "" : ""}>
            <a className="p-3" href="/#start">
                Start
            </a>
            <a className="p-3" href="/#about">
                About
            </a>
            <a className="p-3" href="/#projects">
                Projects
            </a>
            <a className="p-3" href="/#skills">
                Skills
            </a>
            <a className="p-3" href="/#certifications">
                Certifications
            </a>
            <a className="p-3" href="/#contact">
                Contact
            </a>
        </nav>
    );
};
