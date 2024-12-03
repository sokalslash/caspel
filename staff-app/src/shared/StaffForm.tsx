import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Button, Form, Input } from "antd";

interface IStaffFormProps {
  setIsOpenModal: (isOpenModal: boolean) => void;
  staffId?: number;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export const StaffForm = ({ setIsOpenModal, staffId = 0 }: IStaffFormProps) => {
  const { listStaff, addNewStaff } = useContext(Context);

  const [form] = Form.useForm();

  useEffect(() => {
    if (listStaff.length > 0) {
      const index = listStaff.findIndex((item) => item.id === staffId);
      form.setFieldsValue({
        name: staffId ? listStaff[index].name : "",
        age: staffId ? listStaff[index].age : "",
      });
    }
  }, [listStaff, staffId, form]);

  const submit = ({ name, age }: { name: string; age: string }) => {
    addNewStaff(staffId, name, age);
    setIsOpenModal(false);
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: "filled" }}
      onFinish={submit}
    >
      <Form.Item
        label="ФИО"
        name="name"
        rules={[{ required: true, message: "Пожалуйста введите ФИО!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Возраст"
        name="age"
        rules={[{ required: true, message: "Пожалуйста введите возраст!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
