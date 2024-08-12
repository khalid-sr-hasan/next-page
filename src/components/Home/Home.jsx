import Lottie from "lottie-react";
import reader from "../../assets/reader.json";
import { Link, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const Home = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loader></Loader>;
    }
    return (
        <div className="md:flex px-5 md:px-10 my-10 justify-between">
            <div className="md:w-1/2 flex flex-col justify-center">
                <div>
                    <p className="bg-[#FBDB5A] inline-block text-sm px-2 rounded-lg mb-4">
                        ON SALE!
                    </p>
                </div>
                <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    A reader lives a <br className="hidden md:block" /> thousand
                    lives <span className="text-blue-400">before he dies</span>
                </h1>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                    Books are a uniquely portable magic. Books serve to show a
                    man that those original thoughts of his aren’t very new
                    after all. The man who does not read good books is no better
                    than the man who can’t.
                </p>
                <div className="flex items-center gap-2">
                    <Link to="/books">
                        <button className=" flex gap-2 bg-blue-400 text-white font-semibold py-3 px-3 rounded-lg duration-100 ease-in hover:bg-blue-600">
                            <span>Visit Stroe</span>
                            <ShoppingCartIcon className="w-6"></ShoppingCartIcon>
                        </button>
                    </Link>
                    <Link to="/about">
                        <p className="hover:text-blue-500">Learn More</p>
                    </Link>
                </div>
            </div>
            <div className="mt-5 md:w-1/2">
                <div className="w-full lg:w-4/5 lg:ml-auto">
                    <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;
