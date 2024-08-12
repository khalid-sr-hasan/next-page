import React from "react";
import { Link } from "react-router-dom";

function ShowBook({ bookItem }) {
    const { image, price, title, subtitle, isbn13 } = bookItem;
    return (
        <Link to={`/book/${isbn13}`}>
            <div className="shadow-lg border rounded-md relative overflow-hidden transition duration-200 transform hover:-translate-y-2">
                <img
                    className="object-cover w-full"
                    src={image}
                    alt="book-image"
                />
                <div className="absolute flex flex-col inset-0 px-5 py-4 bg-black bg-opacity-75 opacity-0 transition-opacity duration-400 hover:opacity-100 ">
                    <h3 className="text-gray-100 text-lg">{title}</h3>
                    <p className="text-gray-200 mt-5">
                        {subtitle ? subtitle : "No subtitle here"}
                    </p>
                    <p className="text-sm mt-auto tracking-wide text-gray-300">
                        {price}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ShowBook;
