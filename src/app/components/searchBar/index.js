"use client";

import searchIcon from "./searchIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Redirects to search page with the input only if the search input is non empty
export default function Search(props) {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");

    if (title.trim().length != 0) router.push(`/search?title=${title}`);
  }

  return (
    <div className={props.className}>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] h-[56px] rounded-[50px] bg-white"
      >
        <button className="inline w-[10%] h-full">
          <Image
            src={searchIcon}
            width={10}
            height={10}
            className="w-full p-[14px] h-full inline"
            alt="Search Icon"
          />
        </button>
        <input
          name="title"
          type="text"
          className="bg-inherit h-full w-[90%] rounded-r-[50px] focus:outline-none text-black"
        ></input>
      </form>
    </div>
  );
}
