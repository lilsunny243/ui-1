import "./App.css";
import FlexUIProvider from "./components/FlexUIProvider";
import Heading from "./components/Heading";
import Button from "./components/Button";
import TextField from "@/components/TextField";

function App() {
  return (
    <div className="App">
      <FlexUIProvider>
        <Heading h={1}>Hello</Heading>
        <Heading h={2}>Hello</Heading>
        <Heading h={3}>Hello</Heading>
        <Heading h={4}>Hello</Heading>
        <Heading h={5}>Hello</Heading>
        <Heading h={6}>Hello</Heading>

        <Heading>Button</Heading>
        <Button>Submit</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="error">Error</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>

        <Heading>Form Fields</Heading>
        <TextField name="name" label="name" />
        <TextField
          name="name"
          label="name"
          desc="Please enter your user name"
        />
        <TextField
          name="name"
          label="name"
          desc="Please enter your user name"
          errorMessage="Required"
        />
        <TextField
          name="name"
          label="name"
          embelishment={
            <Button shape="rectangle" variant="primary" shadowless>
              Check
            </Button>
          }
        />
      </FlexUIProvider>
    </div>
  );
}

export default App;
