import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/Read";
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";

 

function App() {
	return (
    <Router>
		<div className="App">
			<div>
				<h3>React Crud Operation's</h3>
			</div>
			<div>
			
			</div>
      <div style={{marginTop:20}}>
        
      </div>
      <Routes>
      <Route exact path="/create" element={<Create/>}/>
      <Route exact path="/" element={<Read/>}/>
      <Route exact path="/update" element={<Update/>}/>
      <Route exact path="/delete" element={<Delete/>}/>
      </Routes>
		</div>
    </Router>
	);
}

export default App;
