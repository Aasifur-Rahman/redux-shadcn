import { ModeToggle } from "@/components/modetoggler";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
      <div>
        <h1>
          {" "}
          <span className="font-bold">Task</span>Master
        </h1>
      </div>

      <Link to="/">Tasks</Link>
      <Link to="/user">User</Link>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
