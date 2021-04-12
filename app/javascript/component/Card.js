import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Bed from 'images/icons/bed.png'
import Right from 'images/icons/right.png'
import Bathtub from 'images/icons/bathtub.png'


const useStyles = makeStyles({
  root: {
    maxWidth: '25%',
    float: 'left',
    margin: '2%',
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
      <CardActionArea style={{position:'relative'}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          image={props.item.picture}
          title="Contemplative Reptile"
        />
        <div style={{position:'absolute', width:'100%',top:'80%',backgroundColor:'rgba(237, 236, 238, 0.5)',padding:'8px 0'}}>
            <p style={{margin:'0',fontWeight:'bolder',fontSize:'x-large',padding:'0 20px'}}>{props.item.price} €</p>
            <p style={{margin:'0',fontWeight:'bold',fontSize:'large',padding:'0 20px'}}>{props.item.sqm} €/m²</p>
        </div>
      </CardActionArea>
      <div style={{borderBottom:'1px solid', borderColor:'lightgrey'}}>
          <p style={{color:'darkblue',fontSize:'large',padding:'0 20px'}}>{props.item.title}</p></div>
      <div style={{display:'flex',justifyContent:'space-between',padding:'0 10px'}}>
          <div style={{display:'flex',alignItems:'center', fontWeight:'bold'}}>
              <img src={Right} style={{height:'2rem'}}/>
              <p style={{fontSize:''}}>{props.item.sqm} m²</p>
          </div >
          <div><p>|</p></div>
          <div style={{display:'flex',alignItems:'center', fontWeight:'bold'}}>
              <img src={Bed} style={{height:'3rem'}}/>
              <p>{props.item.total_bedroom}</p>
          </div>
          <div><p>|</p></div>
          <div style={{display:'flex',alignItems:'center', fontWeight:'bold'}}>
              <img src={Bathtub} style={{height:'2rem'}}/>
              <p>{props.item.total_bathroom}</p>
          </div>
      </div>
    </Card>
    </>
  );
}