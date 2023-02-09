import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";
import ContentHooks from "./components/ContentHooks";


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      <ContentHooks />
    </div>
  );
}

export default App;