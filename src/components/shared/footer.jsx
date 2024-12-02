import { useNavigate, Link } from "react-router-dom";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "BTS", href: "/behind-the-scenes" },
  { title: "Blog", href: "/blog" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
  { title: "Donations", href: "/" },
];

// eslint-disable-next-line react/prop-types
const NavLink = ({ title, href }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    () => navigate(href);
  };

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer hover:text-butterscotch"
    >
      <Link to={href}>{title}</Link>
    </li>
  );
};
function Footer() {
  return (
    <footer className="text-center border-t px-5 py-5 flex flex-col items-center gap-6 md:gap-16">
      <p className="text-4xl md:text-9xl font-bold ">Concert Photography</p>

      <ul className=" grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row items-center text-white-smoke gap-x-4 gap-y-6 md:gap-11 border-y px-4 py-4 w-full max-w-4xl justify-center">
        {navLinks.map((link, index) => (
          <NavLink key={index} title={link.title} href={link.href} />
        ))}
      </ul>
      <div className="flex w-full text-xs justify-between">
        <a href="privacy-policy">
          <p className="text-zinc-400 text-xs">Privacy Policy</p>
        </a>
        <p className="text-zinc-400 text-xs">Created By TADC</p>
      </div>
    </footer>
  );
}
export default Footer;
