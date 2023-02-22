import { JSX } from "preact";
import { JobElement } from "./cv/job-element/index.tsx";
import { EducationElement as EduElement } from "./cv/education-element/index.tsx";
import { ItemsListElement as ItemsList } from "./cv/items-list/index.tsx";
import { LanguageElement } from "./cv/languages/index.tsx";

import JobsData from "../assets/json/jobs.json" assert { type: "json" };
import EducationData from "../assets/json/edu.json" assert { type: "json" };

interface ILinkElementProps {
  href: string | undefined;
  label: string;
  icon: string;
}

interface ITestCVProps {
  short: boolean | undefined;
}

const OtherData = {
  "skills": [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Creativity",
    "Adaptability",
    "Attention to Detail",
    "Flexibility",
  ],
  "interests": [
    "Music",
    "Piano",
    "Books",
    "Writing",
    "Video Games",
    "Movies",
    "Warhammer 40K",
    "Rollerblading",
    "Yoga",
    "Training",
    "Tea",
    "Meditation",
  ],
};

const LangData = {
  "es": {
    level: "Native",
    lang: "Spanish",
  },
  "en": {
    level: "C1",
    lang: "English",
  },

  "de": {
    level: "B2 / C1",
    lang: "German",
  },
};

const LinkElements: ILinkElementProps[] = [
  {
    href: "mailto:hola@javiercaceres.es",
    label: "hola@javiercaceres.es",
    icon: "fas fa-envelope",
  },
  {
    href: "https://caceres.dev",
    label: "caceres.dev",
    icon: "fas fa-globe",
  },

  {
    href: "tel:+34689724026",
    label: "+34 689 724 026",
    icon: "fas fa-phone",
  },
  {
    href: "https://github.com/underium",
    label: "github.com/underium",
    icon: "fab fa-github",
  },
  {
    href: undefined,
    label: "Madrid, Spain",
    icon: "fa-solid fa-location-dot",
  },
  {
    href: "https://www.linkedin.com/in/caceresdev",
    label: "www.linkedin.com/in/caceresdev",
    icon: "fab fa-linkedin",
  },
];

const LinkElement = (props: ILinkElementProps) => {
  const { href, label, icon } = props;
  return (
    <div class="flex flex-row justify-start items-center space-x-1">
      <h4 class="w-4 h-4 flex justify-center items-center">
        <i class={icon}></i>
      </h4>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
};

const Section = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const { id, children } = props;
  return (
    <section
      id={id}
      class="flex flex-row space-between items-start border-b border-gray-200 border-solid p-4 box-border"
    >
      {children}
    </section>
  );
};

export const TestCV = (props: ITestCVProps) => {
  return (
    <div
      id="#resume"
      class="flex flex-3 justify-center items-center flex-col overflow-scroll "
    >
      <div class="p-4 mx-auto max-w-screen-md bg-white h-fit overflow-scroll relative lg:shadow-lg lg:border lg:border-gray-400">
        <header class="border-b border-gray-200 border-solid px-2 py-4 space-y-1">
          <h1 class="text-4xl font-bold">Javier Cáceres</h1>
          <h2 class="text-2xl text-gray-500">
            Software Engineer
          </h2>
        </header>
        <Section id="contact">
          <div class="grid grid-cols-2 gap-y-2 text-body">
            {LinkElements.map((key) => <LinkElement {...key} />)}
          </div>
        </Section>

        <Section id="about">
          <h3 class="grow w-1/4">About</h3>
          <article class="grow-0 w-3/4 text-justify">
            <p class="text-body font-helvetica leading-6">
              I started my freelance career back in 2002 after I landed a
              position to regularly collaborate with the HR team at El Corte
              Inglés, S.A. More than 20 years later I’ve taken part into a
              variety of software engineering challenges that have delivered
              hundreds of digital products such as e-learning courses, websites,
              and full stack enterprise-grade web applications. Apart of the
              requirements of the projects I’m professionally involved with, I
              spend my time researching new tech to include it in my portfolio
              or just for fun. Some of those are Svelte, WebGL, Rust, Deno and
              more.
            </p>
          </article>
        </Section>

        <Section id="work-experience">
          <h3 class="grow w-1/4">
            Highlighted<br />Works
          </h3>

          <section id="work" class="w-3/4 text-justify space-y-8">
            {Object.values(JobsData).map((job, index) => {
              if (props.short === false || job.isTop === true) {
                return <JobElement {...job} />;
              }
            })}
          </section>
        </Section>

        <Section id="work-experience">
          <h3 class="grow w-1/4">
            Languages
          </h3>

          <section
            id="work"
            class="w-3/4 text-justify grid grid-cols-4 gap-4 items-stretch"
          >
            {Object.values(LangData).map((language) => {
              return <LanguageElement {...language} />;
            })}
          </section>
        </Section>

        <Section id="work-experience">
          <h3 class="grow w-1/4">
            Education
          </h3>

          <section id="work" class="w-3/4 text-justify space-y-8">
            {Object.values(EducationData).map((education) => {
              return <EduElement {...education} />;
            })}
          </section>
        </Section>

        <Section id="work-experience">
          <h3 class="grow w-1/4">
            Soft Skills
          </h3>

          <section
            id="work"
            class="w-3/4 text-justify grid grid-cols-4 gap-2 items-stretch"
          >
            {OtherData["skills"].map((item) => {
              return <ItemsList item={item} />;
            })}
          </section>
        </Section>

        <Section id="work-experience">
          <h3 class="grow w-1/4">
            Interests
          </h3>

          <section
            id="work"
            class="w-3/4 text-justify grid grid-cols-4 gap-2 items-stretch"
          >
            {OtherData["interests"].map((item) => {
              return <ItemsList item={item} color="blue" />;
            })}
          </section>
        </Section>
      </div>
    </div>
  );
};
