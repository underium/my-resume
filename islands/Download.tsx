import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Props {
  action?: () => void;
}

async function exportPdf() {
  await fetch("/api/pdf")
    .then((response) => response.text())
    .then((text) => {
      const a = document.createElement("a");
      a.href = `${text}`;
      a.download = `file-${text}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      console.warn(text);
    });
}

export default function DownloadPdf(props: Props) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Button
        onClick={() => {
          console.log("veamos que pasa");
          exportPdf();
        }}
      >
        Download PDF
      </Button>
      <Button
        onClick={() => {
          console.log("veamos que pasa");
          exportPdf();
        }}
      >
        Download PDF 2
      </Button>
    </div>
  );
}
