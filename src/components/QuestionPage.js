import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questions, answers } from './data';
import './QuestionPage.css';

const QuestionPage = ({ onAnswered }) => {
  const { id } = useParams();
  const questionId = parseInt(id, 10) - 1;
  const [showAnswer, setShowAnswer] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const availableVoices = synth.getVoices();
    //console.log(availableVoices); // 사용 가능한 음성 목록을 콘솔에 출력
    setVoices(availableVoices);

    if (availableVoices.length === 0) {
      synth.onvoiceschanged = () => {
        const newVoices = synth.getVoices();
        // console.log(newVoices); // 변경된 음성 목록을 콘솔에 출력
        setVoices(newVoices);
      };
    }

    return () => {
      synth.cancel(); // 컴포넌트가 언마운트될 때 음성을 취소
    };
  }, []);

  const speak = useCallback((text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0; // 말하는 속도 조절 (0.1 ~ 10, 기본값: 1)
    utterance.pitch = 1.0; // 목소리 톤 조절 (0 ~ 2, 기본값: 1)
    // 원하는 목소리를 선택 (예: Google UK English Female)
    const selectedVoice = voices.find(voice => voice.name === 'Microsoft Heami - Korean (Korean)');
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    synth.cancel(); // 현재 재생 중인 음성을 취소
    synth.speak(utterance);
  }, [voices]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    if (voices.length > 0) {
      speak(questions[questionId]);
    }

    return () => {
      synth.cancel(); // 컴포넌트가 업데이트될 때 음성을 취소
    };
  }, [questionId, voices, speak]);

  const handleAnswer = () => {
    setShowAnswer(true);
    onAnswered(questionId);
    speak(answers[questionId]);
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
