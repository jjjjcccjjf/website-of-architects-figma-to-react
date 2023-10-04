import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="xl:mt-[120px]">
      <h2 className="font-light leading-normal text-woa-white-400 xl:text-[64px]">
        Our Projects
      </h2>
      <div className="mt-[60px] flex flex-wrap gap-[30px]">
        <ProjectItem
          imageUrl="/projects/projectitem1.jpg"
          projectName="Sample Project 1"
          link="/"
          widthClass="w-[570px]"
        />
        <ProjectItem
          imageUrl="/projects/projectitem2.jpg"
          projectName="Sample Project 2"
          link="/"
          widthClass="w-[570px]"
        />
        <ProjectItem
          imageUrl="/projects/projectitem3.jpg"
          projectName="Sample Project 3"
          link="/"
          widthClass="w-[270px]"
        />
        <ProjectItem
          imageUrl="/projects/projectitem4.jpg"
          projectName="Sample Project 4"
          link="/"
          widthClass="w-[470px]"
        />
        <ProjectItem
          imageUrl="/projects/projectitem5.jpg"
          projectName="Sample Project 5"
          link="/"
          widthClass="w-[370px]"
        />
      </div>
      <div className="flex justify-end w-full">
        <Button variant="black" className="mt-[30px]">
          ALL PROJECTS &rarr;
        </Button>
      </div>
    </section>
  );
}

function ProjectItem({
  imageUrl,
  projectName,
  link,
  widthClass,
}: {
  imageUrl: string;
  projectName: string;
  link: string;
  widthClass?: string;
}) {
  return (
    <div className={cn(widthClass, "relative h-[255px]")}>
      <Image src={imageUrl} alt={projectName} fill />
      <a
        href={link}
        className="absolute flex h-full w-full flex-col  p-[20px] text-white opacity-0 transition-opacity hover:bg-zinc-800/90 hover:opacity-100"
      >
        <span className="line-clamp-2  min-h-[135px] max-w-[270px] text-[64px] font-bold leading-none">
          {projectName}
        </span>
        <span className=" mt-[10px] text-xs tracking-[.25em] ">
          VIEW MORE &rarr;
        </span>
      </a>
    </div>
  );
}