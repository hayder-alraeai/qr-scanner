import React from "react";
import { Button, Modal } from "antd";
import QrScanner from "./components/QrScanner";

const App = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <div style={{ width: 100, margin: "auto" }}>
      <Button onClick={() => setModalVisible(true)}>Open scanner</Button>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
      >
        {modalVisible && <QrScanner />}
      </Modal>
    </div>
  );
};

export default App;
