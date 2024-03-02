export default function Navbar() {
  return (
    <div id="navbar">
      <form className="h-[5vh]">
        <input
          type="text"
          className="h-[100%] rounded-sm bg-white text-black"
          placeholder="Search..."
        ></input>{" "}
        &nbsp;
        <button className="btn bg-secondary h-[100%]">Search</button>
      </form>
    </div>
  );
}
