import { useContext } from "react";
import { Context } from "./Context";
import { Table, Space, Button, TableProps } from "antd";

type DataType = {
  id: number;
  name: string;
  age: string;
};

interface IMainTable {
  modalController: (isOpenModal: boolean) => void;
  getSelectedStaff: (id: number) => void;
}

export const MainTable = ({
  modalController,
  getSelectedStaff,
}: IMainTable) => {
  const { listStaff, deleteStaff } = useContext(Context);

  const onDeleteBtnClick = (id: number) => {
    deleteStaff(id);
  };

  const onEditBtnClick = (id: number) => {
    modalController(true);
    getSelectedStaff(id);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
      filters: [
        {
          text: "Илья",
          value: "Илья",
        },
      ],
      onFilter: (value: string, item: DataType) => item.name.includes(value),
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
      sorter: (a: DataType, b: DataType) => Number(a.age) - Number(b.age),
    },
    {
      title: "Действия",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => onEditBtnClick(record.id)}>
            Редактировать
          </Button>
          <Button onClick={() => onDeleteBtnClick(record.id)}>Удалить</Button>
        </Space>
      ),
    },
  ];

  return <Table<DataType> columns={columns} dataSource={listStaff} />;
};
