const axios = require('axios').default;
const API_KEY = `31355844-a483d10f60d89145c2ddc6122`;
export const per_page = 100;

export async function request(request, page = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${request}&type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
