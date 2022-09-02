import { useDispatch } from 'react-redux';
import { increment } from '../../features/pagination/paginationSlice';

/* eslint-disable no-plusplus */
export default function Pagination({ pageNumber }) {
    const arr = Array.from(Array(pageNumber).keys());

    const dispatch = useDispatch();
    const limit = 4;
    const handlePagination = (page) => {
        const endIndex = page * limit;
        const startIndex = (Number(page) - 1) * limit;
        dispatch(increment({ startIndex, endIndex }));
    };

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {arr.map((p) => (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div
                        className="bg-blue-600 text-white px-4 py-1 cursor-pointer rounded-full"
                        onClick={(e) => handlePagination(e.target.innerText)}
                    >
                        {++p}
                    </div>
                ))}
            </div>
        </section>
    );
}
