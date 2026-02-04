export interface ProgramRow extends Record<string, unknown> {
  title: string;
  sport?: string;
  painPoint?: string;
  props?: string;
  duration?: string;
  status?:
    | "Published"
    | "Draft"
    | "Scheduled"
    | "Archived"
    | "Active"
    | "Inactive";
  date?: string;
}

export interface RailRow extends Record<string, unknown> {
  title: string;
  Items: string;
  status: "Active" | "Inactive" | "Archived";
}

export interface OrganizationRow extends Record<string, unknown> {
  Organization: string;
  members: number;
  activeCodes: number;
  status: "Active" | "Inactive" | "Archived";
}
