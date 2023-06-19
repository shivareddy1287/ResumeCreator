import React, { useRef } from "react";
import ColorPiker from "./popup";
import { useReactToPrint } from "react-to-print";
const ReadPdfPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print Success"),
  });
  return (
    <div
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
    >
      <h1 className="text-center my-3 border py-2">Employee data</h1>
      <ColorPiker />
      <button onClick={handlePrint}>Print this out</button>
    </div>
  );
};

export default ReadPdfPrint;
