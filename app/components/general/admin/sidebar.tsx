import { VFC } from "react";
import { Link } from "remix";

const Sidebar: VFC = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar--title">
        <Link to="/admin">Schole Admin</Link>
      </section>
      <div className="sidebar--linkArea">
        <section>
          <Link to="/admin/categories">Categories</Link>
        </section>
        <section>
          <Link to="/admin/members">Members</Link>
        </section>
        <section>
          <Link to="/admin/articles">Articles</Link>
        </section>
        <section>
          <Link to="/admin/videos">Videos</Link>
        </section>
        <section>
          <Link to="/admin/books">Books</Link>
        </section>

        <form action="logout" method="post">
          <button>Logout</button>
        </form>
      </div>
    </aside>
  );
};
export default Sidebar;
