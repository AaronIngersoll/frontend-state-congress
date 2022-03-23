import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any }) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
interface selectFillInsData {
	inputType: string;
	value: string;
	menuItems: string[];
	onChange: (value: string) => void;
}

export default function SimpleSelect(selectFillIns: selectFillInsData) {
	const classes = useStyles();

	const selectChange = (event: any) => {
		const value = event.target.value;
		selectFillIns.onChange(value);
	};
	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-helper-label">
					{selectFillIns.inputType}
				</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={selectFillIns.value}
					onChange={selectChange}>
					{selectFillIns.menuItems.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
