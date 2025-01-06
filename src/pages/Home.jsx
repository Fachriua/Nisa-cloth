import ListImage from '../components/ListImage';
import image1 from '../assets/image/thrift1.jpg';
import image2 from '../assets/image/thrift2.jpg';
import image3 from '../assets/image/thrift3.jpg';
import { Link } from 'react-router-dom';
import ButtonHover from '../components/ButtonHover';

function Home() {
    return(
        <>
        <div className="grid grid-col-2 grid-flow-col gap-4">
            <div className="flex items-center px-14">
                <div className="grid grid-rows-1 grid-flow-row gap-4">
                    <div>
                        <p className="font-serif text-2xl">Welcome to Nisaa cloth Store,
                        Get all our limited products immediately!</p>
                    </div>
                    <div>
                    <Link to="products">
                    <a className="btn btn-ghost btn-xs btn-outline rounded-full mr-3 md:btn-sm lg:btn-sm">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                    </svg>
                    Get Now!
                    </a>
                    </Link>
                    <Link to="products">
                    <a className="btn btn-ghost btn-xs btn-outline rounded-full md:btn-sm lg:btn-sm">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                    Whatsapp
                    </a>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <ListImage/>
            </div>
        </div>


        <div className="grid grid-rows-3 grid-flow-rows h-52 mt-20 gap-2 md:grid-cols-3 mt-20 lg:grid-cols-3 mt-20">
            <div>
                <div
                    className="hero h-44">
                    <img src={image2} alt="" className="object-cover"/>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <p className="mt-8">
                            T-shirt
                        </p>
                        <button><ButtonHover/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="hero h-44">
                    <img src={image3} alt="" className="object-cover"/>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <p className="mt-8">
                            T-shirt
                        </p>
                        <button><ButtonHover/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="hero h-44">
                    <img src={image1} alt="" className="object-cover" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <p className="mt-8">
                            T-shirt
                        </p>
                        <button><ButtonHover/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;