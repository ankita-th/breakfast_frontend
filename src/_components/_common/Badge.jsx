import React from "react";

const Badge = ({ badgeName, bgColor }) => {
    console.log(bgColor,"bgColor")
  return (
    <div>
      <span
        className={`bg-${bgColor}-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${bgColor}-900 dark:text-white-300`}
      >
        {badgeName}
      </span>
    </div>
  );
};

export default Badge;
