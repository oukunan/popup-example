import ReactDOM from "react-dom";

export default function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById("popup-root"));
}