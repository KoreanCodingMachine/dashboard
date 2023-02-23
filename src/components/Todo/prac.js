const todoList = [
  { id: 0, text: 'qwe', isComplete: false },
  { id: 1, text: 'qwe', isComplete: false },
  { id: 2, text: 'qwe', isComplete: false },
];

//인덱스 전까지 복사 , 인덱스 수정 , 인덱스이후 복사

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// 인덱스 전까지 복사 , 인덱스 이후 복사 -> 인덱스는 삭제됨

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const array = [1, 2, 3, 4, 5];

console.log([
  ...todoList.slice(0, 1),
  { id: 1, text: '1234', isComplete: false },
  ...todoList.slice(2),
]);
