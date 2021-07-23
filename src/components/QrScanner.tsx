import React from "react";
import QrReader from "react-qr-reader";

const QrScanner = () => {
  const [result, setResult] = React.useState();

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      console.log(result);
    }
  };

  const handleError = (err: any) => {
    console.log(err);
  };

  return (
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: "100%" }}
    />
  );
};

export default QrScanner;
