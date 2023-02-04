import { JSX } from "preact";
import { Button } from "./Button.tsx";

export const NavButton = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Button
      {...props}
      class="rounded !border(white 2) text-white hover:bg-primaryLight !hover:border-primaryLight"
    />
  );
};
