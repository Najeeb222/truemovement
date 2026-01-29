export interface ProgramRow extends Record<string, unknown> {
  title: string;
  sport?: string;
  painPoint?: string;
  props?: string;
  duration?: string;
  status?: "Published" | "Draft" | "Scheduled" | "Archived" |"Active" |"Inactive";
  date?: string;
}
