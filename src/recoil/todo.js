import { atom, selector } from 'recoil';

// atom state가 바뀌면 default 값은 고정이고 현재 state값이 갱신된다.
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

// Provider 처럼 상태가 변경되면 전체 하위 컴포넌트가 리랜더링되는게 아니고
//해당 스테이트를 갖는 컴포넌트만 리랜더링이 일어난다.

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState); // 구독상태 , 아톰이 바뀌면 구독하고있던 셀렉터가 실행된다.
    const list = get(todoListState); // 구독상태

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
