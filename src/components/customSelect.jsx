import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { filtersPopupData} from "../data/filtersCategories";

const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: "4px",
		position: 'relative',
		backgroundColor: "white",
		border: '1px solid #D8D8D8',
		fontSize: 16,
		padding: '10px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		fontFamily: 'SF Pro Display',
		'&:placeholder': {

		},
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
		},
		'&:focus-within': {
			borderColor: '#4640DE'
		}
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

export function CustomizedSelects(props) {
	const classes = useStyles();

	return (
		<div>
			<FormControl className={classes.input}>
				<InputLabel htmlFor="demo-customized-select-native">Afdsfsdge</InputLabel>
				<NativeSelect
					id="demo-customized-select-native"
					value={null}
					input={<BootstrapInput />}
				>
					<option aria-label="None" value="" />
					{filtersPopupData.map((item) => {
						console.log(item);
						return (
							<option value={item.title}>{item.title}</option>
						);
					})}
				</NativeSelect>
			</FormControl>
		</div>
	);
}
