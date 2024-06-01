// src/QuestionPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './QuestionPage.css';

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

const answers = [
  "이",
  "혀",
  "혀의 움직임을 손으로 표현해보기",
  "음식을 먹을 때 나는 소리를 말해보기",
  "식도",
  "식도",
  "식도의 모양을 몸으로 표현하기",
  "위",
  "위",
  "위의 모양을 손으로 표현하기",
  "쭈글쭈글한 위벽을 몸으로 표현해보기",
  "소장",
  "소장",
  "소장",
  "소장의 꼬불꼬불한 관을 몸으로 표현하기",
  "소장 속에 있는 이상한 털을 보면 생각나는 단어 말해보기",
  "물",
  "똥",
  "음식물에서 물기가 빠지는 과정을 몸으로 표현하기",
  "똥이 마려울 때 드는 느낌 3가지 말해보기"
];

const QuestionPage = () => {
  const { id } = useParams();
  const questionIndex = parseInt(id) - 1;
  const question = questions[questionIndex];
  const answer = answers[questionIndex];
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(question);
    synth.cancel(); // Stop previous utterances
    synth.speak(utterance);
  }, [question]);

  return (
    <div className="question-page">
      <h1>{question}</h1>
      <button onClick={() => setShowAnswer(true)}>정답 확인하기</button>
      {showAnswer && <p className="answer">정답: {answer}</p>}
      <Link to="/" className="button">문제로 돌아가기</Link>
    </div>
  );
};

export default QuestionPage;
