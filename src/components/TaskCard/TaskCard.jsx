import "./TaskCard.css"

const TaskCard = ({title}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
     
    </article>
  );
};

export default TaskCard;
