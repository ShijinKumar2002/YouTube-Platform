import { TiHomeOutline } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineSwitchAccount, MdHistory, MdPlaylistPlay, MdOutlineSlideshow, MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import Video from "./Video";

export default function Main() {

    return (
        <div className="flex pt-16 lg:pt-20">
            <div className="text-white fixed  left-0 w-20 lg:w-64 bg-black h-screen p-2 overflow-y-scroll"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="mt-2 flex flex-col space-y-4">
                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><TiHomeOutline /></i>
                        <span className="hidden lg:block ms-2">Home</span>
                    </a>

                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><SiYoutubeshorts /></i>
                        <span className="hidden lg:block ms-2">Shorts</span>
                    </a>

                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdOutlineSubscriptions /></i>
                        <span className="hidden lg:block ms-2">Subscribe</span>
                    </a>

                    <hr className="border-gray-600" />

                    <h1 className="hidden lg:block p-1 font-bold">You </h1>

                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdOutlineSwitchAccount /></i>
                        <span className="hidden lg:block ms-2">Your Channel</span>
                    </a>

                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdHistory /></i>
                        <span className="hidden lg:block ms-2">History</span>
                    </a>

                  
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdPlaylistPlay /></i>
                        <span className="hidden lg:block ms-2">Playlist</span>
                    </a>

                  
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdOutlineSlideshow /></i>
                        <span className="hidden lg:block ms-2">Your Videos</span>
                    </a>

                    
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><MdAccessTime /></i>
                        <span className="hidden lg:block ms-2">Watch Later</span>
                    </a>

                   
                    <a href="#" className="flex items-center justify-center lg:justify-start">
                        <i className="text-2xl"><BiLike /></i>
                        <span className="hidden lg:block ms-2">Liked Videos</span>
                    </a>

                    <hr className="border-gray-600" />
                </div>

            </div>
            <Video />
        </div>
    );


}