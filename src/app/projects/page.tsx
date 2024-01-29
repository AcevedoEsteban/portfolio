import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Anzer Intelligence Platform",
      description:
        "Anzerbase is a revolutionary sales intelligence platform that securely gathers and organizes market and competitor insights, sales pipeline data, and business rules in one centralized location.",
      tags: ["Material UI", "Threejs", "Reactjs"],
      link: "https://github.com/AcevedoEsteban",
    },
    {
      title: "Ecommerce",
      description:
        "Ecommerce is a simple ecommerce app where you can add, edit, delete products",
      tags: [ "Typescript", "Nextjs"],
      link: "https://github.com/AcevedoEsteban",
    },
    {
      title: "The Modulus Exchange",
      description:
        "Modulus crypto exchange solution is a comprehensive, secure, and fully customizable white-label crypto exchange platform for businesses who want to launch their own exchange or brokerage.",
      tags: ["Node.js", "Chartjs", "React.js"],
      link: "https://github.com/AcevedoEsteban",
    },
    {
      title: "THREE portals - three 3d Portals",
      description:
        "ChatApp is similar to instagram, you can create, edit, delete, like,comment, post and  Follow, unfollow users",
      tags: ["Reactjs", "Javascript"],
      link: "https://github.com/AcevedoEsteban/THREE-portals",
    },
    {
      title: "Clients List add, edit, delete clients",
      description:
        "A simple client list app where you can add, edit, delete clients",
      tags: ["Nextjs", "Tailwindcss"],
      link: "https://acevedoesteban.github.io/client-list/",
    },
    {
      title: "NewsLetter - Create your own newsletter",
      description:
        "Select your favorite news source and create your own newsletter.",
      tags: ["Nextjs", "jsPDF", "html2canvas"],
      link: "https://github.com/AcevedoEsteban/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
