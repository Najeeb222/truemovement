import { Add } from "@mui/icons-material";
import { Box, Icon, Stack, Typography } from "@mui/material";
import { COLORS, SessionsIcon } from "@src/constant";
import { CustomButton, StatusChip } from "@src/shared/components";
import type React from "react";

interface TeamSession {
  id: string;
  title: string;
  status: "Active" | "Inactive";
  icon: string | React.ReactNode;
}

interface TeamCustomCardProps {
  title: string;
  subTitle: string;
  sessions: TeamSession[];
  onCreate?: () => void;
  onDelete?: (id: string) => void;
}

const TeamCustomCard: React.FC<TeamCustomCardProps> = ({
  title,
  subTitle,
  sessions,
  onCreate,
  onDelete,
}) => {
  return (
    <Stack
      sx={{
        borderRadius: "14px",
        border: `1px solid ${COLORS.natural[100]}`,
        padding: { xs: "16px", sm: "24px" },
        gap: { xs: "20px", sm: "30px" },
        background: COLORS.surface.white,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Stack spacing={"4px"}>
          <Typography
            variant="bodyMeduiemLight"
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="bodySmallLight"
            color="textSecondary"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            {subTitle}
          </Typography>
        </Stack>

        <CustomButton
          title="Create Session"
          startIcon={<Add />}
          variant="contained"
          active
          onClick={onCreate}
          width={{ xs: "100%", sm: "auto" }}
        />
      </Box>

      {/* Sessions List */}
      <Stack gap="12px">
        {sessions.length === 0 ? (
          <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
            No sessions created yet
          </Typography>
        ) : (
          sessions.map((session) => (
            <Stack
              key={session.id}
              direction="row"
              sx={{
                background: COLORS.gray.bg,
                borderRadius: "10px",
                border: `1px solid ${COLORS.natural[100]}`,
                padding: "16px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    border: `1px solid ${COLORS.natural[100]}`,
                    background: COLORS.natural[100],
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {typeof session.icon === "string" ? (
                    <Box
                      component="img"
                      src={session.icon}
                      sx={{ width: "24px", height: "24px" }}
                    />
                  ) : (
                    session.icon
                  )}
                </Box>

                <Typography
                  variant="bodyMeduiemLight"
                  color={COLORS.text.primary}
                  sx={{
                    fontSize: { xs: "13px", sm: "16px" },
                    lineHeight: { xs: "1.2", sm: "1.5" },
                  }}
                >
                  {session.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "8px", sm: "12px" },
                }}
              >
                <StatusChip status={session.status} />
                <Box
                  component="img"
                  src="/assets/icons/trashIcon.svg"
                  sx={{ width: "16px", height: "16px", cursor: "pointer" }}
                  onClick={() => onDelete?.(session.id)}
                />
              </Box>
            </Stack>
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default TeamCustomCard;
