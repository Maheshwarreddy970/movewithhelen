// Fictional data for demo purposes only. This is a demo login with no
// backend: anyone who reads the code can see these details.

export const DEMO_EMAIL = "helen.everett@kw.com";
export const DEMO_PASSWORD = "647-702-0046";

export type AdminUser = {
  name: string;
  role: string;
  email: string;
  avatar?: string;
};

export const DEMO_USER: AdminUser = {
  name: "Helen Everett",
  role: "Admin",
  email: DEMO_EMAIL,
};
