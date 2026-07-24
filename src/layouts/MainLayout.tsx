import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

export function MainLayout() {
  return (
    <>
      <Container>
        <Outlet />
        <div>teste</div>
      </Container>
    </>
  );
}
