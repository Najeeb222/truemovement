import { Stack } from "@mui/material";
import CustomModal from "./CustomModal";
import { CustomButton } from "..";
import { COLORS } from "@src/constant";

interface DeleteTagModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteTagModal = ({ open, onClose, onDelete }: DeleteTagModalProps) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title="Delete Tag"
      subtitle="Are you sure you want to Delete this content? Users and you will not access to this content anymore. "
      maxWidth="sm"
    >
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <CustomButton
          title="Cancel"
          variant="outlined"
          background={COLORS.error.button}
          onClick={onClose}
          width="99px"
          active
        />
        <CustomButton
          title="Delete"
          variant="contained"
          active
          background={COLORS.error.button}
          textColor={COLORS.surface.white}
          onClick={() => {
            onDelete();
            onClose();
          }}
        />
      </Stack>
    </CustomModal>
  );
};

export default DeleteTagModal;
