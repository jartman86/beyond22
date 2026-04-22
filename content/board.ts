export type BoardMember = {
  name: string | null;
  position: string;
  bio: string | null;
  why: string | null;
  headshot: string | null;
  filled: boolean;
};

export const board: BoardMember[] = [
  {
    name: null,
    position: "President",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
  {
    name: null,
    position: "Vice President",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
  {
    name: null,
    position: "Secretary / Treasurer",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
  {
    name: null,
    position: "Legislative Advocacy Lead",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
  {
    name: null,
    position: "Education & Awareness Lead",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
  {
    name: null,
    position: "Resource & Support Lead",
    bio: null,
    why: null,
    headshot: null,
    filled: false,
  },
];
