import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const BookDetails = () => {
    const book = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loader></Loader>;
    }
    console.log(book);
    const { authors, desc, image, publisher, rating, title, url, year, price } =
        book;
    const [readOpen, setReadOpen] = useState(true);
    return (
        <div className="px-4 md:px-10 my-20">
            <div className="items-center border lg:w-4/5 lg:mx-auto md:flex ">
                <div className="md:w-1/2">
                    <img className="w-full object-cover" src={image} alt="" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
                    <div className="my-4">
                        <p>
                            <span className="font-semibold">Authors:</span>{" "}
                            {authors}
                        </p>
                        <p>
                            <span className="font-semibold">Publisher:</span>{" "}
                            {publisher}
                        </p>
                        <p>
                            <span className="font-semibold">Year:</span> {year}
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span>{" "}
                            {rating}
                        </p>
                    </div>
                    <div>
                        {readOpen ? (
                            <p>
                                {desc.substring(0, 100)}...{" "}
                                <button
                                    onClick={() => setReadOpen(!readOpen)}
                                    className="text-blue-400"
                                >
                                    Read More
                                </button>
                            </p>
                        ) : (
                            <p>
                                {desc}{" "}
                                <button
                                    onClick={() => setReadOpen(!readOpen)}
                                    className="text-blue-400"
                                >
                                    Read Less
                                </button>
                            </p>
                        )}
                    </div>
                    <div className="flex gap-3 items-center mt-3">
                        <Link to={url}>
                            <button className="bg-blue-300 py-3 px-4 font-semibold rounded-md">
                                Buy Now
                            </button>
                        </Link>
                        <h4>Price: {price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
