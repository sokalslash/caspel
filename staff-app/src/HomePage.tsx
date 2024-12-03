import { useState } from "react";
import { MainTable } from "./MainTable";
import { Layout, Button } from "antd";
import { AddStaffModal } from "./modals/AddStaffModal/AddStaffModul";
import { EditStaffModal } from "./modals/EditStaffModal/EditStaffModal";

const { Content } = Layout;

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "50%",
  maxWidth: "50%",
  margin: "auto",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
};

export const HomePage = () => {
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
  const [selectedStaff, setISelectedStaff] = useState(0);

  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Button onClick={() => setIsAddStaffModalOpen(!isAddStaffModalOpen)}>
          Добавить сотрудника
        </Button>
        <MainTable
          modalController={setIsEditStaffModalOpen}
          getSelectedStaff={setISelectedStaff}
        />
        {isAddStaffModalOpen && (
          <AddStaffModal setIsOpenModal={setIsAddStaffModalOpen} />
        )}
        {isEditStaffModalOpen && (
          <EditStaffModal
            setIsOpenModal={setIsEditStaffModalOpen}
            staffId={selectedStaff}
          />
        )}
      </Content>
    </Layout>
  );
};
