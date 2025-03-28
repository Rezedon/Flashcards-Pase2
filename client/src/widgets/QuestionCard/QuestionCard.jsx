import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function QuestionCard() {

const [questions, setQuestions] = useState([])

const [currentQuestion, setCurrentQuestion] = useState(0)

const [answer, setAnwer] = useState(null)

const { themeId} = useParams();

useEffect (() => {
  axios.get(`/api/cards/${themeId}`)
  .then((res) => setQuestions(res.data))
  .catch(console.log)
  
},[currentQuestion])

useEffect (() => {
  axios.get(`/api/cards/${themeId}`)
  .then((res) => setQuestions(res.data))
  .catch(console.log)
  
},[themeId])

  return (
    
    <Container>
    <Card>
      <Card.Body>{questions[currentQuestion]?.question}</Card.Body>
      <Button>вариант ответа</Button>
    </Card>
    </Container>
    
  )
}
