import { useState, ReactElement } from "react";
import { Modal } from "antd";

interface IModalWrapperProps {
  children: ReactElement;
  setIsOpenModal: (isOpenModal: boolean) => void;
  title: string;
}

export const ModalWrapper = ({
  children,
  setIsOpenModal,
  title,
}: IModalWrapperProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const handleCancel = () => {
    setIsOpenModal(false);
    setIsVisibleModal(false);
  };
  return (
    <div>
      <Modal
        title={title}
        open={isVisibleModal}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </div>
  );
};
