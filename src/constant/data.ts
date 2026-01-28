import type { Column } from "@src/shared/components/DynamicTable/DynamicTable";
import type { ProgramRow } from "@src/types";

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

// export const columns = [
//   {
//     key: "title",
//     label: "Title",
//     type: "text",
//   },
//   {
//     key: "sport",
//     label: "Sport",
//     type: "pill",
//   },
//   {
//     key: "painPoint",
//     label: "Pain Point",
//     type: "pill",
//   },
//   {
//     key: "props",
//     label: "Props",
//     type: "pill",
//   },
//   {
//     key: "duration",
//     label: "Duration",
//     type: "pill",
//   },
//   {
//     key: "status",
//     label: "Status",
//     type: "status",
//   },
//   {
//     key: "date",
//     label: "Date Uploaded",
//     type: "text",
//   },
//   {
//     key: "actions",
//     label: "",
//     type: "actions",
//   },
// ];


export const columns: Column<ProgramRow>[] = [
  { key: "title", label: "Title", type: "text" },
  { key: "sport", label: "Sport", type: "pill" },
  { key: "painPoint", label: "Pain Point", type: "pill" },
  { key: "props", label: "Props", type: "pill" },
  { key: "duration", label: "Duration", type: "pill" },
  { key: "status", label: "Status", type: "status" },
  { key: "date", label: "Date Uploaded", type: "text" },
  { key: "actions", label: "", type: "actions" },
];