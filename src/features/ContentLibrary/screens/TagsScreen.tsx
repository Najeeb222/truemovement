import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Stack, Tab, Tabs } from "@mui/material";

import { COLORS, tagsColumns, tagsRow } from "@src/constant";
import {
  CreateTagModal,
  CustomButton,
  CustomModal,
  CustomPageHeader,
  DynamicTable,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";

const tabList = [
  "Sports",
  "Pain Points",
  "Props",
  "Duration",
  "Organization Tags",
];

const TagsScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);
  const [isEdit, setIsEdit] = useState(false);

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
      <CustomPageHeader
        title="Tags"
        subtitle="Manage tags for categorizing sessions and programs"
      >
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
          sx={{ maxWidth: "810px" }}
        >
          {tabList.map((label, index) => (
            <Tab sx={{ width: "160px" }} key={index} label={label} />
          ))}
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ mt: 3 }}>
        <DynamicTable
          columns={tagsColumns}
          data={tagsRow}
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

export default TagsScreen;
