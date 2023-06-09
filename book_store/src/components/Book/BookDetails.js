// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormLabel,
//   TextField,
// } from "@mui/material";

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function BookDetails() {
//   const [input, setInputs] = useState();
//    // now first thing is You hav to get URL or id for we use params hook comesunder in react-router-dom
//   // useParams it return the key/ value pair of the dynamic pair from the current URL
//   // we have make sure jo humne route ke path me dala wo ekdu  same hona chaiye. ex: id, bid, tId etx
//   const id = useParams().id;
//   const [checked, setChecked] = useState(false);
//   const history = useNavigate();

//   //   console.log(id);

//   useEffect(() => {
//     // NOw we fetch the data. and the URL must be in  b/w the stringTemplate (` `) | then we get response and then convert dataResponse
//     const fetchHandler = async () => {
//       await axios
//         .get(`http://localhost:5000/books/${id}`)
//         .then((resp) => resp.data)
//         .then((data) => setInputs(data.book));
//     };
//     fetchHandler(); // event halndler
//   }, [id]);

//   // Now we have to add form for BookDetails simply copy whole form from AddBook.js .

//   // now create sendRequest
//   const sendRequest = async () => {
//     await axios
//       .put(`http://localhost:5000/books/${id}`, {
//         name: String(input.name),
//         author: String(input.author),
//         description: String(input.description),
//         price: String(input.price),
//         image: String(input.image),
//         avilable: Boolean(checked),
//       })
//       .then((resp) => resp.data);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // This then will used to send the data to books URL
//     sendRequest().then(() => history("/books"));
//   };
//   const handleChange = (e) => {
//     // console.log(e);
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   //   console.log(input);
//   return (
//     <>
//       {input && (
//         <form onSubmit={handleSubmit}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             maxWidth={700}
//             alignItems="center"
//             alignSelf="center"
//             marginLeft={"auto"}
//             marginRight={"auto"}
//             marginTop={10}
//           >
//             <FormLabel>Name</FormLabel>
//             <TextField
//               value={input.name} // use state me h kyuki by using input can change
//               onChange={handleChange}
//               margin="normal"
//               fullWidth
//               variant="outlined"
//               name="name" //name = "name ye ditto copy hona chaiye jo tumne useState me kiye h."
//             />

//             <FormLabel>Author</FormLabel>
//             <TextField
//               value={input.author}
//               onChange={handleChange}
//               margin="normal"
//               fullWidth
//               variant="outlined"
//               name="author"
//             />

//             <FormLabel>Description</FormLabel>
//             <TextField
//               value={input.description}
//               onChange={handleChange}
//               margin="normal"
//               fullWidth
//               variant="outlined"
//               name="description"
//             />

//             <FormLabel>Price</FormLabel>
//             <TextField
//               value={input.price}
//               onChange={handleChange}
//               type="number"
//               margin="normal"
//               fullWidth
//               variant="outlined"
//               name="price"
//             />
//             <FormLabel>Image</FormLabel>
//             <TextField
//               value={input.image}
//               onChange={handleChange}
//               margin="normal"
//               fullWidth
//               variant="outlined"
//               name="image"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={input.avilable}
//                   onChange={() => setChecked(!checked)}
//                 />
//               }
//               // baiscally it cheked the opposite value
//               label="Available"
//               // we give checked = false because we want to true as a dynamically.
//             />
//             <Button variant="contained" type="submit">
//               Update Book
//             </Button>
//           </Box>
//         </form>
//       )}
//     </>
//   );
// }
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const [input, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((resp) => resp.data)
        .then((data) => setInputs(data.books));
      //error milgaya book ki jagha books ayega maine check kiya ki Books.js me useState ke books use h sayad islye use hua h.
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        avilable: Boolean(input.checked),
      })
      .then((resp) => resp.data); // data send bhi to karna h.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    // to change the data in input field we use AddBook handleChange() Function
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e);
  };
  console.log(input);
  return (
    <div>
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            maxWidth={700}
            alignItems="center"
            alignSelf="center"
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={input.name} // use state me h kyuki by using input can change
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name" //name = "name ye ditto copy hona chaiye jo tumne useState me kiye h."
            />

            <FormLabel>Author</FormLabel>
            <TextField
              value={input.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />

            <FormLabel>Description</FormLabel>
            <TextField
              value={input.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />

            <FormLabel>Price</FormLabel>
            <TextField
              value={input.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={input.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={input.avilable}
                  onChange={() => setChecked(!checked)}
                />
              }
              // baiscally it cheked the opposite value
              label="Available"
              // we give checked = false because we want to true as a dynamically.
            />
            <Button variant="contained" type="submit">
              update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
