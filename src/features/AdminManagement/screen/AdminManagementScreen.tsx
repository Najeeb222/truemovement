import { Add } from "@mui/icons-material";
import { useState } from "react";
import {
  CustomButton,
  CustomPageHeader,
  DynamicTable,
  CustomModal,
  CustomTextField,
  CustomSelect,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import { FormProvider, useForm } from "react-hook-form";
import SearchAdmin from "../components/SearchAdmin";
import { Stack, Typography, Box, Container } from "@mui/material";

import type { AdminRow } from "@src/constant";
import {
  adminRole,
  AdminTableColumns,
  AdminTableRows,
  COLORS,
} from "@src/constant";

type ModalType = "add" | "edit" | "delete" | "suspend" | null;

// Role → permissions mapping
const rolePermissionsMap: Record<string, string[]> = {
  superAdmin: [
    "Full system access",
    "User management",
    "All content",
    "All analytics",
    "System settings",
  ],
  contentManager: [
    "Manage sessions",
    "Manage programs",
    "Manage roles",
    "View analytics",
  ],
};

const AdminManagementScreen = () => {
  // Default role: take the first role from table or use "superAdmin"
  const defaultRole = AdminTableRows[0]?.role || "superAdmin";

  const methods = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      role: defaultRole, // <-- default role
    },
  });

  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  // Open modal helper
  const openModal = (type: ModalType, row?: any) => {
    setSelectedRow(row || null);
    setModalType(type);
    if (row) {
      methods.reset({
        fullName: row.name,
        email: row.email,
        role: row.role,
      });
    } else if (type === "add") {
      methods.reset({
        fullName: "",
        email: "",
        role: defaultRole,
      });
    }
  };

  const closeModal = () => {
    setSelectedRow(null);
    setModalType(null);
    methods.reset({
      fullName: "",
      email: "",
      role: defaultRole,
    });
  };

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    closeModal();
  };

  // WATCH role for dynamic permissions
  const watchedRole = methods.watch("role");
  const currentRole = watchedRole || selectedRow?.role || defaultRole;
  const permissions = rolePermissionsMap[currentRole] || [];

  return (
    <AppLayout>
      <FormProvider {...methods}>
        <Container
          maxWidth={"lg"}
          component={Stack}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          disableGutters
        >
          <CustomPageHeader
            subtitle="Manage administrator access and permissions"
            title="Admin Accounts"
          >
            <CustomButton
              title="Add Admin"
              startIcon={<Add />}
              variant="contained"
              active={true}
              onClick={() => openModal("add")}
            />
          </CustomPageHeader>

          <SearchAdmin />

          <DynamicTable<AdminRow>
            columns={AdminTableColumns}
            data={AdminTableRows}
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
                title: "Resend Invite",
                icon: (
                  <img
                    src="/assets/icons/MessageIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => console.log("Resend clicked", row),
              },
              {
                title: "Reactivate",
                icon: (
                  <img
                    src="/assets/icons/shieldIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal(null, row),
              },
              {
                title: "Suspend",
                icon: (
                  <img
                    src="/assets/icons/shieldIcon.svg"
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                ),
                onClick: () => openModal("suspend", row),
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
        </Container>

        {/* Add/Edit Admin Modal */}
        {(modalType === "add" || modalType === "edit") && (
          <CustomModal
            open={true}
            onClose={closeModal}
            title={modalType === "add" ? "Add New Admin" : "Edit Admin"}
            subtitle="Create a new administrator account with specific role permissions"
            maxWidth="sm"
          >
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <Stack gap="16px">
                <CustomTextField
                  label="Full Name *"
                  name="fullName"
                  placeholder="Enter full name"
                  type="text"
                />
                <CustomTextField
                  label="Email Address *"
                  name="email"
                  placeholder="Enter email address"
                  type="email"
                />
                <CustomSelect label="Role" name="role" options={adminRole} />

                {/* Role Permissions */}
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "17px",
                    background: COLORS.gray.bg,
                    border: `1px solid ${COLORS.natural[100]}`,
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="bodySmall"
                    color={COLORS.text.primary}
                    mb={1}
                  >
                    Role Permissions:
                  </Typography>

                  <Stack component="ul" pl={2} spacing={0.5}>
                    {permissions.map((perm) => (
                      <li key={perm}>
                        <Typography
                          variant={"bodySmallLight"}
                          color={COLORS.text.primary}
                        >
                          {perm}
                        </Typography>
                      </li>
                    ))}
                  </Stack>
                </Box>

                <Stack direction="row" justifyContent="end" gap="8px" mt={2}>
                  <CustomButton
                    title="Cancel"
                    variant="outlined"
                    onClick={closeModal}
                    width="99px"
                    active
                  />
                  <CustomButton
                    title={modalType === "add" ? "Add Admin" : "Save Changes"}
                    variant="contained"
                    active
                  />
                </Stack>
              </Stack>
            </form>
          </CustomModal>
        )}

        {/* Archive Modal */}
        {modalType === "suspend" && selectedRow && (
          <CustomModal
            open={true}
            onClose={closeModal}
            title="Suspend Admin"
            subtitle="Are you sure you want to suspend this admin account? You can unsuspend anytime from this list."
          >
            <Stack direction="row" justifyContent="end" gap="8px">
              <CustomButton
                title="Cancel"
                variant="outlined"
                onClick={closeModal}
                width="99px"
                active
              />
              <CustomButton title="Suspend Admin" variant="contained" active />
            </Stack>
          </CustomModal>
        )}

        {/* Delete Modal */}
        {modalType === "delete" && selectedRow && (
          <CustomModal
            open={true}
            onClose={closeModal}
            title="Delete Admin"
            subtitle="Are you sure you want to delete this admin account? This action cannot be undone."
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
                title="Delete Admin"
                variant="contained"
                active
                background={COLORS.error.button}
                textColor={COLORS.surface.white}
              />
            </Stack>
          </CustomModal>
        )}
      </FormProvider>
    </AppLayout>
  );
};

export default AdminManagementScreen;
