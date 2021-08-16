import Portal from "./Portal";
import ClickOutsideArea from "./ClickOutsideArea";


export default function Modal({ children, onClose }) {
  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "grid",
          placeContent: "center",
        }}
      >
        <ClickOutsideArea onClickOutside={onClose} />
        <div
          style={{
            position: "relative",
            minWidth: "250px",
            minHeight: "100px",
            backgroundColor: "white",
            border: "1px solid black",
          }}
        >
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Portal>
  );
}