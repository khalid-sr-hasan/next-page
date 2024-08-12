import { useLoaderData, useNavigation } from "react-router-dom";
import ShowBook from "../ShowBook/ShowBook";
import Loader from "../Loader/Loader";

const Books = () => {
    const { books } = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loader></Loader>;
    }
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-10 my-10">
            {books.map((bookItem) => (
                <ShowBook key={bookItem.isbn13} bookItem={bookItem}></ShowBook>
            ))}
        </div>
    );
};

export default Books;
