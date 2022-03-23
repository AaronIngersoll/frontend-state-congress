import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { info } from "./Types";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

interface toDisplay {
	repObj: info | undefined;
}

export default function DisplayTable(toDisplay: toDisplay) {
	const classes = useStyles();

	return toDisplay.repObj === undefined ? (
		<div style={{ display: "none" }}>I am here</div>
	) : (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableBody>
					<TableRow key={toDisplay.repObj.name}>
						<TableCell variant="head">Name</TableCell>
						<TableCell>{toDisplay.repObj.name}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.party}>
						<TableCell variant="head">party</TableCell>
						<TableCell>{toDisplay.repObj.party}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.state}>
						<TableCell variant="head">state</TableCell>
						<TableCell>{toDisplay.repObj.state}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.district}>
						<TableCell variant="head">district</TableCell>
						<TableCell>{toDisplay.repObj.district}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.phone}>
						<TableCell variant="head">phone</TableCell>
						<TableCell>{toDisplay.repObj.phone}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.office}>
						<TableCell variant="head">office</TableCell>
						<TableCell>{toDisplay.repObj.office}</TableCell>
					</TableRow>
					<TableRow key={toDisplay.repObj.link}>
						<TableCell variant="head">link</TableCell>
						<TableCell>{toDisplay.repObj.link}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
