import { useState } from "react";
import { Stack } from "@mui/material";
import CustomModal from "./CustomModal";
import { CustomButton, CustomTextField, CustomSelect } from "..";
import { COLORS } from "@src/constant";
import { Add } from "@mui/icons-material";

interface CreateTagModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (tagName: string, category: string) => void;
  initialCategory?: string;
  initialTagName?: string;
  isEdit?: boolean;
}

const categoryOptions = [
  { label: "Sports", value: "Sports" },
  { label: "Pain Points", value: "Pain Points" },
  { label: "Props", value: "Props" },
  { label: "Duration", value: "Duration" },
  { label: "Organization Tags", value: "Organization Tags" },
];

const CreateTagModal = ({
  open,
  onClose,
  onAdd,
  initialCategory,
  initialTagName = "",
  isEdit = false,
}: CreateTagModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    initialCategory || categoryOptions[0].value,
  );
  const [tagName, setTagName] = useState(initialTagName);

  const handleSubmit = () => {
    onAdd(tagName, selectedCategory as string);
    onClose();
    setTagName("");
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={isEdit ? "Edit Tag" : "Create New Tag"}
      subtitle={
        isEdit
          ? "Update the tag name and category"
          : "Add a new tag to categorize content"
      }
      maxWidth="sm"
    >
      <Stack spacing={3}>
        {/* Form */}
        <Stack spacing={2}>
          <CustomSelect
            name="category"
            label="Tag Category"
            options={categoryOptions}
            defaultValue={selectedCategory}
            onChange={(val: string | number) => setSelectedCategory(val)}
          />
          <CustomTextField
            name="tagName"
            label="Tag Name"
            placeholder="Enter tag name"
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          sx={{ mt: 2 }}
        >
          <CustomButton
            title="Cancel"
            variant="outlined"
            onClick={onClose}
            active
            sx={{
              color: COLORS.text.primary,
              borderColor: COLORS.natural[100],
            }}
            width={"117px"}
          />
          <CustomButton
            title={isEdit ? "Update Tag" : "Create Tag"}
            variant="contained"
            active
            background={COLORS.primary.main}
            onClick={handleSubmit}
            disabled={!tagName.trim()}
            startIcon={isEdit ? null : <Add />}
          />
        </Stack>
      </Stack>
    </CustomModal>
  );
};

export default CreateTagModal;
