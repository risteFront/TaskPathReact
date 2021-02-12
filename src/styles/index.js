import styled from "styled-components";

export const Content = styled.div`
  margin-right: 200px;
`;
export const Place = styled.div`
  width: 100%;
  display: flex;
  user-select: none;
  padding: 0.5rem;
  background-color: #3cb371;
  color: #fff;
  align-items: center;
  margin: 0 0 0.5rem 0;
  align-content: flex-start;
  font-size: 13px;
  border-radius: 3px;

  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;
export const Item = styled.div`
  width: ${(props) => (props.isDraggingOver ? "40px" : "100px")};
  display: flex;
  user-select: none;
  padding: 0.5rem;
  height: 100px;
  background-color: #2196f3;
  color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0 0 0.5rem 0;
  font-size: 0.7rem;
  border-radius: 3px;
  text-align: center !important;
  background-color: ${(props) =>
    props.isDraggingOver ? "#3cb371" : "#2196f3"};
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;

export const Clone = styled(Item)`
  + div {
    display: none !important;
  }
`;
export const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;

  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
`;

export const List = styled.div`
  border: 1px
    ${(props) => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`;

export const Kiosk = styled(List)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  display: grid;

  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
`;

export const Container = styled(List)`
  margin: 0rem 0.5rem 0rem 7rem;
  background: ${(props) => (props.isDraggingOver ? "#3cb371" : "#fff")};
  display: block;
  height: auto;
  width: 50%;
`;
export const ContainerDrop = styled(List)`
  margin: 0rem 0.5rem 0rem 7rem;
  background: ${(props) => (props.isDraggingOver ? "#3cb371" : "#fff")};
  height: 50px;
  width: 50%;
`;
export const ContainerLogo = styled(List)`
  margin: 0.5rem 0.5rem 0rem 7rem;
  background-color: #3cb371;
  width: 50%;
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
  color: #000;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
  padding: 4px;
  width: 128px;
  margin-left: 20px;
  font-size: 11px;
  background-color: #3cb371;
  border: 1px solid white;
  color: #fff;
  font-family: cursive;
`;

export const ButtonText = styled.div`
  margin: 0 1rem;
`;
