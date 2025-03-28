import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardsApi } from "../entities/cards/Cards.Api";
import { useNavigate } from "react-router";
import "./MainPage.css";

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const data = await CardsApi.getAll();
        setCards(data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div className="cards-container">
      {cards.slice(0, 6).map((el) => (
        <Card key={el.id} className="card">
          <Card.Img variant="top" src={el.url} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Button
              variant="outline-info"
              onClick={() => navigate(`/cards/${el.id}`)}
            >
              Перейти к теме
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
