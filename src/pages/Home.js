import { useSelector } from 'react-redux';
import VideoGrid from '../components/grid/VideoGrid';
import Tags from '../components/tags/Tags';
import Pagination from '../components/ui/Pagination';

export default function Home() {
    const { videos } = useSelector((state) => state.videos);
    const pageNumber = videos.length;
    console.log(pageNumber);

    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination pageNumber={2} />
        </>
    );
}
