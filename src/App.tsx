import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from 'react-bootstrap'
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from './components/Icon';

function App() {
  //3 usar el hook useReducer
  const { fromLanguage, setFromLanguage, toLanguage, interchangeLanguages } = useStore();
  //console.log({ fromLanguage })
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
