import axios from "axios";

const ACCESS_KEY = "3G-rE5MsKJ5go1p1IzBOlV4ue2cXmI3ySkNLOqPUDIk";

const fetchImagesUnsplash = async (query, page = 1) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`;
  try {
    const response = await axios.get(url);

    if (!response.data || !response.data.results) {
      throw new Error("No results found");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw new Error("Failed to fetch images. Please try again.");
  }
};

export default fetchImagesUnsplash;