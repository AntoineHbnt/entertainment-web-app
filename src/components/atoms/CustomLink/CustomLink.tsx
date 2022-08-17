import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.styles.css";

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={`customLink  ${match ? "active" : ""}`}>
      {children}
    </Link>
  );
}
