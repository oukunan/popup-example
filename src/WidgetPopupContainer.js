import { useRef } from "react";
import Portal from "./Portal";
import ClickOutsideArea from "./ClickOutsideArea";

export default function WidgetPopupContainer({
  popupContent,
  popupContentVisible,
  children,
  openPopupContent,
  closePopupContent,
}) {
  const childrenRef = useRef(null);

  const getChildrenPosition = () => {
    const childrenRect = childrenRef.current?.getBoundingClientRect();

    if (!childrenRect) {
      return { left: 0, top: 0 };
    }

    return {
      left: childrenRect.left,
      top: childrenRect.top + childrenRect.height,
    };
  };

  const renderPopupContent = () => {
    if (!popupContentVisible) {
      return;
    }

    const { top, left } = getChildrenPosition();

    return (
      <Portal>
        <ClickOutsideArea transparent onClickOutside={closePopupContent} />
        <div style={{ position: "absolute", top, left }}>{popupContent}</div>
      </Portal>
    );
  };

  return (
    <div>
      {renderPopupContent()}
      <span ref={childrenRef} onClick={openPopupContent}>
        {children}
      </span>
    </div>
  );
}
