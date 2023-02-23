import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/todo';

// todolist를 생성하는 컴포넌트

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');

  // 쓰기 가능한 Recoil 상태의 값을 업데이트하기 위한 setter 함수를 리턴합니다.
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
