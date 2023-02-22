import { useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from '../../recoil/todo';
import TodoItemCreator from '../../components/Todo/TodoItemCreator';
import TodoListFilters from '../../components/Todo/TodoListFilters';
import TodoListStats from '../../components/Todo/ToListStats';
import TodoItem from '../../components/Todo/TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
