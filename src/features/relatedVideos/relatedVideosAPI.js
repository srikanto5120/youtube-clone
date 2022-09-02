import axios from '../../utils/axios';

export const getRelatedVideos = async ({ currentVideoId, tags }) => {
    const limit = 5;
    const queryString =
        tags?.length > 0
            ? `${tags
                  .map((tag) => `tags_like=${tag}`)
                  .join('&')}id_ne=${currentVideoId}&_limit=${limit}`
            : `id_ne=${currentVideoId}&_limit=${limit}`;
    console.log(queryString);
    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};
