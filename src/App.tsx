import React from "react";
import FlexUIProvider from "./components/FlexUIProvider";
import Heading from "./components/Heading";
import Button from "./components/Button";
import TextField from "@/components/TextField";
import Flex from "@/components/Flex";
import Divider from "./components/Divider";
import Spacer from "./components/Spacer";
import Text from "./components/Text";
import Content from "./components/Content";
import InfoBox from "./components/InfoBox";
import DescriptionList from "./components/DescriptionList";
import Card, { CardTitle } from "./components/Card";

function App() {
  return (
    <FlexUIProvider>
      <Content>
        <Spacer />
        <Heading>Heading</Heading>
        <Heading h={1}>h1</Heading>
        <Heading h={2}>h2</Heading>
        <Heading h={3}>h3</Heading>
        <Heading h={4}>h4</Heading>
        <Heading h={5}>h5</Heading>
        <Heading h={6}>h6</Heading>

        <Divider />

        <Heading>Button</Heading>

        <Flex>
          <Button>Submit</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="error">Error</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </Flex>

        <Divider />

        <Heading>Text Field</Heading>
        <Flex direction="column">
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
        </Flex>

        <Divider />

        <Heading>Card</Heading>

        <Card padding>
          <CardTitle>Lorem ipsum</CardTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quos
            architecto! Inventore, unde?
          </Text>
        </Card>

        <Spacer />

        <Flex>
          <Card padding>
            <CardTitle>Lorem ipsum</CardTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
              quos architecto! Inventore, unde?
            </Text>
          </Card>

          <Card padding>
            <CardTitle>Lorem ipsum</CardTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
              quos architecto! Inventore, unde?
            </Text>
          </Card>
        </Flex>

        <Divider />

        <Heading>InfoBox</Heading>

        <Flex direction="column">
          <InfoBox variant="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>

          <InfoBox variant="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>

          <InfoBox variant="success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>

          <InfoBox variant="warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>

          <InfoBox variant="danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>

          <InfoBox variant="error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugit! Aut, dicta provident.
          </InfoBox>
        </Flex>

        <Divider />

        <Heading>Description List</Heading>

        <DescriptionList
          items={[
            {
              term: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit! Aut, dicta provident.",
            },
            {
              term: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit! Aut, dicta provident.",
            },
            {
              term: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit! Aut, dicta provident.",
            },
            {
              term: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit! Aut, dicta provident.",
            },
          ]}
        />

        <Spacer />
      </Content>
    </FlexUIProvider>
  );
}

export default App;
