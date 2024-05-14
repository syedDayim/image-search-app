import axios from 'axios';

const searchImage = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID KylGTJ9yLTidHiG05LB9546dHS5ejDEznFxjs-yDvI4',
        },
        params:{
            query: searchTerm,
        }
    });
    return response.data.results
}

export default searchImage

