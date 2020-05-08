import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {ProgressBar} from "./progressBar";


const useStyles = makeStyles({
	root: {
		maxWidth: 423,
		borderRadius: "3px",
		marginBottom: "27px",
	},
	cardContent: {
		padding: "32px 25px 21px",
		fontFamily: "SF Pro Display",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "space-between",
		position: "relative",
		minHeight: 365,
	}
});

export function ImgMediaCard({data, link}){
	console.log(data);
	const classes = useStyles();
	const progressBarValue = Math.round(data.funded / data.goals * 100);

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="213"
					image={link}
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.cardContent}>
					<div className="header-card"><h4 className="card-title">
						{data.title}
					</h4>
						<p className="card-info">
							{data.description}
						</p></div>
					<div className="footer-card">
						<div className="location-block">
							<div className="img-container">
								<img src={require('../images/location-logo.png')} alt="location-logo"/>
							</div>
							<div className="location-info">
								<div className="location-name">{data.locationName}</div>
								<div className="location-place">{data.place}</div>
							</div>
						</div>
						<div className="progress-bar">
							<ProgressBar value={progressBarValue}/>
						</div>
						<div className="money-details">
							<div className="money-details-column">
								<div className="money-details-title">funded</div>
								<div className="money-details-value">${data.funded}</div>
							</div>
							<div className="money-details-column">
								<div className="money-details-title">Goal</div>
								<div className="money-details-value">${data.goals}</div>
							</div>
							<div className="money-details-column">
								<div className="money-details-title">days left</div>
								<div className="money-details-value">{data.daysLeft}</div>
							</div>
						</div>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
