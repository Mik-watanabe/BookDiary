"use client";
import {useRouter} from 'next/navigation';
export default function Navbar() {
  const router = useRouter();
  
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get('title');
    router.push(`/search?title=${title}`)
  }

  return (
    <div id="navbar">
      <form className="h-[50px]" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          className="h-[100%] rounded-sm bg-white text-black"
          placeholder="Search..."
        ></input>
        &nbsp;
        <input
          type="submit"
          className="btn bg-secondary"
          value="Search"
        ></input>
      </form>
    </div>
  );
}
