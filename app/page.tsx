import Link from "next/link";



export default function Home() {
  return (
      <div className="bg-[#1d1929] h-screen flex items-center justify-center">
          <h1 className="text-4xl text-[#fff]">Welcome Page</h1>
          <Link href={"/login"} className="text-[#fff] ml-4">
              Go to Login
          </Link>
      </div>
  );
}
