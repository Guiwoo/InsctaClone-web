import styled from "styled-components";

const Seperator = styled.div`
  margin: 15px 0px 20px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 2px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    color: #8e8e8e;
  }
`;

function SSeperator() {
  return (
    <Seperator>
      <div></div>
      <span>or</span>
      <div></div>
    </Seperator>
  );
}

export default SSeperator;
