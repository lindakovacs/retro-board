import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    categories: {
      wentWell: [],
      toImprove: [],
      actionItems: []
    },
    addClass: false,
    userInput: "",
    id: 0,
    Cards: [],
    likes: 0,
    dislikes: 0
  };

  userInput = (e, idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].input = e.target.value;
    this.setState({
      Cards: newCards
    });
  };

  validateInput = e => {
    if (e.target.value === "") {
      window.alert("input required");
    }
  };
  Delete = id => {
    this.setState({
      Cards: this.state.Cards.filter(card => card.id !== id)
    });
  };

  CreateCard = (type, input) =>
    this.setState({
      Cards: [
        ...this.state.Cards,
        {
          id: this.state.id,
          type: type,
          input: input,
          likes: 0,
          dislikes: 0
        }
      ],
      id: this.state.id + 1
    });

  MoveLeft = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Went Well") {
        card.type = "Action Items";
      } else if (card.id === id && card.type === "To Improve") {
        card.type = "Went Well";
      } else if (card.id === id && card.type === "Action Items") {
        card.type = "To Improve";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards
    });
  };

  MoveRight = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "Went Well") {
        card.type = "To Improve";
      } else if (card.id === id && card.type === "To Improve") {
        card.type = "Action Items";
      } else if (card.id === id && card.type === "Action Items") {
        card.type = "Went Well";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards
    });
  };

  handleLikes = idx => {
    let newCards = [...this.state.Cards];
    newCards[idx].likes++;
    this.setState({
      Cards: newCards
    });
  };

  handleDislikes = idx => {
    let newCards = [...this.state.Cards];
    newCards[idx].dislikes++;
    this.setState({
      Cards: newCards
    });
  };

  toggle = () => {
    if (this.state.addClass === 2) {
      this.setState({ addClass: 0 });
    } else {
      this.setState({ addClass: this.state.addClass + 1 });
    }
  };

  // toggle() {
  //   this.setState({ addClass: !this.state.addClass });
  // }

  render() {
    return (
      <div className="App">
              <Header />
        <div className="btn-cntr">
          <button onClick={this.toggle.bind(this)} className="ChangeLayout">
            <i className="fas fa-bars" />
          </button>
        </div>
        <br />



        <div className="text-center">
          <div
            className={
              this.state.addClass === 1
                ? "col"
                : this.state.addClass === 2
                ? "col"
                : "row"
            }
          >
            <div className={this.state.addClass === 1 ? "row" : "col"}>
              <div
                className={(this.state.addClass === 1
                  ? " Rotate-1"
                  : ""
                ).toString()}
              >
                <h4>Went Well</h4>
                <button
                  type="button"
                  className="addButton"
                  onClick={() => this.CreateCard("Went Well", "")}
                >
                  +
                </button>
              </div>
              {this.state.Cards.map((card, idx) => {
                if (card.type === "Went Well") {
                  return (
                    <Card
                      key={"Went Well" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      dislikesCount={card.dislikes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      addClass={this.state.addClass}
                      color={"wentWell"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className={this.state.addClass === 1 ? "row" : "col"}>
              <div
                className={(this.state.addClass === 1
                  ? " Rotate-1"
                  : ""
                ).toString()}
              >
                <h4>To Improve</h4>
                <button
                  type="button"
                  className="addButton"
                  onClick={() => this.CreateCard("To Improve", "")}
                >
                  +
                </button>
              </div>
              {this.state.Cards.map((card, idx) => {
                if (card.type === "To Improve") {
                  return (
                    <Card
                      key={"To Improve" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      dislikesCount={card.dislikes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      addClass={this.state.addClass}
                      color={"toImprove"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className={this.state.addClass === 1 ? "row" : "col"}>
              <div
                className={(this.state.addClass === 1
                  ? " Rotate-1"
                  : ""
                ).toString()}
              >
                <h4>Action Items</h4>
                <button
                  type="button"
                  className="addButton"
                  onClick={() => this.CreateCard("Action Items", "")}
                >
                  +
                </button>
              </div>
              {this.state.Cards.map((card, idx) => {
                if (card.type === "Action Items") {
                  return (
                    <Card
                      key={"Action Items" + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.userInput}
                      validateInput={this.validateInput}
                      MoveLeft={this.MoveLeft}
                      Delete={this.Delete}
                      MoveRight={this.MoveRight}
                      likesCount={card.likes}
                      dislikesCount={card.dislikes}
                      handleLikes={this.handleLikes}
                      handleDislikes={this.handleDislikes}
                      addClass={this.state.addClass}
                      color={"actionItems"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
