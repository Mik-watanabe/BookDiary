import SearchBar from "@/app/components/searchBar";

//Intro part of the page. Includes welcome and search bar
export default function Intro(props) {
  return (
    <>
      <div className={`flex flex-col items-center h-[450px] justify-between ${props.className}`}>
        {props.children}
        <SearchBar />
      </div>
    </>
  );
}
