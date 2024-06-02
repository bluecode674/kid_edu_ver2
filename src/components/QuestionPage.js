import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questions, answers } from './data';
import './QuestionPage.css';

const QuestionPage = ({ onAnswered }) => {
  const { id } = useParams();
  const questionId = parseInt(id, 10) - 1;
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(questions[questionId]);
    synth.cancel(); // 현재 재생 중인 음성을 취소
    synth.speak(utterance);

    return () => {
      synth.cancel(); // 컴포넌트가 언마운트되거나 업데이트될 때 음성을 취소
    };
  }, [questionId]);

  const handleAnswer = () => {
    setShowAnswer(true);
    onAnswered(questionId);

    // 정답을 음성으로 읽어줍니다.
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(answers[questionId]);
    synth.cancel(); // 현재 재생 중인 음성을 취소
    synth.speak(utterance);
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="question-page">
      <h1>문제 {questionId + 1}</h1>
      <p>{renderTextWithLineBreaks(questions[questionId])}</p>
      <button className="answer-button" onClick={handleAnswer}>정답 확인하기</button>
      {showAnswer && <p className="answer">{renderTextWithLineBreaks(answers[questionId])}</p>}
      <Link to="/">
        <button className="back-button">문제로 돌아가기</button>
      </Link>
    </div>
  );
};

export default QuestionPage;
