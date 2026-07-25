import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { RepoDetails } from "../pages/RepoDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<Home />} />
      <Route path="/user/:username/repo/:repoName" element={<RepoDetails />} />
    </Routes>
  );
}
