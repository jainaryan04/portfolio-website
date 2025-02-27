export default function Navbar() {
    return (
      <div className="h-[10vh] bg-[#EFEFE9] py-4 px-8 w-full overflow-x-hidden">
        <div className="flex justify-end">
          <ul className="flex flex-row gap-x-8 [&>li]:w-24 [&>li]:text-center [&>li]:p-2 [&>li]:rounded-full">
            <li className="bg-[#343330] text-white hover:bg-white hover:text-black">Home</li>
            <li className="bg-blue-500 text-white hover:bg-blue-700">About</li>
            <li className="bg-green-500 text-white hover:bg-green-700">Projects</li>
          </ul>
        </div>
      </div>
    );
  }