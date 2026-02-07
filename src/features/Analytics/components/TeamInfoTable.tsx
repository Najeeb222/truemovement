import { Stack, Typography } from "@mui/material";
import {
  COLORS,
  columns,
  rows,
  TeamInfoColumns,
  TeamInfoRows,
} from "@src/constant";
import { DynamicTable } from "@src/shared/components";
import type { ProgramRow } from "@src/types";
import { useState } from "react";
import { useNavigate } from "react-router";

type ModalType = "edit" | "archive" | "delete" | null;
const TeamInfoTable = () => {
  const [selectedRow, setSelectedRow] = useState<ProgramRow | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const navigate = useNavigate();
  /* ================= MODAL HELPERS ================= */
  const openModal = (type: ModalType, row?: ProgramRow) => {
    setSelectedRow(row || null);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setModalType(null);
  };
  return (
    <Stack
      sx={{ border: `1px solid ${COLORS.natural[100]}`, borderRadius: "14px" }}
    >
      <Typography
        variant="labal"
        padding={"24px"}
        borderBottom={`2px solid ${COLORS.natural[100]}`}
      >
        Team Info
      </Typography>
      <DynamicTable<ProgramRow>
        columns={TeamInfoColumns}
        data={TeamInfoRows}
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
    </Stack>
  );
};

export default TeamInfoTable;
