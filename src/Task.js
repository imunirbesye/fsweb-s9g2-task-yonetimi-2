import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import {tr} from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => { 
    const bitis = new Date(taskObj.deadline);
    const uzaklik = formatDistanceToNow(bitis, {locale: tr, addSuffix:true});
    const accentClass = differenceInDays(bitis, new Date()) <= 3 ? "bg-maUrgent" : "bg-maNormal";
    

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0px_rgba(0,0,0,0.1)]">
      <h3>{taskObj.title}</h3>
      <div className="text-xs p-1">son teslim: <span className={accentClass+" p-1"}>{uzaklik}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block px-3 py-1 text-xs border-solid border-1 border-gray-600 mr-1 mb-2 rounded-2xl" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
