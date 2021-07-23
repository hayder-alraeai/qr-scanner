import React from "react";
import QrReader from "react-qr-reader";

const QrScanner = ({
  handleData,
  closeModal,
}: {
  handleData: (v: any) => void;
  closeModal: () => void;
}) => {
  const [errMsg, setErrMsg] = React.useState();

  const handleScan = (data: any) => {
    if (data) {
      handleData(data);
      closeModal();
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
      {errMsg && <p>{errMsg}</p>}
    </>
  );
};

export default QrScanner;
