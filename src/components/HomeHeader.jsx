import Link from "next/link";
import {TbGridDots} from "react-icons/tb"

export default function HomeHeader() {
    return (
        <header className="flex justify-end p-5 text-sm">
            <div className="flex space-x-4 items-center">
                <Link href="https://mail.google.com" clssName="hover:underline">Gmail</Link> 
                <Link href="https://image.google.com" clssName="hover:underline">image</Link> 
                <TbGridDots className="bg-transparent hover:gg-gray-200 rounded-full text-4xl p-2" />
                <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover-brightness-105 hover:shadow-md">Sign in</button>
            </div>
        </header>
    );
}