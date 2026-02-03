import { Add } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { columns, rows } from "@src/constant";
import {
  CustomButton,
  CustomPageHeader,
  CustomTextField,
  DynamicTable,
  CustomModal,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import type { ProgramRow } from "@src/types";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import CustomnstructionsAndSafety from "../components/CustomnstructionsAndSafety";
import CustomPublishingOptions from "../components/CustomPublishingOptions";
import CustomOrganizationAccess from "../components/CustomOrganizationAccess";
import CustomTagsCategories from "../components/CustomTagsCategories";
import { useNavigate } from "react-router";

/* ================= TYPES ================= */
type ModalType = "edit" | "archive" | "delete" | null;

const SessionScreen = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [selectedRow, setSelectedRow] = useState<ProgramRow | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const navigate = useNavigate();
  /* ================= MODAL HELPERS ================= */
  const openModal = (type: ModalType, row?: ProgramRow) => {
    setSelectedRow(row || null);
    setModalType(type);

    if (type === "edit" && row) {
      methods.reset({
        title: row.title || "",
      });
    }
  };

  const closeModal = () => {
    setSelectedRow(null);
    setModalType(null);
    methods.reset({
      title: "",
      description: "",
    });
  };

  const handleSubmit = (data: any) => {
    console.log("Submitted:", data, "Row:", selectedRow);
    closeModal();
  };
  const handleCreateSession = () => {
    navigate("/create-session");
  };

  return (
    <AppLayout>
      <FormProvider {...methods}>
        <Stack gap={"24px"}>
          <CustomPageHeader
            title="Sessions"
            subtitle="Manage and create sessions"
          >
            <CustomButton
              title="Upload Session"
              startIcon={<Add />}
              variant="contained"
              active={true}
              onClick={handleCreateSession}
            />
          </CustomPageHeader>

          <CustomTextField
            placeholder="Search by title"
            type="text"
            name="search"
          />

          <DynamicTable<ProgramRow>
            columns={columns}
            data={rows}
            rowMenu={(row) => [
              {
                title: "Edit",
                icon: (
                  <img
                    src="/assets/icons/editIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal("edit", row),
              },
              {
                title: "Archive",
                icon: (
                  <img
                    src="/assets/icons/folderIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal("archive", row),
              },
              {
                title: "Delete",
                icon: (
                  <img
                    src="/assets/icons/trashIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal("delete", row),
              },
            ]}
          />

          <CustomTagsCategories />

          <CustomnstructionsAndSafety />
          <CustomPublishingOptions />
          <CustomOrganizationAccess />
        </Stack>

        {/* ================= EDIT MODAL ================= */}
        {modalType === "edit" && selectedRow && (
          <CustomModal
            open
            onClose={closeModal}
            title="Edit Session"
            subtitle="Update session information"
            maxWidth="sm"
          >
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <Stack gap="16px">
                <CustomTextField
                  label="Session Title"
                  name="title"
                  placeholder="Enter title"
                  type="text"
                />
                <CustomTextField
                  label="Description"
                  name="description"
                  placeholder="Enter description"
                  type="text"
                />

                <Stack direction="row" justifyContent="end" gap="8px" mt={2}>
                  <CustomButton
                    title="Cancel"
                    variant="outlined"
                    onClick={closeModal}
                    width="99px"
                    active
                  />
                  <CustomButton
                    title="Save Changes"
                    variant="contained"
                    active
                  />
                </Stack>
              </Stack>
            </form>
          </CustomModal>
        )}

        {/* ================= ARCHIVE MODAL ================= */}
        {modalType === "archive" && selectedRow && (
          <CustomModal
            open
            onClose={closeModal}
            title="Archive Session"
            subtitle="Are you sure you want to archive this session?"
          >
            <Stack direction="row" justifyContent="end" gap="8px">
              <CustomButton
                title="Cancel"
                variant="outlined"
                onClick={closeModal}
                width="99px"
                active
              />
              <CustomButton title="Archive" variant="contained" active />
            </Stack>
          </CustomModal>
        )}

        {/* ================= DELETE MODAL ================= */}
        {modalType === "delete" && selectedRow && (
          <CustomModal
            open
            onClose={closeModal}
            title="Delete Session"
            subtitle="This action cannot be undone. Are you sure?"
          >
            <Stack direction="row" justifyContent="end" gap="8px">
              <CustomButton
                title="Cancel"
                variant="outlined"
                onClick={closeModal}
                width="99px"
                active
              />
              <CustomButton title="Delete" variant="contained" active />
            </Stack>
          </CustomModal>
        )}
      </FormProvider>
    </AppLayout>
  );
};

export default SessionScreen;
