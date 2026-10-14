export type Kind = "idea" | "book" | "project" | "post" | "note";

export type Entry = {
  date: string; // "2026-10-14"
  kind: Kind;
  title: string;
  body?: string;
  href?: string;
};


export const now = {
  reading: "Rilke, Lettres à un jeune poète",
  building: "this site",
  training: "water polo",
  thinking: "…",
};

export const entries: Entry[] = [
  {
    date: "2026-10-14",
    kind: "note",
    title: "Started this space",
    body: "No structure. It grows as I do.",
  },
  {
    date: "2026-10-13",
    kind: "book",
    title: "Heart of Darkness, Conrad",
    body: "…",
  },
];