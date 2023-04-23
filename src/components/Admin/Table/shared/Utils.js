export function statusClass(value) {
  const statusColor = {
    success: "bg-green-50 text-green-600 dark:text-green-400",
    danger:"bg-red-50 text-red-600 dark:text-red-400",
    warning: "bg-yellow-50 text-yellow-600 dark:text-yellow-400",
    info: "bg-blue-50 text-blue-600 dark:text-blue-400",
    dark: "bg-gray-50 text-gray-600 dark:text-gray-400",
  };
  const statusContent = {
    success: ["active", "complete", "on", "done", "save"],
    danger:["error"],
    warning: ["inactive", "incomplete", "unsaved"],
    info: ["info"],
    dark: ["dark"],
  };
  value = value.trim(); 

  for (const status in statusContent) {
    if (statusContent[status].includes(value)) {
      return statusColor[status];
    }
  }

  return statusColor.dark;
}

