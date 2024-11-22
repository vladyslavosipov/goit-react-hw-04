import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import fetchImagesUnsplash from "../fetchImagesUnsplash";
import "modern-normalize";
import s from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setError("Please enter a search query.");
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image) => setSelectedImage(image);

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const imageResults = await fetchImagesUnsplash(query, page);
        setImages((prevImages) => [...prevImages, ...imageResults.results]);
      } catch (error) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div className={s.wrapper}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;