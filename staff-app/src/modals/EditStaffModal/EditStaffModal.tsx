import { ModalWrapper } from "../../shared/ModulWrapper";
import { StaffForm } from "../../shared/StaffForm";

interface IEditStaffModalProps {
  setIsOpenModal: (isOpenModal: boolean) => void;
  staffId: number;
}

export const EditStaffModal = ({
  setIsOpenModal,
  staffId,
}: IEditStaffModalProps) => {
  return (
    <ModalWrapper
      setIsOpenModal={setIsOpenModal}
      title="Редактирование данных сотрудника"
    >
      <StaffForm setIsOpenModal={setIsOpenModal} staffId={staffId} />
    </ModalWrapper>
  );
};
