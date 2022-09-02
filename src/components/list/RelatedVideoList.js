import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideoList({ currentVideoId, tags }) {
    const dispatch = useDispatch();
    const { isLoading, relatedVideos, isError, error } = useSelector(
        (state) => state.relatedVideos
    );
    useEffect(() => {
        dispatch(fetchRelatedVideos({ currentVideoId, tags }));
    }, [dispatch, currentVideoId, tags]);

    let content = null;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if (!isError && !isLoading && relatedVideos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }
    if (!isError && !isLoading && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (
            <RelatedVideoListItem key={video.id} video={video} />
        ));
    }

    return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
