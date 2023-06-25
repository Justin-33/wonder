import { useRoutes } from "react-router-dom";

// import layout
import MainLayout from "../Layouts/MainLayout";
import LoggedinLayout from "../Layouts/LoggedinLayout";


// Pages
import LogIn from "../pages/LoginPage";
import SignUp from "../pages/SignupPage";
import ForgotPasswordForm from "../pages/ForgotPassword";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import CreateblogPage from "../pages/CreateBlogPage";
import EditBlogpage from "../pages/EditPage";

// guards
import GuestGuard from "../guards/GuestGuards";
import AuthGuard from "../guards/AuthGuard";

// paths
import { PATH_PAGE } from "./paths";

export default function Router() {
  return useRoutes([
    {
      path: PATH_PAGE.homepage,
      element: (
      <GuestGuard>
         <MainLayout />
      </GuestGuard>
     ),
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: PATH_PAGE.signup,
          element: <SignUp />,
        },

        {
          path: PATH_PAGE.forgotPassword,
          element: <ForgotPasswordForm />,
        },

        {
          path: PATH_PAGE.login,
          element: <LogIn />,
        },
      ],
    },
    {
      path: PATH_PAGE.homepage,
      element:( 
        <AuthGuard>
            <LoggedinLayout />
        </AuthGuard>
    
      ),
      children: [
        {
          path: PATH_PAGE.dashboardpage,
          element: <DashboardPage />,
        },
        {
          path: PATH_PAGE.CreateBlogPage,
          element: <CreateblogPage />,
        },
        {
          path: PATH_PAGE.EditBlogPage,
          element: <EditBlogpage />,
        },
      ],
    }
  ]);


}
