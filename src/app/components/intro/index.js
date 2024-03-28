import SearchBar from "@/app/components/searchBar";

//Intro part of the page. Includes welcome and search bar
export default function Intro({ children }) {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        {children}
        <SearchBar />
      </div>
    </>
  );
}
