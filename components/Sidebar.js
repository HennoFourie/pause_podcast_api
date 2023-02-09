import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/outline'

function Sidebar() {
    return (
        <div className='text-dark p-5 text-sm border-r border-dark overflow-y-scroll scrollbar-hide h-screen'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className="h-5 w-5" />
                    <p>Search</p>
                </button>
                {/* <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className="h-5 w-5" />
                    <p>Your Library</p>
                </button> */}

                <hr className='border-t-[0.1px] border-dark' />

                {/* <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircleIcon className="h-5 w-5" />
                    <p>Create Playlist</p>
                </button> */}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className="h-5 w-5" />
                    <p>Liked Podcasts</p>
                </button>
                
                <hr className='border-t-[0.1px] border-dark' />

                {/* Playlists */}

                {/* <p className='cursor-pointer hover:text-white'>Playlist name...</p> */}
                {/* <p className='cursor-pointer hover:text-white'>Playlist name...</p> */}
                {/* <p className='cursor-pointer hover:text-white'>Playlist name...</p> */}

            </div>
        </div>
    )
}

export default Sidebar
