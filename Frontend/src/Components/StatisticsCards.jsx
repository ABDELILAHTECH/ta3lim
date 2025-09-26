import { BookOpen, FileText, GraduationCap } from "lucide-react";
import { useContext } from "react";
import { RessourcesContext } from "../Context/RessourcesContext";

const StatisticsCards = () => {
  const {ressources} = useContext(RessourcesContext);
  const stats = [
    {
      icon: BookOpen,
      count: ressources.filter(ressource=>ressource.type ===  "الدروس").length,
      label: "الدروس",
    },
    {
      icon: FileText,
      count: ressources.filter(ressource=>ressource.type ===  "التمارين").length,
      label: "التمارين",
    },
    {
      icon: FileText,
      count: ressources.filter(ressource=>ressource.type ===  "الفروض").length,
      label: "الفروض",
    },
    {
      icon: GraduationCap,
      count: ressources.filter(ressource=>ressource.type ===  "الامتحانات").length,
      label: "الامتحانات",
    }
  ];

  return (
    <div className="flex  gap-8 md:gap:15   mx-auto ">
      {stats.map((stat, index) => (
        <div key={index} className=" flex flex-col items-center  dark:text-white">
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