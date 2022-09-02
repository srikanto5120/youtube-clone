import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';

export default function Tag({ title }) {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector((state) => state.filter);

    const isSelected = !!selectedTags.includes(title);

    const style = isSelected
        ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
        : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer ';

    const handleSelected = () => {
        if (isSelected) {
            dispatch(tagRemoved(title));
        } else {
            dispatch(tagSelected(title));
        }
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className={style} onClick={handleSelected}>
            {title}
        </div>
    );
}
