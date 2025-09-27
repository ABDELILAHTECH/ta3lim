import { BookOpen, FileText, GraduationCap, ClipboardList } from "lucide-react";
import { useContext, useMemo } from "react";
import { RessourcesContext } from "../Context/RessourcesContext";
import { DocumentsTypesContext } from "../Context/DocumentsTypesContext"
import { Link } from "react-router-dom"
const StatisticsCards = () => {
  const {ressources} = useContext(RessourcesContext);
  const {toggleDocsType} = useContext(DocumentsTypesContext);

  const handleClick = (type) => {
       toggleDocsType(type);
       window.scrollTo(0,0)
  }
  
  // Optimize with useMemo to avoid recalculating on every render
  const stats = useMemo(() => [
    {
      icon: BookOpen,
      count: ressources.filter(ressource => ressource.type === "الدروس").length,
      label: "الدروس",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: FileText,
      count: ressources.filter(ressource => ressource.type === "التمارين").length,
      label: "التمارين",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: ClipboardList,
      count: ressources.filter(ressource => ressource.type === "الفروض").length,
      label: "الفروض",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: GraduationCap,
      count: ressources.filter(ressource => ressource.type === "الامتحانات").length,
      label: "الامتحانات",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    }
  ], [ressources]);

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary dark:text-primary-light">
            إجمالي الموارد: {ressources.length} مورد تعليمي
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <Link to="/ressources" onClick={() => handleClick(stat.label)}>
             <div 
               key={index} 
               className={`${stat.bgColor} flex items-center justify-between backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group`}
              >
               {/* Icon */}
               <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                 <stat.icon size={20} className="text-white" />
               </div>
               {/* Label */}
               <div className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
                 {stat.label}
               </div>
               {/* Count */}
               <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                 {stat.count}
               </div>
             
             </div>
          </Link>   
        ))}
      </div>

      
    </div>
  );
};

export default StatisticsCards;