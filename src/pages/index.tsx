import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";

import { Navigation } from "../components";

export default function Home() {
  const [email, emailSet] = useState("");
  const [password, passwordSet] = useState("");

  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/clients");
  }

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label id="login">Login</Label>
                <Input
                  value={email}
                  onChange={(e) => emailSet(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="login"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Senha</Label>
                <Input
                  value={password}
                  onChange={(e) => passwordSet(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                />
              </FormGroup>
              <div className="d-flex justify-content-end">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
