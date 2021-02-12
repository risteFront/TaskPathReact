import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./App.css";
import TrashLogo from "./data/trash.svg";
import ArrowLogo from "./data/arrow.svg";
import { v4 as uuid } from "uuid";
import ITEMS from "./data/index";
// ListItemProduct;
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Button,
  ButtonText,
  Notice,
  Container,
  ContainerLogo,
  ContainerDrop,
  Kiosk,
  Item,
  List,
  Clone,
  Logo,
  Place,
  Content,
  Handle,
} from "./styles/index";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
  console.log("==> dest", destination);

  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    [uuid()]: [],
  };

  onDragEnd = (result) => {
    const { source, destination } = result;

    console.log("==> result", result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        this.setState({
          [destination.droppableId]: reorder(
            this.state[source.droppableId],
            source.index,
            destination.index
          ),
        });
        break;
      case "ITEMS":
        this.setState({
          [destination.droppableId]: copy(
            ITEMS,
            this.state[destination.droppableId],
            source,
            destination
          ),
        });
        break;
      default:
        this.setState(
          move(
            this.state[source.droppableId],
            this.state[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

  addList = (e) => {
    this.setState({ [uuid()]: [] });
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        <Droppable droppableId="ITEMS" isDropDisabled={true}>
          {(provided, snapshot) => (
            <Kiosk
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {ITEMS.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    const styleR = {
                      backgroundColor: snapshot.isDragging ? "green" : "white",
                      ...provided.draggableProps.style,
                      fontSize: 7,
                      opacity: 0.6,
                      height: 50,
                      width: 50,
                    };
                    return (
                      <React.Fragment>
                        <Item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={
                            snapshot.isDragging
                              ? styleR
                              : provided.draggableProps.style
                          }
                        >
                          <img src={item.icons}></img>
                          <p>{item.content}</p>
                        </Item>
                        {snapshot.isDragging && <Clone>{item.content}</Clone>}
                      </React.Fragment>
                    );
                  }}
                </Draggable>
              ))}
            </Kiosk>
          )}
        </Droppable>
        <Content>
          <ContainerLogo>
            <h1
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Introducing... The Amaizing Huckleberry!
            </h1>
          </ContainerLogo>

          {Object.keys(this.state).map((list, i) => {
            console.log("==> list", list);
            return (
              <div>
                <Container>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "100",
                      textAlign: "center",
                      fontFamily: "emoji",
                      color: "#404040",
                    }}
                  >
                    Quity possibly the greatest email template ever designed.
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontFamily: "emoji",
                      color: "#404040",
                    }}
                  >
                    And some interesting copy here. Drop in new modules for
                    additional paragraph.
                  </p>
                </Container>

                <Droppable key={list} droppableId={list}>
                  {(provided, snapshot) => (
                    <ContainerDrop
                      ref={provided.innerRef}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                      {snapshot.isDraggingOver ? (
                        <small
                          style={{
                            fontSize: "11px",
                            color: "#ccc",
                            display: "block",
                            textAlign: "center",
                          }}
                        >
                          Drop Content here.
                        </small>
                      ) : null}
                      {this.state[list].length
                        ? this.state[list].map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Place
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  isDragging={snapshot.isDragging}
                                  style={provided.draggableProps.style}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      justifyContent: "space-between",
                                      display: "flex",
                                      alignItems: "initial",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "relative",
                                          left: "-32px",
                                          top: "-8px",
                                          backgroundColor: "#3cb371",
                                          cursor: "pointer",
                                        }}
                                      >
                                        <img src={TrashLogo}></img>
                                      </div>

                                      <Handle {...provided.dragHandleProps}>
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                          />
                                        </svg>
                                      </Handle>

                                      {item.content}
                                      <Button>Complete your order</Button>
                                    </div>
                                    <img
                                      style={{
                                        position: "relative",
                                        top: "-8px",
                                        left: "7%",
                                        backgroundColor: "#3cb371",
                                        cursor: "pointer",
                                      }}
                                      src={ArrowLogo}
                                    ></img>
                                  </div>
                                </Place>
                              )}
                            </Draggable>
                          ))
                        : !provided.placeholder && (
                            <Notice>Drop items here</Notice>
                          )}
                      {provided.placeholder}
                      <p
                        style={{
                          fontSize: "14px",
                          textAlign: "center",
                          fontFamily: "emoji",
                          color: "#404040",
                          backgroundColor: "#fff",
                        }}
                      >
                        And some interesting copy here. Drop in new modules for
                        additional paragraph.
                      </p>
                    </ContainerDrop>
                  )}
                </Droppable>
              </div>
            );
          })}
        </Content>
      </DragDropContext>
    );
  }
}
export default App;
// Put the things into the DOM!
