import React, { useState } from "react";
import Axios from "axios";
import "./Poemapi.css";
import Button from "@material-ui/core/Button";



function Poem() {
  const [poem, setPoem] = useState("");

  const getPoem = () => {
    fetch("https://poetrydb.org/author,title/Shakespeare;Sonnet")
      .then((response) => response.json())
      .then((data) => {
        setPoem(data.lines);
      });
  }; 
  return (
		<div className="potd">
			<div className="d-flex justify-content-between align-content-center">
				<span className="potd-span">Poems of the day</span>
				<Button
					onClick={getPoem}
					variant="contained"
					color="secondary"
					className="poem-btn"
				>
					Click Here
				</Button>
			</div>
			{poem}
		</div>
	);
}

export default Poem;
