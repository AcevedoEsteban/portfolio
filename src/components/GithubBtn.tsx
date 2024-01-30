import { Github } from "lucide-react";
import Link from "next/link";
import '../app/globals.css'; // Adjusted path to globals.css

const GithubBtn = () => {
  return (
    <Link href={"https://github.com/AcevedoEsteban"} target="blank" 
      className="animate-pulse absolute left-0 bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md border-y border-r border-black hover:bg-primary hover:text-white hover:animate-none shine-effect"
    >
      <Github />
      <span className="font-rubik text-2xl max-sm:text-xl text-white">Github</span> {/* Text white class added */}
    </Link>
  );
};

export default GithubBtn;
