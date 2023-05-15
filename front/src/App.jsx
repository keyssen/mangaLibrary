import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import CreatorAction from './Main/CreatorAction';
import ReaderAction from './Main/ReaderAction';
import UsersPage from './Main/UsersPage';
import Catalog from './Main/Catalog';
import LoginPage from './Main/LoginPage';
import SingupPage from './Main/SingupPage';
import PrivateRoutes from "./components/PrivateRoutes";
import MangaPage from "./Main/MangaPage";

function Router(props) {
  return useRoutes(props.rootRoute);
}

export default function App() {

  const links = [
    { path: 'catalog', label: "Catalog", userGroup: "AUTH" },
    { path: 'readerAction', label: "ReaderAction", userGroup: "USER" },
    { path: 'creatorAction', label: "CreatorAction", userGroup: "USER" },
    { path: 'users', label: "Users", userGroup: "USER" }
  ];
  return (
      <>
        <BrowserRouter>
          <Header links={links}></Header>
          <div className="content-div">
            <Routes>
              <Route element={<LoginPage />} path="/login" />
              <Route element={<SingupPage />} path="/singup" />
              <Route element={<PrivateRoutes userGroup="AUTH" />}>
                <Route element={<MangaPage />} path="/mangapage" />
                <Route element={<Catalog />} path="/catalog" />
                <Route element={<Catalog />} path="*" />
              </Route>
              <Route element={<PrivateRoutes userGroup="USER" />}>
                <Route element={<ReaderAction />} path="/readerAction" />
              </Route>
              <Route element={<PrivateRoutes userGroup="USER" />}>
                <Route element={<UsersPage />} path="/users" />
                <Route element={<CreatorAction />} path="/creatorAction" />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}
