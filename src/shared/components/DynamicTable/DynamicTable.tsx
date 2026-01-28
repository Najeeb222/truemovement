import { MoreVert, Edit, Delete, Archive } from "@mui/icons-material";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import { COLORS } from "@src/constant";
import {
  StatusChip,
  CustomPill,
  CustomModal,
  CustomButton,
} from "@src/shared/components";
import type { ReactNode } from "react";

/* ================= TYPES ================= */

export type ColumnType = "text" | "pill" | "status" | "actions";

export interface Column<T> {
  key: keyof T | "actions";
  label: string;
  type: ColumnType;
  render?: (row: T) => ReactNode; // Optional custom renderer
}

interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

/* ================= UI HELPERS ================= */

/* ================= COMPONENT ================= */

export default function DynamicTable<T extends Record<string, unknown>>({
  columns,
  data,
}: DynamicTableProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  const [modalType, setModalType] = useState<
    "edit" | "archive" | "trash" | null
  >(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: T) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (type: "edit" | "archive" | "trash") => {
    setModalType(type);
    handleMenuClose();
  };

  const handleModalClose = () => {
    setModalType(null);
    setSelectedRow(null);
  };

  const renderCell = (column: Column<T>, row: T) => {
    if (column.render) {
      return column.render(row);
    }

    const value =
      column.key === "actions" ? undefined : row[column.key as keyof T];

    switch (column.type) {
      case "pill":
        return <CustomPill label={String(value)} />;

      case "status":
        return <StatusChip status={String(value)} />;

      case "actions":
        return (
          <IconButton onClick={(e) => handleMenuOpen(e, row)}>
            <MoreVert />
          </IconButton>
        );

      default:
        return String(value ?? "");
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          border: `1px solid ${COLORS.natural[100]}`,
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col.key)} sx={{ paddingY: "13px" }}>
                  <Typography variant="bodySmall" color={COLORS.text.primary}>
                    {col.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell key={String(col.key)} sx={{ py: "4px" }}>
                    <Typography variant="bodySmallLight" py={0}>
                      {renderCell(col, row)}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            minWidth: "150px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <MenuItem onClick={() => handleAction("edit")}>
          <ListItemIcon>
            <Box component={"img"} src="/assets/icons/editIcon.svg" />
          </ListItemIcon>
          <Typography variant="bodySmallLight" color={COLORS.text.primary}>
            Edit Session
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleAction("archive")}>
          <ListItemIcon>
            <Box component={"img"} src="/assets/icons/folderIcon.svg" />
          </ListItemIcon>
          <Typography variant="bodySmallLight" color={COLORS.text.primary}>
            Archive Session
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleAction("trash")}
          sx={{ color: "error.main" }}
        >
          <ListItemIcon>
            <Box component={"img"} src="/assets/icons/trashIcon.svg" />
          </ListItemIcon>
          <Typography variant="bodySmallLight" color={COLORS.text.primary}>
            Trash Session
          </Typography>
        </MenuItem>
      </Menu>

      {/* Custom Modal */}
      {modalType === "edit" && (
        <CustomModal
          open={Boolean(modalType)}
          onClose={handleModalClose}
          title="Edit Session"
          subtitle="Update the details of this session."
        >
          <Stack direction={'row'} justifyContent={'end'} gap={'8px'}>
            <CustomButton
              title="Cancel"
              variant="outlined"
              background={COLORS.primary.main}
              active={true}
              width={'99px'}
              onClick={handleModalClose}
            />
            <CustomButton
              title="Save Changes"
              variant="contained"
              active={true}
              background={COLORS.primary.main}
            />
          </Stack>
        </CustomModal>
      )}

      {modalType === "archive" && (
        <CustomModal
          open={Boolean(modalType)}
          onClose={handleModalClose}
          title="Archive Session"
          subtitle="Are you sure you want to archive this session? Users will not have access to this session anymore. You can publish it again anytime."
        >
          <Stack direction={'row'} justifyContent={'end'} gap={'8px'}>
            <CustomButton
              title="Cancel"
              variant="outlined"
              background={COLORS.primary.main}
              active={true}
              width={'99px'}
              onClick={handleModalClose}
            />
            <CustomButton
              fullWidth
              title="Archive Session"
              variant="contained"
              active={true}
              background={COLORS.primary.main}
            />
          </Stack>
        </CustomModal>
      )}

      {modalType === "trash" && (
        <CustomModal
          open={Boolean(modalType)}
          onClose={handleModalClose}
          title="Delete Session"
          subtitle="Are you sure you want to Delete this session? Users and you will not access to this session anymore. ."
        >
          <Stack direction={'row'} justifyContent={'end'} gap={'8px'}>
            <CustomButton
              title="Cancel"
              variant="outlined"
              background={COLORS.error.button}
              active={true}
              width={'99px'}
              onClick={handleModalClose}
            />
            <CustomButton
              fullWidth
              title="Delete Session"
              variant="contained"
              active={true}
              background={COLORS.error.button}
              textColor={COLORS.surface.white}
            />
          </Stack>
        </CustomModal>
      )}
    </>
  );
}
