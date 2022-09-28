import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ViewBill";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        <h2>PrintComponent</h2>
        button to trigger printing of target component
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}
