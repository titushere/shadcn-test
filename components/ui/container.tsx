import Link from "next/link";

export default function Container(){
    return (
       <div className="bg-[#1d1929] flex-1">
            <Link href={"/login"} className="text-[#fff]">
                Login page
            </Link>
       </div> 
    );
}
