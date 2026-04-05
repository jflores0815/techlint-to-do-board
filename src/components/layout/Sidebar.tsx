const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">TB</div>

      <nav className="sidebar-nav">
        <button>Dashboard</button>
        <button>My Tasks</button>
        <button>Notifications</button>
        <button>Settings</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
