import "./App.css";
import { Paper, Box } from "@mui/material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { imageList } from "./assets/data";
import ReactPaginate from "react-paginate";

function App() {
  const [selectedImage, setSelectedImage] = useState("image-1");
  const [currentItems, setCurrentItems] = useState(null);
  const [itemsPerPage, setitemsPerPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(imageList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(imageList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handleSetSelectedImage = () => {
    setSelectedImage("image-1");
    setPageCount(1);
  };

  const handleSetSelectedImage2 = () => {
    setSelectedImage("image-2");
    setPageCount(2);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % imageList.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="App">
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Box style={{ flexGrow: 1 }} />
          <Button variant="outlined" onClick={handleSetSelectedImage}>
            Image-1
          </Button>
          <Box style={{ flexGrow: 0.01 }} />
          <Button variant="outlined" onClick={handleSetSelectedImage2}>
            Image-2
          </Button>
        </Toolbar>
      </AppBar>
      <Box p={3} display="flex" justifyContent="center" alignItems="center">
        <Paper style={{ maxWidth: "1024px", width: "100%", height: "400px" }}>
          {imageList
            .filter(item => item.title == selectedImage)
            .map(image => (
              <Box>
                <Typography> {image.title} </Typography>
              </Box>
            ))}
        </Paper>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper
          style={{
            maxWidth: "1024px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </Paper>
      </Box>
    </div>
  );
}

export default App;
