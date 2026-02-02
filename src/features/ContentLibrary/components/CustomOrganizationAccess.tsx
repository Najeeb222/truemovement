import { Box, Stack, Typography } from "@mui/material";
import { CloseCircleIcon, COLORS, SplitCircleIcon } from "@src/constant";
import {
  CustomCheckbox,
  CustomPill,
  CustomTextField,
} from "@src/shared/components";
import { useFormContext, useWatch } from "react-hook-form";
import { useState } from "react";

const CustomOrganizationAccess = () => {
  const { control, setValue } = useFormContext();
  const accessType = useWatch({ control, name: "accessType" });
  const selectedOrgs =
    useWatch({ control, name: "selectedOrganizations" }) || [];
  const selectedTags = useWatch({ control, name: "orgTags" }) || [];
  const [searchTerm, setSearchTerm] = useState("");

  const handleAccessTypeChange = (value: string) => {
    setValue("accessType", value);
  };

  const handleOrgToggle = (org: string) => {
    const current = [...selectedOrgs];
    const index = current.indexOf(org);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(org);
    }
    setValue("selectedOrganizations", current);
  };

  const handleTagToggle = (tag: string) => {
    const current = [...selectedTags];
    const index = current.indexOf(tag);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(tag);
    }
    setValue("orgTags", current);
  };

  const organizationTags = [
    "Hockey",
    "Fitness",
    "Wellness",
    "Athlete",
    "Rehab",
  ];
  const organizations = [
    "Organization A",
    "Organization B",
    "Organization C",
    "Organization D",
    "Organization E",
  ];
  const filteredOrgs = searchTerm
    ? organizations.filter((org) =>
        org.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const getBoxStyles = (type: string) => ({
    border: `2px solid ${accessType === type ? COLORS.surface.black : COLORS.natural[100]}`,
    borderRadius: "10px",
    padding: { xs: 1.5, sm: 2, md: 2.5 },
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
    cursor: "pointer",
    transition: "border-color 0.2s ease-in-out",
    background: COLORS.surface.white,
  });

  return (
    <Stack
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        background: COLORS.surface.white,
        borderRadius: "14px",
        padding: { xs: 2, sm: 3 },
        gap: "24px",
        width: "100%",
      }}
    >
      <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
        Organization Access
      </Typography>

      <Stack spacing={1}>
        <Typography variant="bodySmall" color={COLORS.text.primary}>
          Who can access this session? *
        </Typography>

        {/* Global Access */}
        <Box
          sx={getBoxStyles("global")}
          onClick={() => handleAccessTypeChange("global")}
        >
          <CustomCheckbox name="accessType" value="global" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SplitCircleIcon width="16px" height="16px" />
              <Typography variant="bodyMedium" color={COLORS.text.primary}>
                Global Access
              </Typography>
            </Stack>
            <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
              All users and organizations can access this session regardless of
              their organization
            </Typography>
          </Box>
        </Box>

        {/* Organizations with specific tags */}
        <Box
          sx={getBoxStyles("tags")}
          onClick={() => handleAccessTypeChange("tags")}
        >
          <CustomCheckbox name="accessType" value="tags" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <Stack direction="column" spacing={"4px"}>
              <Typography variant="bodyMedium" color={COLORS.text.primary}>
                Organizations with specific tags
              </Typography>
              <Typography
                variant="bodySmallLight"
                color={COLORS.text.secondary}
              >
                Grant access based on organization tags.
              </Typography>
            </Stack>
            {accessType === "tags" && (
              <Box
                sx={{ display: "flex", gap: "12px", flexDirection: "column" }}
              >
                <Typography variant="bodySmallLight">
                  Select one or more tags. Any organization with these tags will
                  have access.
                </Typography>
                <Stack gap={"12px"} direction={"row"} flexWrap="wrap">
                  {organizationTags.map((tag) => (
                    <CustomPill
                      key={tag}
                      label={tag}
                      selected={selectedTags.includes(tag)}
                      endIcon={
                        selectedTags.includes(tag) ? (
                          <CloseCircleIcon />
                        ) : undefined
                      }
                      onClick={() => handleTagToggle(tag)}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </Box>

        {/* All organizations */}
        <Box
          sx={getBoxStyles("all")}
          onClick={() => handleAccessTypeChange("all")}
        >
          <CustomCheckbox name="accessType" value="all" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="bodyMedium" color={COLORS.text.primary}>
                All organizations
              </Typography>
            </Stack>
            <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
              All organizations can access this content.
            </Typography>
          </Box>
        </Box>

        {/* Selected organizations only */}
        <Box
          sx={getBoxStyles("selected")}
          onClick={() => handleAccessTypeChange("selected")}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomCheckbox name="accessType" value="selected" />
              <Typography variant="bodyMedium" color={COLORS.text.primary}>
                Selected organizations only
              </Typography>
            </Stack>

            <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
              Manually choose which organizations can access this content.
            </Typography>

            {accessType === "selected" && (
              <Stack spacing={2} mt={1} width="100%">
                <CustomTextField
                  name="orgSearch"
                  placeholder="Search organizations"
                  type="text"
                  isSearch={true}
                  value={searchTerm}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                />

                {selectedOrgs.length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ gap: 1 }}
                  >
                    {selectedOrgs.map((org: string) => (
                      <CustomPill
                        key={org}
                        label={org}
                        selected
                        endIcon={<CloseCircleIcon />}
                        onClick={() => handleOrgToggle(org)}
                      />
                    ))}
                  </Stack>
                )}

                {searchTerm && (
                  <Stack
                    spacing={1}
                    sx={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {filteredOrgs.map((org) => (
                      <Box
                        key={org}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrgToggle(org);
                        }}
                        sx={{ cursor: "pointer" }}
                      >
                        <CustomCheckbox
                          name="temp_orgs"
                          value={org}
                          label={org}
                          checked={selectedOrgs.includes(org)}
                        />
                      </Box>
                    ))}
                    {filteredOrgs.length === 0 && (
                      <Typography variant="bodySmallLight">
                        No organizations found
                      </Typography>
                    )}
                  </Stack>
                )}
              </Stack>
            )}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CustomOrganizationAccess;
