import { Box, IconButton, Drawer, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const SIDEBAR_WIDTH = 255;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => setMobileOpen((prev) => !prev);

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            {/* ===== Mobile Header ===== */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 64,
                    alignItems: "center",
                    px: 2,
                    borderBottom: "1px solid #e0e0e0",
                    backgroundColor: "#fff",
                    zIndex: 1200,
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            {/* ===== Mobile Drawer ===== */}
            <Drawer
                open={mobileOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { width: SIDEBAR_WIDTH },
                }}
            >
                <Sidebar onItemClick={toggleDrawer} />
            </Drawer>

            {/* ===== Desktop Sidebar ===== */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: SIDEBAR_WIDTH, flexShrink: 0 }}>
                <Sidebar />
            </Box>

            {/* ===== Main Content ===== */}
            <Stack
                direction="column"
                component="main"
                sx={{
                    flex: 1,
                    //   mt: { xs: "64px", md: 0 },
                    //   ml: { xs: 0, md: `${SIDEBAR_WIDTH}px` },
                    // p: { xs: 2, sm: 3, md: 4 },
                    width: "100%",
                    gap: '24px'
                }}
            >
                {children}
            </Stack>
        </Box>
    );
};

export default AppLayout;
