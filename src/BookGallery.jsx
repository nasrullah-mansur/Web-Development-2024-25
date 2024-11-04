import GalleryItem from "./GalleryItem";

export default function BookGallery({ books }) {
    return (
        <>
            {books.map(book => <GalleryItem key={book.id} gallery={book} />)}
        </>
    )
}
