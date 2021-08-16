export default function ClickOutsideArea({ transparent, onClickOutside }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        opacity: 0.5,
        background: transparent ? "transparent" : "lightgray",
      }}
      onClick={(e) => {
        e.stopPropagation();

        onClickOutside();
      }}
    />
  );
}
