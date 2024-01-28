import { cn } from "@/lib/utils";
import {  Linkedin, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/esteban-acevedo/", icon: <Linkedin /> },
    { name: "External", link: "https://estebanacevedo.com/", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
