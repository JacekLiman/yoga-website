import { navigation } from "../data";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="p-2 text-sm" href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
