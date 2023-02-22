import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { ServerState } from "../routes/_middleware.ts";

type Props = {
  children: ComponentChildren;
  state: ServerState;
  isPrint?: boolean;
};

export function Layout(props: Props) {
  const isAllowed = !!props.state.user;

  return (
    <>
      <Head>
        <title>Supa Fresh Auth</title>
      </Head>
      <div class="flex h-screen justify-center items-center flex-col bg-gray-100">
        <Header isAllowed={isAllowed} active="" />
        <div class="flex-3 w-full h-full mx-auto overflow-auto">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}
