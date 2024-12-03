import { ModalWrapper } from "../../shared/ModulWrapper";
import { StaffForm } from "../../shared/StaffForm";

interface IAddStaffModalProps {
  setIsOpenModal: (isOpenModal: boolean) => void;
}

export const AddStaffModal = ({ setIsOpenModal }: IAddStaffModalProps) => {
  return (
    <ModalWrapper
      setIsOpenModal={setIsOpenModal}
      title="Добавить нового сотрудника"
    >
      <StaffForm setIsOpenModal={setIsOpenModal} />
    </ModalWrapper>
  );
};
