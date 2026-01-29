import { Menu, MenuItem, ListItemIcon, Typography, Box } from "@mui/material";
import type { ReactNode } from "react";
import { COLORS } from "@src/constant";

export interface MenuItemType {
    title: string;
    icon?: ReactNode;       // Any ReactNode, like <img> or MUI icon
    color?: string;         // Optional text color
    onClick: () => void;
}

interface CustomRowMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    items: MenuItemType[];
    minWidth?: number;
}

 const CustomRowMenu = ({
    anchorEl,
    open,
    onClose,
    items,
    minWidth = 150,
}: CustomRowMenuProps) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            PaperProps={{
                sx: {
                    borderRadius: "8px",
                    minWidth: `${minWidth}px`,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                },
            }}
        >
            {items.map((item, idx) => (
                <MenuItem
                    key={idx}
                    onClick={() => {
                        item.onClick();
                        onClose();
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
    );
};

export default CustomRowMenu;