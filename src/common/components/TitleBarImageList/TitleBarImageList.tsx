import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button } from '@mui/material';

import './TitleBarImageList.scss';

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

export default function TitleBarImageList({ itemData, showLoadMore = false }: ImageListProps) {
  return (

    <Box component='div' sx={{ maxWidth: '1200px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      {itemData.map((item) => (
        <img
          key={item.img}
          className='img-service'
          src={item.img}
          alt={item.title}
          height={380}
          width={320}
          loading="lazy"
        />
      ))}
      {showLoadMore &&
        <ImageListItem style={{ width: "100%" }}>
          <Button>Load More</Button>
        </ImageListItem>
      }
    </Box>
  );
}
