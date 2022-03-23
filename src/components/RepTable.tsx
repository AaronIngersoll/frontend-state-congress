import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { info } from "./Types";

const useStyles = makeStyles({
	table: {
		// minWidth: 650,
		margin: 10,
	},
});

interface input {
	rows: Array<info>;
	onClick: (value: string) => void;
}
export default function RepTable(input: input) {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small">
				<TableHead>
					<TableRow>
						<TableCell>Name: </TableCell>
						<TableCell align="right">party</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{input?.rows.map((row: any) => (
						<TableRow
							hover
							key={row.name}
							onClick={() => input.onClick(row.name)}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.party}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
