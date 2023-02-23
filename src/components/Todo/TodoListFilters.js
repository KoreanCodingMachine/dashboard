import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil/todo';

// 필터링된 상태를 나타내는 컴포넌트
export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </>
  );
}
