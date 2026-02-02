import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";

import {
  COLORS,
  RailColumns,
  RailRows,
  ROUTES,
  tagsColumns,
  tagsRow,
} from "@src/constant";
import {
  CreateTagModal,
  CustomButton,
  CustomModal,
  CustomPageHeader,
  DynamicTable,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import { useNavigate } from "react-router";

const tabList = ["Rails", "Team Rails"];

const RailsAndCurationScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
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
      <CustomPageHeader title="Rails & Curation" subtitle="Manage carousels">
        <CustomButton
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
      </CustomPageHeader>

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
        <DynamicTable
          columns={RailColumns}
          data={RailRows}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>

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
    </AppLayout>
  );
};

export default RailsAndCurationScreen;
