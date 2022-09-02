import axios from '../../utils/axios';

export const getVideos = async (tags, search, start, end) => {
    console.log(tags, search, start, end);
    let queryString = '';
    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join('&');
    }
    if (search !== '') {
        queryString += `&q=${search}`;
    }
    const response = await axios.get(`/videos/?_start=${start}&_end=${end}&&${queryString}`);

    return response.data;
};
