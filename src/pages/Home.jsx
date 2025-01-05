import ListImage from '../components/ListImage';
import logo from '../assets/image/nisalogo.png'

function Home() {
    return(
        <>
        <div className="grid grid-col-1 grid-flow-col gap-4">
            <div className="flex items-center px-14">
                <div className="grid grid-rows-3 grid-flow-row gap-4">
                    <div>
                        <p className="font-serif text-2xl">Welcome to Nisaa cloth Store,
                        Get all our limited products immediately!</p>
                    </div>
                    <div>
                    <a className="btn btn-ghost btn-xs btn-outline rounded-full md:btn-sm lg:btn-sm">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                        </svg>
                        Get Now!
                    </a>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="hidden md:block">
                <ListImage/>
            </div>
        </div>
        </>
    )
}

export default Home;