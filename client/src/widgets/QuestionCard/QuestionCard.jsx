import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function QuestionCard() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]); // Массив для рандомного порядка
  const [message, setMessage] = useState("");
  const { themeId } = useParams();
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/cards/${themeId}`)
      .then((res) => setQuestions(res.data))
      .catch(console.log)
  }, [themeId]);

  useEffect(() => {
    if (questions.length > 0) {
      axios.get(`/api/cards/${themeId}/response/${[Number(currentQuestion) + 1]}`)
        .then((res) => {
          setAnswer(res.data);
          shuffleAnswers(res.data.response); // Перемешиваем ответы
        })
        .catch(console.log);
    }
  }, [currentQuestion, questions, themeId]);

  // Функция для перемешивания массива
  const shuffleAnswers = (answers) => {
    const shuffled = [...answers].sort(() => 0.5 - Math.random()); // Перемешиваем массив
    setShuffledAnswers(shuffled); // Сохраняем перемешанный массив в состояние
  };

  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = answer.response[0];
    if (selectedAnswer === correctAnswer) {
      setMessage("Правильно!");
      setScore((prevScore) => prevScore + 100); // Увеличиваем счет
    } else {
      setMessage("Неправильно!");
    }
  };

  const nextHandler = () => {
    setMessage(""); // Очищаем сообщение
    setCurrentQuestion((prev) => prev + 1);
    if (Number(currentQuestion) === 4) {
      navigate('/');
    }
  };

  return (
    <Container>
      <Card>
        <Card.Body>{questions[currentQuestion]?.question}</Card.Body>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {shuffledAnswers.map((el, index) => (
            <div key={index} style={{ display: 'flex', margin: '5px', width: '50%' }}>
              <Button 
                variant="outline-primary"
                style={{
                  flex: 1,
                  color: message === "Правильно!" && answer.response[0] === el ? 'green' : 'red', // Цвет правильного ответа
                }}
                onClick={() => handleAnswerClick(el)}
              >
                {el}
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={nextHandler}>Дальше</Button>
      </Card>
      <h1>Ваш счет: {score}</h1>
    </Container>
  )
}