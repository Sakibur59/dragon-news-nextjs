"use client";

import userAvatar from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="w-300 mx-auto flex justify-between  mt-6">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : user ? (
        <div className="flex items-center gap-2">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            alt="user avatar"
            width={60}
            height={60}
          ></Image>
          <button className="btn bg-purple-500 text-white" onClick={async ()=>await authClient.signOut()}>Logout</button>
          <Link href={'/my-profile'}><button className="btn bg-purple-500 text-white">Profile Update</button></Link>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
