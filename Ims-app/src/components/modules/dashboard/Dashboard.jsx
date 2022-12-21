import { React, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Backdrop from "../../Sidebar/Backdrop";
import Student from "../student/Student";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSideBar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <div>
      {/* <Navbar title="Student Dashboard" /> */}
      {/* Hello i am a student */}
      <Navbar openSidebar={toggleSideBar} title={"Student Dashboard"} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSideBar} />
      <Sidebar
        sidebar={sidebar}
        Home={"Home"}
        Course={"Course"}
        Marks={"Marks"}
        Feedback={"Feedback"}
      />
      <Student
        name="Emmanuel Kiran R"
        pname="Ravindran S"
        reln="Father"
        email="emmanuelkiranr@gmail.com"
        role="student"
        dob="01-01-2000"
        ph="9895688948"
        branch="Computer Science"
        sem="8"
      />
    </div>
  );
};

export default Dashboard;
