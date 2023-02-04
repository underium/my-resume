import { JSX } from "preact";
import { Link } from "./Link.tsx";

export const NavLink = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...props}
      class="!text-gray-800 px-4 !hover:text-white hover:no-underline"
    />
  );
};
