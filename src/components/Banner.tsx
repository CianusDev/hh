import { cn } from "@/lib/utils";

type BannerProps = {
  title: string;
  description?: string;
  className?:string;
};


const Banner = (props: BannerProps) => {
  return (
    <nav className={cn(props.className ? props.className : "h-52",'w-full bg-[#1E6F65] justify-center items-center flex p-4 flex-col ')}>
        <h1 className="text-white text-[1.5rem] max-md:text-xl text-center   mt-10">{props.title}</h1>
        <p className="text-white text-xl mt-5">
          {props.description}
        </p>
    </nav>
  )
}

export default Banner