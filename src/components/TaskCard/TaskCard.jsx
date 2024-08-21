import "./TaskCard.css"

const TaskCard = ({title,description,onEdit,index,setActiveCard }) => {
  return (
    <article className="task_card" onClick={onEdit} draggable onDragStart={()=> setActiveCard(index)}
     onDragEnd={()=> setActiveCard(null)}>
      <p className="task_text">{title}</p>
      <p>{description}</p>
    </article>
  );
};

export default TaskCard;
