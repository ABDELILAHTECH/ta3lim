import { BookOpen, FileText, GraduationCap } from "lucide-react";

const StatisticsCards = () => {
  const stats = [
    {
      icon: BookOpen,
      count: "0",
      label: "الدروس",
    },
    {
      icon: FileText,
      count: "0",
      label: "التمارين",
    },
    {
      icon: GraduationCap,
      count: "0",
      label: "الامتحانات",
    }
  ];

  return (
    <div className="flex  gap-8 md:gap:15   mx-auto ">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center  dark:text-white">
          <div className="">
            <stat.icon size={28}  />
          </div>
          <div className="chalk-title text-3xl mb-2">{stat.count}</div>
          <div className="chalk-text text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;