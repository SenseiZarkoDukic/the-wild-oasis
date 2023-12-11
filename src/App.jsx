import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">
          <Row>The Wild Oasis</Row>
        </Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("You got checked in!")}>Check in</Button>
        <Button onClick={() => alert("You got checked out!")}>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
