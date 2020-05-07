import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
	root: {
		maxWidth: 423,
	},
	cardContent: {
		padding: "32px 25px 21px",
		fontFamily: "SF Pro Display",
	}
});

export function ImgMediaCard(props){
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="213"
					image={require("../images/card1.png")}
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.cardContent}>
					<h4 className="card-title">
						{props.title}
					</h4>
					<p className="card-info">
						{props.description}
					</p>
					<div className="location-block">
						<div className="img-container">
							<img src={require('../images/location-logo.png')} alt="location-logo"/>
						</div>
						<div className="location-info">
							<div className="location-name">Rockers</div>
							<div className="location-place">Chicago</div>
						</div>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
