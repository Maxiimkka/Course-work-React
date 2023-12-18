import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStateItem } from "../../redux/Fillter/slice";
import { Item, SortPropertyEnum } from "../../redux/Fillter/types";
import { RootState } from "../../redux/store";
import './Sort.scss'

export const sortItems: Item[] = [
  { name: "price(desc)", sortProperty: SortPropertyEnum.DPRICE },
  { name: "price(asc)", sortProperty: SortPropertyEnum.APRICE },
];

const Sort: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.fillter.item);
  const sortRef = useRef<HTMLDivElement>(null);

  const handleClick = (obj: Item, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(setStateItem(obj));
  }

  const handleSortChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const selectedItem = sortItems.find(item => item.name !== selected.name) || selected;
    handleClick(selectedItem, event);
  }

  return (
    <div className='sort-box' ref={sortRef} onClick={handleSortChange}>
      <div className='sort-box__active'>
        Sorting by:{" "}
        <span className='sort-item__active'>{selected.name}</span>
        {selected.name.includes('asc') ? ' ▲' : ' ▼'}
      </div>
    </div>
  );
});

export default Sort;
