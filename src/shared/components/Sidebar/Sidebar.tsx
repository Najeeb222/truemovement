import { List, ListItem, ListItemIcon, Typography, Box, Collapse } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router";
import SettingsIcon from "@mui/icons-material/Settings";

import { COLORS } from "@src/constant";
import { ROUTES } from "@src/constant/routes";
import {
    AdminManagementIcon,
    AnalyticsIcon,
    AnnouncementIcon,
    ContentLibraryIcon,
    DashboardLogo,
    EducationalIcon,
    OrganizationIcon,
    ProgramsIcon,
    RailsIcon,
    SessionsIcon,
    TagsIcon,
} from "@src/constant";
import { useState, useEffect } from "react";

const Sidebar = ({ onItemClick }: { onItemClick?: () => void }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const subMenuItems = [
        { title: "Sessions", icon: SessionsIcon, path: ROUTES.sessions },
        { title: "Programs", icon: ProgramsIcon, path: ROUTES.programs },
        { title: "Educational", icon: EducationalIcon, path: ROUTES.educational },
        { title: "Rails & Curation", icon: RailsIcon, path: ROUTES.railsCuration },
        { title: "Announcements", icon: AnnouncementIcon, path: ROUTES.announcements },
        { title: "Tags", icon: TagsIcon, path: ROUTES.tags },
    ];

    const pages = [
        { title: "Dashboard", icon: DashboardLogo, path: ROUTES.dashboard },
        {
            title: "Content Library",
            icon: ContentLibraryIcon,
            path: ROUTES.contentLibrary,
            submenu: subMenuItems
        },
        { title: "Organizations", icon: OrganizationIcon, path: ROUTES.organizations },
        { title: "Analytics", icon: AnalyticsIcon, path: ROUTES.analytics },
        { title: "Admin Management", icon: AdminManagementIcon, path: ROUTES.adminManagement },
        { title: "Settings", icon: SettingsIcon, path: ROUTES.settings },
    ];

    // Check if any submenu is active
    const isAnySubMenuActive = subMenuItems.some(item => location.pathname === item.path);

    useEffect(() => {
        if (isAnySubMenuActive) {
            setExpandedMenu("Content Library");
        } else {
            setExpandedMenu(null);
        }
    }, [location.pathname, isAnySubMenuActive]);

    const handleMenuToggle = (title: string, defaultPath?: string) => {
        if (title === "Content Library" && !expandedMenu) {
            // If opening Content Library for first time, navigate to Sessions
            navigate(defaultPath || ROUTES.sessions);
        }
        setExpandedMenu(expandedMenu === title ? null : title);
    };

    return (
        <Box
            sx={{
                width: 255,
                height: "100vh",
                position: 'fixed',
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                borderRight: `1px solid ${COLORS.natural[100]}`,
                backgroundColor: "#fff",
                zIndex: 1200,
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid ${COLORS.natural[100]}`,
                }}
            >
                <Box component="img" src="/assets/images/dashbaordLogo.svg" sx={{ width: 170 }} />
            </Box>

      
            <List
                sx={{
                    flex: 1,
                    p: 2,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: COLORS.natural[100],
                        borderRadius: '3px',
                        '&:hover': {
                            backgroundColor: COLORS.natural[100],
                        },
                    },
                }}
            >
                {pages.map((page: any) => {
                    const isActive = location.pathname === page.path;
                    const isSubMenuActive = page.submenu && page.submenu.some((item: any) => location.pathname === item.path);
                    const shouldShowAsActive = isActive || isSubMenuActive;
                    const Icon = page.icon;
                    const isExpanded = expandedMenu === page.title;
                    const hasSubmenu = page.submenu && page.submenu.length > 0;

                    return (
                        <Box key={page.title}>
                            <ListItem
                                component={hasSubmenu ? "div" : NavLink}
                                to={hasSubmenu ? undefined : page.path}
                                onClick={() => {
                                    if (hasSubmenu) {
                                        handleMenuToggle(page.title, page.submenu?.[0].path);
                                        if (!isExpanded) {
                                            onItemClick?.();
                                        }
                                    } else {
                                        onItemClick?.();
                                    }
                                }}
                                sx={{
                                    mb: 1,
                                    gap: "12px",
                                    borderRadius: 1,
                                    px: 2,
                                    py: 1,
                                    textDecoration: "none",
                                    cursor: 'pointer',
                                    backgroundColor: shouldShowAsActive ? COLORS.secondary.light : "transparent",
                                    "&:hover": { backgroundColor: COLORS.secondary.light },
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1 }}>
                                    <ListItemIcon sx={{ minWidth: "auto", color: shouldShowAsActive ? COLORS.secondary.main : COLORS.text.primary }}>
                                        <Icon />
                                    </ListItemIcon>

                                    <Typography
                                        variant="bodyMedium"
                                        sx={{ color: shouldShowAsActive ? COLORS.secondary.main : COLORS.text.primary }}
                                    >
                                        {page.title}
                                    </Typography>
                                </Box>

                                {/* {hasSubmenu && (
                                    <ExpandMoreIcon
                                        sx={{
                                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s',
                                            color: shouldShowAsActive ? COLORS.secondary.main : COLORS.text.primary,
                                        }}
                                    />
                                )} */}
                            </ListItem>

                            {hasSubmenu && (
                                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                    <List sx={{ ml: '14px' }}>
                                        {page.submenu.map((subItem: any) => {
                                            const isSubActive = location.pathname === subItem.path;
                                            const SubIcon = subItem.icon;

                                            return (
                                                <ListItem
                                                    key={subItem.title}
                                                    component={NavLink}
                                                    to={subItem.path}
                                                    onClick={onItemClick}
                                                    sx={{
                                                        maxWidth: '207px',
                                                        mb: 0.5,
                                                        gap: "12px",
                                                        borderRadius: 1,
                                                        px: 2,
                                                        py: 0.75,
                                                        textDecoration: "none",
                                                        backgroundColor: isSubActive ? COLORS.secondary.light : "transparent",
                                                        color: isSubActive ? COLORS.secondary.main : COLORS.text.primary,
                                                        "&:hover": { backgroundColor: COLORS.secondary.light },
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ minWidth: "auto", color: isSubActive ? COLORS.secondary.main : COLORS.text.primary }}>
                                                        <SubIcon />
                                                    </ListItemIcon>

                                                    <Typography
                                                        variant="bodySmall"
                                                        sx={{ color: isSubActive ? COLORS.secondary.main : COLORS.text.primary }}
                                                    >
                                                        {subItem.title}
                                                    </Typography>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    );
                })}
            </List>
        </Box>
    );
};

export default Sidebar;
