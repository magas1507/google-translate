import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from './components/Icon.tsx'
import { LanguageSelector } from './components/LanguageSelector.tsx';
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea.tsx";

function App() {
  //3 usar el hook useReducer
  const { loading, fromLanguage, setFromLanguage, setToLanguage, toLanguage, interchangeLanguages, fromText, result, setFromText, setResult } = useStore();
  //console.log({ fromLanguage })
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setFromLanguage}
              type={SectionType.From}
              value={fromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />

          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>

            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
