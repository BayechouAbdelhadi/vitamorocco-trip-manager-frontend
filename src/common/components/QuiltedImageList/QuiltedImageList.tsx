import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { defaultImage } from '../../utils/imageUtils';

import './QuiltedImageList.scss';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=contain&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=contain&auto=format&dpr=2 2x`
  };
}

type ImageListProps = {
  itemData: {
    title: string
    img: string
    rows?: number
    cols?: number
  }[]
}

export default function QuiltedImageList({ itemData }: ImageListProps) {
  const ROW_HEIGHT = 200
  return (
    <ImageList
      className='image-list-container'
      variant="quilted"
      cols={4}
      rowHeight={ROW_HEIGHT}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, ROW_HEIGHT, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onError={defaultImage.small.errorHandler}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
