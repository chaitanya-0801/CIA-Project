import { Outlet } from "react-router-dom";
import AdminSidebar from "../Component/Common/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex">

      <AdminSidebar />

      <div className="flex-1 bg-(--backgroundLight)">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;