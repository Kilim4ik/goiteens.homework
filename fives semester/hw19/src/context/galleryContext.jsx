import { createContext, useCallback, useEffect, useState } from "react";
import { fetchData } from "../api";
export const GalleryContext = createContext();
export const GalleryProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(" ");
  const [imgList, setImgList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePaginetion = () => setPage((prev) => prev + 1);
  const handleValue = (txt) => setValue(txt.trim().toLowerCase());
  const resetPage = () => setPage(1);
  const toggleIsLoading = () => setIsLoading((prev) => !prev);
  const handleImageSelect = (img) => setSelectedImage(img);
  const resetSelectedImage = () => setSelectedImage(null);
  const handleError = (err) => {
    if (err) {
      setError(err);
      setImgList([]);
    } else {
      setError(null);
    }
  };
  const getImages = useCallback(async () => {
    resetPage();
    if (value === "") {
      handleError({ message: "Your request is invalid. Nothing was found" });
      return;
    }
    handleError();
    toggleIsLoading();
    try {
      const res = await fetchData(value, 1);
      setImgList(res);
      if (res.length === 0)
        handleError({ message: "Your request is invalid. Nothing was found" });

      console.log(res);
    } catch (err) {
      handleError(err);
    } finally {
      toggleIsLoading();
    }
  }, [value]);
  const getNewListImg = useCallback(async () => {
    toggleIsLoading();
    handleError();
    try {
      const res = await fetchData(value, page);
      setImgList((prev) => [...prev, ...res]);

      console.log(res);
    } catch (err) {
      handleError(err);
    } finally {
      toggleIsLoading();
    }
  }, [page]);

  useEffect(() => {
    getImages();
  }, [getImages]);
  useEffect(() => {
    page !== 1 && getNewListImg();
  }, [getNewListImg]);

  return (
    <GalleryContext.Provider
      value={{
        imgList,
        isLoading,
        error,

        //Searching
        selectedImage,
        handleValue,
        handlePaginetion,

        //Selecting
        handleImageSelect,
        resetSelectedImage,
        //fetch
        getImages,
        getNewListImg,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
