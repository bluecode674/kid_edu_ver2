import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonList.css';

const questions = [
  "입안의 ○는 음식물을 잘게 으껜다.",
  "입안의 ○는 음식의 맛을 느끼고, 음식물을 섞어준다.",
  "혀의 움직임을 손으로 표현해보기",
  "음식을 먹을 때 나는 소리를 말해보기",
  "입으로 들어온 음식물을 위로 보내주는 통로 역할을 하는 것은?",
  "미끄럼틀처럼 긴 길 모양을 하고 있는 것은?",
  "식도의 모양을 몸으로 표현하기",
  "작은 주머니 모양으로 음식물을 부수고 소화시키는 소화기관은?",
  "쭈글쭈글한 주름이 있으며 찐득한 물을 내뿜는 소화기관은?",
  "위의 모양을 손으로 표현하기",
  "쭈글쭈글한 위벽을 몸으로 표현해보기",
  "구불구불한 긴 모양을 가진 소화기관은?",
  "위에서 내려온 음식물을 소화시키고 흡수하는 일을 하는 곳은?",
  "영양분을 흡수하는 이상한 털이 있는 소화기관은?",
  "소장의 꼬불꼬불한 관을 몸으로 표현하기",
  "소장 속에 있는 이상한 털을 보면 생각나는 단어 말해보기",
  "대장은 음식물에 남아있는 ○을 빨아들인다",
  "대장이 음식물의 물기를 빨아들이면 남은 찌꺼기는 무엇이 될까?",
  "음식물에서 물기가 빠지는 과정을 몸으로 표현하기",
  "똥이 마려울 때 드는 느낌 3가지 말해보기"
];

const ButtonList = ({ answeredQuestions, resetAnswers }) => {
  return (
    <div className="button-list-container">
      <h1>출동!</h1>
      <h1>소화기관 탐험대</h1>
      <div className="grid-container">
        {questions.map((question, index) => (
          <div key={index} className={`grid-item ${answeredQuestions.includes(index) ? "hidden" : "visible"}`}>
            <Link to={`/question/${index + 1}`}>
              <img src={`/images/${index + 1}.jpg`} />
              <span>{index + 1}</span>
            </Link>
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetAnswers}>초기화</button>
    </div>
  );
};

export default ButtonList;
