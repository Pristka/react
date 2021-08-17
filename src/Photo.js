import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  imageList: {
    width: 500,
    height: 450
  },
}));

export default function AdvancedImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={210} gap={1} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
              <a href={"https://www.google.sk/search?q=" + item.link} target="_blank"> <img src={item.img} alt={item.title} /></a>
         
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}