"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  Settings,
  User,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  UserPlus,
  UserCheck,
  UserX,
  Calendar,
  Clock,
  BookOpenCheck,
  BarChart3,
  PieChart,
  TrendingUp,
  Bell,
  Shield,
  Palette,
  UserCog,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Menubar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [expandedItems, setExpandedItems] = useState({});
  const router = useRouter();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      subItems: [],
    },
    {
      name: "Students",
      icon: Users,
      subItems: [
        { name: "All Students", icon: Users, location: "students/allstudents" },
        {
          name: "Add Student",
          icon: UserPlus,
          location: "students/addstudents",
        },
      ],
    },
    {
      name: "Teachers",
      icon: GraduationCap,
      subItems: [
        {
          name: "All Teachers",
          icon: GraduationCap,
          location: "teachers/allteachers",
        },
        {
          name: "Add Teacher",
          icon: UserPlus,
          location: "teachers/addteacher",
        },
        { name: "Schedule", icon: Calendar, location: "teachers/schedule" },
        { name: "Attendance", icon: Clock, location: "teachers/attendance" },
      ],
    },
    {
      name: "Classes",
      icon: BookOpen,
      subItems: [
        {
          name: "All Classes",
          icon: BookOpen,
          location: "classes/allclasses",
        },
        {
          name: "Create Class",
          icon: BookOpenCheck,
          location: "classes/createclasses",
        },
        {
          name: "Class Schedule",
          icon: Calendar,
          location: "classes/classschedule",
        },
        // { name: "Assignments", icon: FileText },
      ],
    },
    {
      name: "Reports",
      icon: FileText,
      subItems: [
        {
          name: "Academic Reports",
          icon: BarChart3,
          location: "reports/academicreports",
        },
        {
          name: "Attendance Reports",
          icon: PieChart,
          location: "reports/attendancereports",
        },
        {
          name: "Performance Analytics",
          icon: TrendingUp,
          location: "reports/performanceanalytics",
        },
        // { name: "Financial Reports", icon: FileText },
      ],
    },
    // {
    //   name: "Settings",
    //   icon: Settings,
    //   subItems: [
    //     { name: "General Settings", icon: Settings },
    //     { name: "Notifications", icon: Bell },
    //     { name: "Security", icon: Shield },
    //     { name: "Appearance", icon: Palette },
    //   ],
    // },
    {
      name: "Profile",
      icon: User,
      subItems: [
        { name: "My Profile", icon: User, location: "profile/myprofile" },
        {
          name: "Account Settings",
          icon: UserCog,
          location: "profile/accountsettings",
        },
        { name: "Messages", icon: Mail, location: "profile/messages" },
      ],
    },
    {
      name: "Help",
      icon: HelpCircle,
      subItems: [
        {
          name: "Documentation",
          icon: FileText,
          location: "help/documentation",
        },
        {
          name: "Support",
          icon: MessageCircle,
          location: "help/support",
        },
        { name: "Contact Us", icon: Mail, location: "help/contactus" },
      ],
    },
  ];

  const handleItemClick = (itemName, hasSubItems) => {
    if (hasSubItems) {
      setExpandedItems((prev) => ({
        ...prev,
        [itemName]: !prev[itemName],
      }));
    } else {
      setActiveItem(itemName);
    }
  };

  const handleSubItemClick = (subItemName, location) => {
    console.log(subItemName);
    router.push(`/dashboard/${location}`);

    setActiveItem(subItemName);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white w-72 min-h-screen shadow-2xl overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50 sticky top-0 bg-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Academia Flow
            </h1>
            <p className="text-xs text-slate-400">Learning Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isExpanded = expandedItems[item.name];
          const isActive = activeItem === item.name;

          return (
            <div key={item.name}>
              {/* Main Menu Item */}
              <button
                onClick={() => handleItemClick(item.name, hasSubItems)}
                className={`w-full group relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out ${
                  isActive && !hasSubItems
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/10 text-blue-300"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}>
                {/* Active indicator */}
                {isActive && !hasSubItems && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                )}

                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive && !hasSubItems
                      ? "text-blue-400"
                      : "text-slate-400 group-hover:text-slate-200"
                  }`}
                />

                <span
                  className={`font-medium flex-1 text-left transition-colors duration-200 ${
                    isActive && !hasSubItems
                      ? "text-white"
                      : "group-hover:text-white"
                  }`}>
                  {item.name}
                </span>

                {hasSubItems ? (
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-200 text-slate-400 group-hover:text-slate-200 ${
                      isExpanded ? "transform rotate-180" : ""
                    }`}
                  />
                ) : (
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${
                      isActive
                        ? "text-blue-400 opacity-100 transform rotate-90"
                        : "text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-slate-300"
                    }`}
                  />
                )}
              </button>

              {/* Sub Menu Items */}
              {hasSubItems && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-700/50">
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeItem === subItem.name;

                      return (
                        <button
                          key={subItem.name}
                          onClick={() =>
                            handleSubItemClick(subItem.name, subItem.location)
                          }
                          className={`w-full group relative flex items-center space-x-3 px-4 py-2 ml-4 rounded-lg transition-all duration-200 ease-in-out ${
                            isSubActive
                              ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-blue-300"
                              : "text-slate-400 hover:text-white hover:bg-slate-700/30"
                          }`}>
                          {/* Sub-item active indicator */}
                          {isSubActive && (
                            <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                          )}

                          <SubIcon
                            className={`w-4 h-4 transition-colors duration-200 ${
                              isSubActive
                                ? "text-blue-400"
                                : "text-slate-500 group-hover:text-slate-300"
                            }`}
                          />

                          <span
                            className={`text-sm font-medium flex-1 text-left transition-colors duration-200 ${
                              isSubActive
                                ? "text-white"
                                : "group-hover:text-white"
                            }`}>
                            {subItem.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Menubar;
