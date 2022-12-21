import React, { useEffect, useState } from "react";
import funny from "./funnybear_.jpg";
import "./App.css";
import SimpleSelect from "./components/Select";
import RepTable from "./components/RepTable";
import { response, info } from "./components/Types";
import DisplayTable from "./components/DisplayTable";
import { Grid } from "@material-ui/core";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [rep, setRep] = useState<string>();
	const [congressData, setCongressData] = useState<response>();
	const [state, setState] = useState<string>("UT");
	const [congress, setCongress] = useState<string>("Senators");
	const [states, setStates] = useState([]);

	async function fetchStates() {
		const response = await fetch("http://localhost:3000/state-codes");
		const json = await response?.json();
		setStates(JSON.parse(JSON.stringify(json)));
	}

	async function fetchCongress() {
		let urlStinr = `http://localhost:3000/representatives/${state}`;
		if (congress == "Senators") {
			urlStinr = `http://localhost:3000/senators/${state}`;
		}
		const response = await fetch(urlStinr);
		const json = await response?.json();
		setCongressData(JSON.parse(JSON.stringify(json)));
	}
	useEffect(() => {
		fetchCongress();
		fetchStates();
		setIsLoaded(true);
	}, [state, congress, rep]);
	const inputdata: info[] | undefined = congressData?.results.map(
		(data) => data
	);
	const repdata = congressData?.results.filter(function (entry: {
		name: string | undefined;
	}) {
		return entry.name === rep;
	});

	return (
		<div className="App">
			<h1 id="header">Who's My Representative</h1>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<SimpleSelect
						inputType={"State"}
						menuItems={states}
						value={state}
						onChange={setState}
					/>
				</Grid>
				<Grid item xs={2}>
					<SimpleSelect
						inputType={"Congress"}
						menuItems={["Representatives", "Senators"]}
						value={congress}
						onChange={setCongress}
					/>
				</Grid>
			</Grid>
			{!isLoaded ? (
				<header className="App-header">
					<img src={funny} className="App-logo" alt="logo" />
				</header>
			) : (
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<h2>List / {congress}</h2>
						<RepTable rows={inputdata || []} onClick={setRep} />
					</Grid>
					<Grid item xs={6}>
						<h2>INFO</h2>
						<DisplayTable repObj={repdata ? repdata[0] : undefined} />
					</Grid>
				</Grid>
			)}
		</div>
	);
}

export default App;
