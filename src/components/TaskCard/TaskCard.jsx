import "./TaskCard.css"

const TaskCard = ({title,description,onEdit }) => {
  return (
    <article className="task_card" onClick={onEdit} draggable>
      <p className="task_text">{title}</p>
      <p>{description}</p>
    </article>
  );
};

export default TaskCard;
