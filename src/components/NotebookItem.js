import { Link } from "react-router-dom";

const NotebookItem = ({ notebook }) => {
  return (
    <>
      <Link to={`/notebooks/${notebook.slug}`}>
        <div>{notebook.name}</div>
      </Link>
    </>
  );
};

export default NotebookItem;
