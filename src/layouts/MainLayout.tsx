import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import { Header } from "../components/Header";

export function MainLayout() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
}
