import React from "react";
import { Button, Modal } from "antd";
import QrScanner from "./components/QrScanner";

const App = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [data, setData] = React.useState();
  const handleData = (d: any) => {
    setData(d);
  };
  return (
    <div style={{ width: 100, margin: "auto" }}>
      {data && <p>{data}</p>}
      <Button onClick={() => setModalVisible(true)}>Open scanner</Button>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        {modalVisible && (
          <QrScanner
            handleData={handleData}
            closeModal={() => setModalVisible(false)}
          />
        )}
      </Modal>
    </div>
  );
};

export default App;
