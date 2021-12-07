import "../src/css/reset.css";
import "../src/css/style.css";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalForm from "./components/ModalForm/ModalForm";
import { MainTable } from "./components/Table/MainTable";

function App() {
  return (
    <Provider store={store}>
      <ModalForm />
      <MainTable />
    </Provider>
  );
}

export default App;
