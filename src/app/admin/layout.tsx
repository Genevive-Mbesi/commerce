import {Nav, NavLink} from "@/components/Nav"
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
    <Nav>
        <NavLink href="/">Dashboard</NavLink>
    </Nav>
    <div className="container my-6">{children}</div>
    </>
    );
  }
  