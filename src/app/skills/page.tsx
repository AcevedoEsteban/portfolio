import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import node from '../../../public/node.jpg'
import tailwind from '../../../public/tailwindcss.png'
import redis from '../../../public/redis.png'
import docker from '../../../public/docker.png'
import cypress from '../../../public/cypress.jpg'
import git from '../../../public/git.png'
import expressjs from '../../../public/expressjs.png'
import postgres from '../../../public/postgres.png'
import prettier from '../../../public/prettier.png'
import postman from '../../../public/postman.png'
import ubuntu from '../../../public/ubuntu.png'
import shadcn from '../../../public/shadcn.png'
import mongoDB from '../../../public/mongoDB.jpg'
import graphQL from '../../../public/graphQL.png'
import lambda from '../../../public/lambda.png'

import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
const skillPage = () => {

    const language = [
        {alt:"js", img:js},
      { alt: "ts", img: ts },
        { alt: "postman", img: postman },
      { alt: "cypress", img: cypress },
    ]
     const webDevelopment = [
        {alt:"html", img:html},
        {alt:"css", img:css},
        {alt:"js", img:js},
        { alt: "ts", img: ts },
        {alt:"react", img:react},
       
     ]
       const secondWebDevelopment = [
        
        {alt:"nextjs", img:nextjs},
       { alt: "scss", img: scss },
        { alt: "prettier", img: prettier },
        {alt:"shadcn", img:shadcn},
        {alt:"tailwind", img:tailwind},
     ]
       const backendDevelopment = [
         { alt: "node", img: node },
         { alt: "express", img: expressjs },
         { alt: "postgres", img: postgres },
         { alt: "redis", img: redis },
         { alt: "graphql", img: graphQL },
         {alt:"mongoDB", img:mongoDB},
    ]
    const devOps = [
      { alt: "ubuntu", img: ubuntu },
      { alt: "docker", img: docker },
      { alt: "github", img: github },
      { alt: "git", img: git },
      { alt: "lambda", img: lambda },
      { alt: "vscode", img: vscode },

      
    ]
    
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
        
        </p>

        <div className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Web Development
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={webDevelopment} />
        </div>
        </div>
        
        <div className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={secondWebDevelopment} />
        </div>
        </div>

        
        <div className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Backend Development
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={backendDevelopment} />
        </div>
        </div>


        <div className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           DevOps and Development        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={devOps} />
        </div>
        </div>

        
        <div className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Programming Languages & Testing
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </div>


      </div>
    </div>
  );
};

export default skillPage;
