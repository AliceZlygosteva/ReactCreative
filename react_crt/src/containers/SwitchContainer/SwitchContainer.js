import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { CARDS } from "./store";

import styles from "./SwitchComtainer.module.scss";

const SwitchContainer = () => {
  const [currentCard, setCurrentCard] = useState(Object.keys(CARDS)[0]);
  const CardComponent = CARDS[currentCard];

  const handleChangeCard = () => {
    const cards = Object.keys(CARDS);
    const currentCardIndex = cards.indexOf(currentCard);
    const nextCardIndex =
      currentCardIndex + 1 < cards.length ? currentCardIndex + 1 : 0;

    setCurrentCard(cards[nextCardIndex]);
  };

  return (
    <div className={styles.pageContainer}>
      <Button variant="warning" size="lg" onClick={() => handleChangeCard()}>
        Выбери открытку
      </Button>
      <div>
        <CardComponent></CardComponent>
      </div>
    </div>
  );
};

export default SwitchContainer;
