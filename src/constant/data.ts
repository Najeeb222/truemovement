import type { Column } from "@src/shared/components/DynamicTable/DynamicTable";
import type { ProgramRow, RailRow, OrganizationRow } from "@src/types";

export const cardData = [
  {
    title: "Impressions",
    value: "124,532",
    change: "+12.3%",
    icon: "/assets/icons/eyeIcon.svg",
  },
  {
    title: "Views",
    value: "98,221",
    change: "+8.1%",
    icon: "/assets/icons/playIcon.svg",
  },
  {
    title: "Completed",
    value: "32,190",
    change: "+4.2%",
    icon: "/assets/icons/greenDoneIcon.svg",
  },
  {
    title: "Conversion",
    value: "5.2%",
    change: "+1.1%",
    icon: "/assets/icons/precentageIcon.svg",
  },
  {
    title: "Repeats",
    value: "18,920",
    change: "+3.4%",
    icon: "/assets/icons/loopIcon.svg",
  },
  {
    title: "Streak",
    value: "12 Days",
    change: "+2",
    icon: "/assets/icons/streakIcon.svg",
  },
  {
    title: "Growth",
    value: "23%",
    change: "+6.8%",
    icon: "/assets/icons/growthIcon.svg",
  },
];

export const rows: ProgramRow[] = [
  {
    title: "Lower Back Relief",
    sport: "Hockey",
    painPoint: "Lower Back",
    props: "No Props",
    duration: "10-15 min",
    status: "Published",
    date: "12/13/2025",
  },
  {
    title: "Hip Mobility Flow",
    sport: "Football",
    painPoint: "Hamstring",
    props: "Foam Roller",
    duration: "0-5 min",
    status: "Draft",
    date: "12/13/2025",
  },
  {
    title: "Shoulder Stability",
    sport: "Baseball",
    painPoint: "Neck & Shoulder",
    props: "Mat",
    duration: "10-15 min",
    status: "Scheduled",
    date: "12/13/2025",
  },
  {
    title: "Knee Strengthening",
    sport: "Soccer",
    painPoint: "Calf",
    props: "Bender Ball",
    duration: "20-25 min",
    status: "Scheduled",
    date: "12/13/2025",
  },
  {
    title: "Full Body Recovery",
    sport: "Lacrosse",
    painPoint: "Full Body",
    props: "Stability Ball",
    duration: "0-5 min",
    status: "Archived",
    date: "12/13/2025",
  },
];

export const columns: Column<ProgramRow>[] = [
  { key: "title", label: "Title", type: "text" },
  { key: "sport", label: "Sport", type: "pill" },
  { key: "painPoint", label: "Pain Point", type: "pill" },
  { key: "props", label: "Props", type: "pill" },
  { key: "duration", label: "Duration", type: "pill" },
  { key: "status", label: "Status", type: "status" },
  { key: "date", label: "Date Uploaded", type: "date" },
  { key: "actions", label: "", type: "actions" },
];
export const TeamInfoRows: ProgramRow[] = [
  {
    user: "Lower Back Relief",
    streak: "Hockey",
    longestStreak: "Lower Back",
    badges: "No badges",
    duration: "10-15 min",
    status: "Published",
    date: "12/13/2025",
  },
  {
    user: "Hip Mobility Flow",
    streak: "Football",
    longestStreak: "Hamstring",
    badges: "Foam Roller",
    duration: "0-5 min",
    status: "Draft",
    date: "12/13/2025",
  },
  {
    user: "Shoulder Stability",
    streak: "Baseball",
    longestStreak: "Neck & Shoulder",
    badges: "Mat",
    duration: "10-15 min",
    status: "Scheduled",
    date: "12/13/2025",
  },
  {
    user: "Knee Strengthening",
    streak: "Soccer",
    longestStreak: "Calf",
    badges: "Bender Ball",
    duration: "20-25 min",
    status: "Scheduled",
    date: "12/13/2025",
  },
  {
    user: "Full Body Recovery",
    streak: "Lacrosse",
    longestStreak: "Full Body",
    badges: "Stability Ball",
    duration: "0-5 min",

    status: "Archived",
    date: "12/13/2025",
  },
];

export const TeamInfoColumns: Column<ProgramRow>[] = [
  { key: "user", label: "User", type: "text" },
  { key: "streak", label: "Current Streak", type: "streak" },
  { key: "longestStreak", label: "Longest Streak", type: "date" },
  { key: "badges", label: "Badges", type: "badges" },
];
export const AdminTableColumns = [
  { key: "name", label: "Name", type: "text" },
  { key: "email", label: "Email", type: "text" },
  { key: "role", label: "Role", type: "role" },
  { key: "status", label: "Status", type: "status" },
  { key: "lastLogin", label: "Last Login", type: "date" },
  { key: "date", label: "Created", type: "date" },
  { key: "actions", label: "", type: "actions" },
];
export const AdminTableRows = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "contentManager",
    status: "Active",
    lastLogin: "01/20/2026",
    date: "12/13/2025",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "superAdmin",
    status: "Inactive",
    lastLogin: "01/18/2026",
    date: "12/10/2025",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "superAdmin",
    status: "active",
    lastLogin: "01/22/2026",
    date: "12/08/2025",
  },
  {
    name: "James Wilson",
    email: "james.wilson@example.com",
    role: "contentManager",
    status: "Active",
    lastLogin: "01/25/2026",
    date: "12/05/2025",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    role: "superAdmin",
    status: "Archived",
    lastLogin: "01/10/2026",
    date: "12/01/2025",
  },
];
export const RailColumns: Column<RailRow>[] = [
  { key: "title", label: "Rail Name", type: "text" },
  { key: "Items", label: "Items", type: "text" },
  // { key: "role", label: "Role", type: "role" },
  { key: "status", label: "Status", type: "status" },
  // { key: "lastLogin", label: "Last Login", type: "date" },
  // { key: "date", label: "Created", type: "date" },
  { key: "actions", label: "", type: "actions" },
];
export const RailRows: RailRow[] = [
  {
    title: "Sarah Johnson",
    Items: "12 items",
    status: "Active",
  },
  {
    title: "Michael Brown",
    Items: "8 items",
    status: "Inactive",
  },
  {
    title: "Emily Davis",
    Items: "15 items",
    status: "Active",
  },
];
export const OrganizationColumns: Column<OrganizationRow>[] = [
  { key: "Organization", label: "Organization", type: "text" },
  { key: "activeCodes", label: "Active Codes", type: "date" },
  { key: "members", label: "Members", type: "date" },
  { key: "status", label: "Status", type: "status" },
];
export const OrganizationRows: OrganizationRow[] = [
  {
    Organization: "Sarah Johnson",
    members: 2343,
    activeCodes: 3,
    status: "Active",
  },
  {
    Organization: "Michael Brown",
    members: 234,
    activeCodes: 5,
    status: "Archived",
  },
  {
    Organization: "Emily Davis",
    members: 23,
    activeCodes: 2,
    status: "Active",
  },
];

export const adminRole = [
  { value: "superAdmin", label: "Super Admin" },
  { value: "contentManager", label: "Content Manager" },
];
export const analyticsSelect = [
  { value: "allUsers", label: "All Users" },
  { value: "allOrganizations", label: "All Organizations" },
  { value: "acmeCorporation", label: "Acme Corporation" },
  { value: "techStartInc", label: "TechStart Inc" },
  { value: "globalFitnessCo", label: "Global Fitness Co" },
  { value: "wellnessPartners", label: "Wellness Partners" },
];
export const publishingOptions = [
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "scheduled",
    label: "Scheduled",
  },
  {
    value: "published",
    label: "Published",
  },
];

export interface TagRow {
  tagName: string;
}

export const tagsColumns: Column<TagRow>[] = [
  { key: "tagName", label: "Tag Name", type: "pill" },

  { key: "actions", label: "", type: "tagActions" },
];
export const tagsRow = [
  {
    tagName: "Sarah Johnson",
  },
  {
    tagName: "Michael Brown",
  },
  {
    tagName: "Emily Davis",
  },
  {
    tagName: "James Wilson",
  },
  {
    tagName: "Olivia Martinez",
  },
];

export const ACCESS = {
  GLOBAL: "global",
  TAGS: "tags",
  ALL_ORGS: "all_orgs",
  SELECTED_ORGS: "selected_orgs",
};
