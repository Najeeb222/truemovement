import { MoreVert } from "@mui/icons-material";
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
  Stack,
  Box,
} from "@mui/material";
import { COLORS, FireIcon, UserBadgeIcon } from "@src/constant";
import { StatusChip, CustomPill } from "@src/shared/components";
import type { ReactNode } from "react";

/* ================= TYPES ================= */

export type ColumnType =
  | "text"
  | "pill"
  | "status"
  | "actions"
  | "date"
  | "role"
  | "tagActions"
  | "streak"
  | "badges";

export interface Column<T> {
  key: keyof T | "actions";
  label: string;
  type: ColumnType;
  render?: (row: T) => ReactNode; // optional custom renderer
}

export interface RowMenuItem<T> {
  title: string;
  icon?: ReactNode;
  color?: string;
  onClick: (row: T) => void;
}

interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowMenu?: (row: T) => RowMenuItem<T>[]; // function to provide custom menu per row
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onRowClick?: (row: T) => void;
}

/* ================= COMPONENT ================= */

export default function DynamicTable<T extends Record<string, unknown>>({
  columns,
  data,
  rowMenu,
  onEdit,
  onDelete,
  onRowClick,
}: DynamicTableProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  // const [modalType, setModalType] = useState<"edit" | "archive" | "trash" | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: T) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const renderCell = (column: Column<T>, row: T) => {
    if (column.render) return column.render(row);

    const value =
      column.key === "actions" ? undefined : row[column.key as keyof T];

    switch (column.type) {
      case "pill":
        return <CustomPill label={String(value)} />;
      case "role":
        return (
          <CustomPill
            label={String(value)}
            color={COLORS.natural.black}
            isIcone={true}
          />
        );
      case "status":
        return <StatusChip status={String(value)} />;
      case "badges":
        return (
          <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
            <UserBadgeIcon />
            <Typography>{String(value)} days</Typography>
          </Stack>
        );
      case "streak":
        return (
          <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
            <FireIcon />
            <Typography>{String(value)} days</Typography>
          </Stack>
        );
      case "actions":
        return (
          <IconButton onClick={(e) => handleMenuOpen(e, row)}>
            <MoreVert />
          </IconButton>
        );
      case "date":
        return (
          <Typography
            variant="bodySmallLight"
            sx={{ color: COLORS.text.secondary }}
          >
            {String(value)}
          </Typography>
        );
      case "tagActions":
        return (
          <Stack direction={"row"} sx={{ gap: "16px", justifyContent: "end" }}>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                if (onEdit) onEdit(row);
                else handleMenuOpen(e, row);
              }}
            >
              <Box
                component={"img"}
                src="/assets/icons/editIcon.svg"
                sx={{ width: "16px", height: "16px" }}
              />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                if (onDelete) onDelete(row);
                else handleMenuOpen(e, row);
              }}
            >
              <Box
                component={"img"}
                src="/assets/icons/trashIcon.svg"
                sx={{ width: "16px", height: "16px" }}
              />
            </IconButton>
          </Stack>
        );

      default:
        return (
          <Typography variant="bodySmallLight" color={COLORS.text.primary}>
            {String(value ?? "")}
          </Typography>
        );
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
              <TableRow
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                sx={{
                  cursor: onRowClick ? "pointer" : "default",
                  "&:hover": {
                    backgroundColor: onRowClick
                      ? COLORS.natural[50] || "#f9f9f9"
                      : "inherit",
                  },
                }}
              >
                {columns.map((col) => (
                  <TableCell key={String(col.key)} sx={{ py: "4px" }}>
                    {renderCell(col, row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dynamic Custom Row Menu */}
      {rowMenu && selectedRow && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{
            sx: {
              borderRadius: "8px",
              minWidth: "140px",
              boxShadow: "  0px 4px 6px -1px #0000001A;",
            },
          }}
        >
          {rowMenu(selectedRow).map((item, idx) => (
            <MenuItem
              key={idx}
              onClick={() => {
                item.onClick(selectedRow);
                handleMenuClose();
              }}
              sx={{ color: item.color || COLORS.text.primary }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <Typography variant="bodySmallLight" color="inherit">
                {item.title}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}
