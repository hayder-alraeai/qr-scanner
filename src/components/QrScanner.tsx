import React from "react";
import QrReader from "react-qr-reader";

const QrScanner = () => {
  const [result, setResult] = React.useState();
  const [errMsg, setErrMsg] = React.useState();

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      console.log(result);
    }
  };

  const handleError = (err: any) => {
    setErrMsg(err);
  };

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>result: {result}</p>
      {errMsg && <p>{errMsg}</p>}
    </>
  );
};

export default QrScanner;
