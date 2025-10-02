import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CompletedExamsContext = createContext();

export function CompletedExamsProvider ({ children }){
    const [completedExams, setCompletedExams] = useState(() => {
        const saved = localStorage.getItem("completedExams");
        return saved ? JSON.parse(saved) : [];
    });

    const toggleCompleted = (examTitle) => {
        setCompletedExams(prev => {
            const isCompleted = prev.includes(examTitle);
            if (isCompleted) {
                return prev.filter(title => title !== examTitle);
            } else {
                return [...prev, examTitle];
            }
        });
    };

    const isCompleted = (examTitle) => {
        return completedExams.includes(examTitle);
    };

    const clearCompleted = () => {
        setCompletedExams([]);
    };

    useEffect(() => {
        localStorage.setItem("completedExams", JSON.stringify(completedExams));
    }, [completedExams]);

    return(
        <CompletedExamsContext.Provider value={{
            completedExams,
            toggleCompleted,
            isCompleted,
            clearCompleted
        }}>
            {children}
        </CompletedExamsContext.Provider>
    )
}
