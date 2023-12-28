import { PropsWithChildren, ReactNode } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';

type ImageListProps = {
  itemData: {
    title: string
    img: string
    author: string
    rows?: number
    cols?: number
    featured?: boolean
  }[],
  showLoadMore?: boolean
}

export default function TitlebarImageList({ itemData, showLoadMore = false }: ImageListProps) {
  return (
    <ImageList sx={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ margin: '.5rem' }}>
          <img
            src={`${item.img}?w=400&0&h=420&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      {showLoadMore &&
        <ImageListItem style={{ width: "100%" }}>
          <Button>Load More</Button>
        </ImageListItem>
      }
    </ImageList>
  );
}
