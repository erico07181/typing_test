import React from "react";
import { Container, Card } from "@nextui-org/react";

export default function PromptBox() {
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "7%",
          width: "65%",
          height: "55vh",
        }}
      >
        <Card></Card>
      </Container>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "65%",
          height: "25vh",
        }}
      >
        <Card></Card>
      </Container>
    </>
  );
}
