import { Box, Typography } from "@mui/material";
import { COLORS } from "@src/constant";
import { StatusChip } from "@src/shared/components";

// Define component interfaces
interface SessionItem {
  title: string;
  subtitle?: string;
  status: "published" | "draft" | "scheduled";
}

interface RecentUploadCardProps {
  headerIcon?: React.ReactNode;
  headerTitle?: string;
  sessions: SessionItem[];
  showChips?: boolean;
  onChipClick?: (status: string) => void;
  viewAll?: boolean;
}

const RecentUploadCard = ({
  headerIcon,
  headerTitle,
  sessions,
  showChips = true,
  viewAll,
}: RecentUploadCardProps) => {
  return (
    <Box
      border={`1px solid ${COLORS.natural[100]}`}
      borderRadius="14px"
      width="100%"
      // maxWidth={"352px"}
      display="flex"
      flexDirection={"column"}
      bgcolor={COLORS.surface.white}
      gap={"24px"}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "87px",
          width: "100%",
          paddingX: "24px",
          borderBottom: `1px solid ${COLORS.natural[100]}`,
        }}
      >
        {headerIcon && (
          <Box sx={{ display: "flex", alignItems: "center" }}>{headerIcon}</Box>
        )}
        <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
          {headerTitle}
        </Typography>

        {viewAll && (
          <Typography
            variant="bodySmall"
            textAlign={"end"}
            color={COLORS.natural.black}
            flex={1}
          >
            View All
          </Typography>
        )}
      </Box>

      <Box>
        {sessions.map((session, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: `1px solid ${COLORS.natural[100]}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  flexDirection: "column",
                  flex: 1,
                  // padding: '16px',
                }}
              >
                <Typography
                  variant="bodyMeduiemLight"
                  color={COLORS.text.primary}
                >
                  {session.title}
                </Typography>
                <Typography
                  variant="bodySmallLight"
                  color={COLORS.text.secondary}
                >
                  {session.subtitle}
                </Typography>
              </Box>

              {showChips && (
                <StatusChip
                  status={session.status}
                  // onClick={() => onChipClick?.(session.status)}
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentUploadCard;
