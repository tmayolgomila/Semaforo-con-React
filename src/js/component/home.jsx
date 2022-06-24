import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectLight, setSelectLight] = useState("green");
	return (
	<>
	<div className="soporte"></div>
	<div className="semaforo">
		<div 
		onClick={() => setSelectLight ("red")}
		className={
			"light red" +(selectLight === "red" ? " encender" : "")
			}></div>
		<div 
		onClick={() => setSelectLight ("yellow")}
		className={
			"light yellow" +(selectLight === "yellow" ? " encender" : "")
			}></div>
		<div
		onClick={() => setSelectLight ("green")}
		className={
			"light green" +(selectLight === "green" ? " encender" : ""
			)}></div>
	</div></>


	);
};

export default Home;
