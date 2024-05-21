import Image from "next/image";
import bookDiaryLogo from "./bookDiaryLogo.svg";

export default function Navbar() {
  return (
    <>
      <div className="h-[54px] flex items-center pl-[40px]">
        <Image src={bookDiaryLogo} className="" alt="BookDiary Logo" />
      </div>
    </>
  );
}
