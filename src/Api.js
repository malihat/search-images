import axios from "axios";

const searchImages = async (term) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term,
                client_id: 'BMtKaf2VKwx9o0AJIQ0mEQDpA9t_3o71w3adoJGSAGA'
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data from Unsplash API:', error);
        return [];
    }
}



export default searchImages;