import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type Props = {
  children: ComponentChildren;
  // state: ServerState;
  isAllowed: boolean;
};

export function Layout(props: Props) {
  //const isAllowed = !!props.state.user;
  const isAllowed = false;

  const buttProps = isAllowed
    ? { href: "/api/sign-out", text: "Sign Out" }
    : { href: "/sign-in", text: "Sign In" };

  return (
    <>
      <Head>
        <title>Supa Fresh Auth</title>
      </Head>
      <div class="flex h-screen justify-center items-center flex-col bg-gray-100">
        <Header isAllowed={props.isAllowed} active="" />
        <div class="p-4 flex-3 w-full h-full mx-auto overflow-hidden">
          {props.children}
        </div>
        <Footer>
        </Footer>
      </div>
    </>
  );
}
