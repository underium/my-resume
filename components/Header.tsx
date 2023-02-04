import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

type Props = {
  active: string;
  isAllowed: boolean;
};

export default function Header({ active, isAllowed }: Props) {
  const menus = [
    { name: "Home", href: "/", requiresAuth: true },
    { name: "About", href: "/about", requiresAuth: true },
    { name: "My Resume", href: "/resume", requiresAuth: true },
    { name: "Sign out", href: "/api/sign-out", requiresAuth: true },
    { name: "Sign in", href: "/sign-in", requiresAuth: false },
    { name: "New account", href: "/sign-up", requiresAuth: false },
  ];

  return (
    <div class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <LemonIcon />
        <div class="text-2xl  ml-1 font-bold">
          <a href="/">My Resume {isAllowed.toString()}</a>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => {
          if (isAllowed === menu.requiresAuth) {
            return (
              <li>
                <a
                  href={menu.href}
                  class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                    (menu.href === active ? " font-bold border-b-2" : "")}
                >
                  {menu.name}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
