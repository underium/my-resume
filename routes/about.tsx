import { Head } from "$fresh/runtime.ts";
import DownloadPdf from "../islands/Download.tsx";
import { asset } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="flex h-screen justify-center items-center flex-col">
        <Header active="false" />
        <div class="p-4 flex-3 w-full h-full mx-auto">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Nothing to see here (yet)
          </p>
          <DownloadPdf />
          <p>
            <a
              target="blank"
              rel="noreferrer"
              href={asset("my-resume.pdf")}
            >
              View brochure
            </a>
          </p>
        </div>
        <Footer>
          <div>test</div>
        </Footer>
      </div>
    </>
  );
}
