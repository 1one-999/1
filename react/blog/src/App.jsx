import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let post = '강남 우동 맛집';
  let [글제목1, b] = useState('여자 코트 추천');
  let [글제목2, c] = useState('여자 코트 추천');
  let [글제목3, d] = useState('여자 코트 추천');
  let [따봉, 따봉변경] = useState(0);
  let [여자코트추천변경, 여자코트추천변경1] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          <span
            onClick={() => {
             b(여자코트추천변경);
            }}
          >
            {' '}
            {글제목1}{' '}
          </span>{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h4>
        <button
          onClick={() => {
            여자코트추천변경;
          }}
        >
          버튼
        </button>
        <p>2월 15일</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
