import { Head } from "$fresh/runtime.ts";
import DownloadPdf from "../islands/Download.tsx";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
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
    </>
  );
}
