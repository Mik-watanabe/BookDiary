import Navbar from "@/app/components/navbar";

export default function BookPageLayout({
    children, // will be a page or nested layout
  }) {
    return <>
        <Navbar></Navbar>
        <div className="flex justify-center content-center mt-16">
            <div className="max-w-screen-lg bg-white/80 rounded-lg w-full min-h-96 p-7 mx-4 text-black mb-16">
              {children}
            </div>
        </div>
    </>
  }
