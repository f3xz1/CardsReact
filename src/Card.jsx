import styled from "styled-components";
const MyCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

function Card({ Name, Pic, Price }) {
  return (
    <div>
      <MyCard>
        <img src={Pic} alt="pic" />
        <h1>{Name}</h1>
        <h2>{Price}</h2>
        <button>Add to Cart</button>
      </MyCard>
    </div>
  );
}

export default Card;
