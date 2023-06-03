import axios from 'axios';

async function getImgData(name, page) {
  const API_KEY = '36022037-9b948c8f36670e25d892986bf';
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    q: name,
    page: page,
    per_page: 12,
    safesearch: true,
  });
  return await axios.get(`${BASE_URL}?${searchParams}`);
}

export { getImgData };
