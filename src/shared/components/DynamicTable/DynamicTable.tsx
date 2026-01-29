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

} from "@mui/material";
import { COLORS } from "@src/constant";
import { StatusChip, CustomPill, } from "@src/shared/components";
import type { ReactNode } from "react";

/* ================= TYPES ================= */

export type ColumnType = "text" | "pill" | "status" | "actions" | "date" | "role";

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
}

/* ================= COMPONENT ================= */

export default function DynamicTable<T extends Record<string, unknown>>({
  columns,
  data,
  rowMenu,
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

    const value = column.key === "actions" ? undefined : row[column.key as keyof T];

    switch (column.type) {
      case "pill":
        return <CustomPill label={String(value)} />;
      case "role":
        return <CustomPill label={String(value)} color={COLORS.natural.black} isIcone={true} />;
      case "status":
        return <StatusChip status={String(value)} />;
      case "actions":
        return (
          <IconButton onClick={(e) => handleMenuOpen(e, row)}>
            <MoreVert />
          </IconButton>
        );
      case "date":
        return <Typography variant="bodySmallLight" sx={{ color: COLORS.text.secondary }}>{String(value)}</Typography>;
      default:
        return <Typography variant="bodySmallLight" color={COLORS.text.primary}>{String(value ?? "")}</Typography>;
    }
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: "10px", border: `1px solid ${COLORS.natural[100]}`, boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col.key)} sx={{ paddingY: "13px" }}>
                  <Typography variant="bodySmall" color={COLORS.text.primary}>{col.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
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
          PaperProps={{ sx: { borderRadius: "8px", minWidth: "140px", boxShadow: "  0px 4px 6px -1px #0000001A;" } }}
        >
          {rowMenu(selectedRow).map((item, idx) => (
            <MenuItem
              key={idx}
              onClick={() => { item.onClick(selectedRow); handleMenuClose(); }}
              sx={{ color: item.color || COLORS.text.primary }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <Typography variant="bodySmallLight" color="inherit">{item.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}
