import axios from 'axios';

const API_KEY = '37887281-69a6e413b8501c16bd9004fb8';
const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '40',
});

export default async function fetchImages(searchQuery, page = 1) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${searchParams}&page=${page}`
  );
  return response.data;
}
