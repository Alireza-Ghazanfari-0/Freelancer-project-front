import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authentication from "./pages/Authentication";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import NotAccess from "./pages/NotAccess";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import HomeBody from "./pages/HomeBody";
import Owner from "./features/owner/Owner";
import Freelancer from "./features/freelancer/Freelancer";
import Admin from "./features/admin/Admin";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerProjects from "./pages/OwnerProjects";
import Project from "./pages/Project";
import UserIDPanel from "./pages/UserIDPanel";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import FreelancerProposals from "./pages/FreelancerProposals";
import FreelancerProjects from "./pages/FreelancerProjects";
import AdminUsers from "./pages/AdminUsers";
import AdminCategories from "./pages/AdminCategories";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <div>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<HomeBody />} />
              <Route path="about" element={<AboutMe />} />
            </Route>
            <Route path="/auth" element={<Authentication />} />
            <Route path="complete-profile" element={<CompleteProfile />} />
            <Route
              path="owner"
              element={
                <ProtectedRoute>
                  <Owner />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route path="projects/:id" element={<Project />} />
              <Route path="identification" element={<UserIDPanel />} />
            </Route>
            <Route
              path="freelancer"
              element={
                <ProtectedRoute>
                  <Freelancer />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<FreelancerProposals />} />
              <Route path="projects" element={<FreelancerProjects />} />
              <Route path="identification" element={<UserIDPanel />} />
            </Route>
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="proposals" element={<FreelancerProposals />} />
              <Route path="projects" element={<FreelancerProjects />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="identification" element={<UserIDPanel />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="not-access" element={<NotAccess />} />
          </Routes>
        </div>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
