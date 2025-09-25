import React from 'react'
import { useContext } from 'react';
import { LevelContext } from '../Context/LevelContext';
import ClassName from './ClassName';
import { ClassContext } from '../Context/ClassContext';

export default function ClassNav() {
    const {level} = useContext(LevelContext);
    const {classItem,setClassItem} = useContext(ClassContext);
    
    const handleChange = (e) => {
        setClassItem(e.target.value);
        
    }
    const primaryClass = ["الاولى","الثانية","الثالثة","الرابعة","الخامسة","السادسة"];
    const collegeClass = ["الاولى","الثانية","الثالثة"];
    const lyceeClass = ["جدع مشترك","السنة الاولى باكالوريا","السنة التانية باكالوريا"]
  return (
       <select onChange={handleChange} class=" w-full sm:w-fit  bg-white dark:bg-primary border border-primary dark:text-white text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value=""  disabled selected hidden> {classItem.length > 0 ? classItem : "اختر المستوى"}  </option>
          {
            level === "الابتدائي" ? primaryClass.map((classItem) => <ClassName classItem = {`السنة ${classItem}` } />) 
            : level === "الإعدادي" ? collegeClass.map((classItem) => <ClassName classItem = {`السنة ${classItem}` } />)
            : level === "الثانوي" ? lyceeClass.map((classItem) =>   <ClassName classItem = {classItem} />)
            : ""
          }
       </select>
  )
}
