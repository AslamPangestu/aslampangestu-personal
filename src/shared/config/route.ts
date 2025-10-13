type RouteKey = "home" | "portofolio" | "blog";

interface Route {
  key: RouteKey;
  name: string;
  href: string;
}

export const ROUTES: Route[] = [
  { key: "home", name: "Home", href: "/" },
  { key: "portofolio", name: "Portofolio", href: "/projects" },
  { key: "blog", name: "Blog", href: "/blogs" },
];
