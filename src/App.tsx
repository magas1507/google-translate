import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from './components/Icon.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx';

function App() {
  //3 usar el hook useReducer
  const { fromLanguage, setFromLanguage, setToLanguage, toLanguage, interchangeLanguages } = useStore();
  //console.log({ fromLanguage })
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <LanguageSelector
            onChange={setFromLanguage}
            type="from"
            value={fromLanguage}
          />
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
