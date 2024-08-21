import "./TaskCard.css"

const TaskCard = ({title,description}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <p>{description}</p>
    </article>
  );
};

export default TaskCard;
