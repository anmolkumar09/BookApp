import { Button } from "@mui/material";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "react-rating";
const Book = (props) => {
  
  const { _id, name, author, description, price, image,rating } = props.book;
  const history = useNavigate();
 
 
  const deleteHandler = async () => {
    await axios
      .delete(`/api/books/${_id}`)
      .then((resp) => resp.data)
      .then(() => history("/")) // this is temporary solution.
      .then(() => {
        //now to Navigate the data.
        history("/books");
      });
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs: {price}</h2>
      <div>
        <Rating
          initialRating={rating}
          emptySymbol={<i className="fa fa-star"></i>}
          fullSymbol={<i className="fa fa-star checked"></i>}
        /> 
      </div>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};
export default Book;
