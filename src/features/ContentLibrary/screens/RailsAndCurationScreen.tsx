import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";

import { COLORS, RailColumns, RailRows, ROUTES } from "@src/constant";
import {
  CreateTagModal,
  CustomButton,
  CustomModal,
  CustomPageHeader,
  CustomTextField,
  DynamicTable,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import { useNavigate } from "react-router";
import type { ProgramRow, RailRow } from "@src/types";
import { FormProvider, useForm } from "react-hook-form";

const tabList = ["Rails", "Team Rails"];
type ModalType = "edit" | "deactivate" | "delete" | null;

const RailsAndCurationScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ProgramRow | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const methods = useForm();
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

  const handleTabChange = (_: any, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleEdit = (row: any) => {
    setSelectedTag(row);
    setIsEdit(true);
    setCreateModalOpen(true);
  };

  const handleDelete = (row: any) => {
    setSelectedTag(row);
    setDeleteModalOpen(true);
  };

  const handleAddTag = (tagName: string, category: string) => {
    console.log(`Adding tag: ${tagName} to category: ${category}`);
    // Here you would typically call an API or update state
  };

  const confirmDelete = () => {
    console.log(`Deleting tag: ${selectedTag?.tagName}`);
    // Here you would typically call an API
  };

  return (
    <AppLayout>
      <Container
        maxWidth={"lg"}
        component={Stack}
        spacing={{ xs: 2, sm: 2, md: 3 }}
        disableGutters
      >
        <CustomPageHeader
          title="Rails & Curation"
          subtitle="Manage carousels"
        />
        {/* <CustomButton
          title="Create Tag"
          startIcon={<Add />}
          variant="contained"
          active
          background={COLORS.primary.main}
          onClick={() => {
            setIsEdit(false);
            setSelectedTag(null);
            setCreateModalOpen(true);
          }}
        />
      </CustomPageHeader> */}

        {/* Tabs */}
        <Box>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            // variant="scrollable"
            scrollButtons="auto"
            sx={{ maxWidth: "700px" }}
          >
            {tabList.map((label, index) => (
              <Tab sx={{ width: "100%" }} key={index} label={label} />
            ))}
          </Tabs>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="bodySmallLight">
            Featured rails appear on the mobile home screen. Drag to reorder -
            changes are live on next app refresh.
          </Typography>
          <CustomButton
            title="Create Rail"
            startIcon={<Add />}
            variant="contained"
            background={COLORS.primary.main}
            active
            onClick={() => navigate(ROUTES.createRailsCuration)}
          />
        </Box>
        {/* Tab Content */}
        <Box sx={{ mt: 3 }}>
          <DynamicTable<RailRow>
            columns={RailColumns}
            data={RailRows}
            onEdit={handleEdit}
            onDelete={handleDelete}
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
                title: "Deactivate",
                icon: (
                  <img
                    src="/assets/icons/closeIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal("deactivate", row),
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
        </Box>
      </Container>

      {/* Modals */}
      <CreateTagModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onAdd={handleAddTag}
        initialCategory={isEdit ? tabList[activeTab] : tabList[activeTab]}
        initialTagName={selectedTag?.tagName || ""}
        isEdit={isEdit}
      />

      {deleteModalOpen && (
        <CustomModal
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          title="Delete Tag"
          subtitle="Are you sure you want to Delete this content? Users and you will not access to this content anymore. "
          maxWidth="sm"
        >
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <CustomButton
              title="Cancel"
              variant="outlined"
              background={COLORS.error.button}
              onClick={() => setDeleteModalOpen(false)}
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
                confirmDelete();
                setDeleteModalOpen(false);
              }}
            />
          </Stack>
        </CustomModal>
      )}
      {/* ================= EDIT MODAL ================= */}
      {modalType === "edit" && selectedRow && (
        <CustomModal
          open
          onClose={closeModal}
          title="Edit Session"
          subtitle="Update session information"
          maxWidth="sm"
        >
          <FormProvider {...methods}>
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
          </FormProvider>
        </CustomModal>
      )}

      {/* ================= ARCHIVE MODAL ================= */}
      {modalType === "deactivate" && selectedRow && (
        <CustomModal
          open
          onClose={closeModal}
          title="Deactivate Content"
          subtitle="Are you sure you want to Deactivate this content? Users will not access to this content anymore. You can publish it again anytime."
        >
          <Stack direction="row" justifyContent="end" gap="8px">
            <CustomButton
              title="Cancel"
              variant="outlined"
              onClick={closeModal}
              width="99px"
              active
            />
            <CustomButton
              title="Deactivate Session"
              variant="contained"
              active
            />
          </Stack>
        </CustomModal>
      )}

      {/* ================= DELETE MODAL ================= */}
      {modalType === "delete" && selectedRow && (
        <CustomModal
          open
          onClose={closeModal}
          title="Delete Content"
          subtitle="Are you sure you want to Delete this content? Users and you will not access to this content anymore. "
        >
          <Stack direction="row" justifyContent="end" gap="8px">
            <CustomButton
              title="Cancel"
              variant="outlined"
              onClick={closeModal}
              width="99px"
              active
              background={COLORS.error.button}
            />
            <CustomButton
              title="Delete"
              variant="contained"
              active
              background={COLORS.error.button}
              textColor={COLORS.surface.white}
            />
          </Stack>
        </CustomModal>
      )}
    </AppLayout>
  );
};

export default RailsAndCurationScreen;
