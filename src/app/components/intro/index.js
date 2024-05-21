import SearchBar from "@/app/components/searchBar";

//Intro part of the page. Includes welcome and search bar
export default function Intro(props) {
  return (
    <>
      <div className={`flex flex-col items-center ${props.className}`}>
        {props.children}
        <SearchBar className="mt-[40px]" />
      </div>
    </>
  );
}
