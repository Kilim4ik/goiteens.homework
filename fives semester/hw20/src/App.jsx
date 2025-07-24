import { useReducer } from "react";

import "./App.css";
import { GalleryProvider } from "./context/galleryContext";
import Gallery from "./assets/components/gallery/Gallery";
import Hw18 from "./assets/components/hw18/components/Hw18";
const reducer = (state, action) => {
  switch (action.component) {
    case "main":
      return "";
    case "gallery":
      return {
        component: (
          <GalleryProvider>
            <Gallery />
          </GalleryProvider>
        ),
      };
    case "hw18":
      return {
        component: <Hw18 />,
      };
      return;
    default:
      console.log("some error");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { component: "main" });

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button onClick={() => dispatch({ component: "main" })}>
              main
            </button>
          </li>
          <li>
            <button onClick={() => dispatch({ component: "gallery" })}>
              gallery
            </button>
          </li>
          <li>
            <button onClick={() => dispatch({ component: "hw18" })}>
              hw18
            </button>
          </li>
        </ul>
      </nav>
      {state.component}
    </div>
  );
}

export default App;
