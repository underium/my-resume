import { useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { RadioButton } from "../components/RadioButton.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Props {
  action?: () => void;
}

async function exportPdf(checked: boolean) {
  const response = await fetch(`/api/pdf?short=${checked}`);
  const base64 = await response.text();

  const obj = document.createElement("object");
  obj.style.width = "100%";
  obj.style.height = "842pt";
  obj.type = "application/pdf";
  obj.data = "data:application/pdf;base64," + base64;

  const link = document.createElement("a");
  link.innerHTML = "Download PDF file";
  link.download = "file.pdf";
  link.href = "data:application/octet-stream;base64," + base64;
  link.click();
  link.remove();

  /*
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my-resume.pdf";
  link.click();
  link.remove();
	*/
}

export default function DownloadPdf(props: Props) {
  const checked = useRef<boolean>(false);

  return (
    <div class="p-4 mx-auto max-w-screen-md flex flex-row justify-center items-center w-fit">
      <Button
        onClick={() => {
          console.log("veamos que pasa");
          exportPdf(checked.current);
        }}
      >
        Download PDF
      </Button>
      {/* Insert code to radio button */}
      <RadioButton
        onClick={() => {
          checked.current = !checked.current;
          console.log("veamos que pasa", checked);
        }}
      />
    </div>
  );
}
