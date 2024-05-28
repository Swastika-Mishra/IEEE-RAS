import React from "react";
import Card from "react-bootstrap/Card";



function BoardCards(props) {
  return (
    <div className="board-card-container">
    <Card className="board-card-view" style={{ width: "18rem", borderRadius: "20px", background:" rgba(43, 26, 57, 0.755)",border: "2px solid #c770f0"  }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center",color: "white"  }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

  );
}
export default BoardCards;