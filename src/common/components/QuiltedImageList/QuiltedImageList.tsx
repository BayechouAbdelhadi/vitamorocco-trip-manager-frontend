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
  images: {
    url: string
    rows?: number
    cols?: number
  }[]
}

export default function QuiltedImageList({ images }: ImageListProps) {
  const ROW_HEIGHT = 200
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={ROW_HEIGHT}
    >
      {images.map((image) => (
        <ImageListItem key={image.url} cols={image.cols || 1} rows={image.rows || 1}>
          <img
            {...srcset(image.url, ROW_HEIGHT, image.rows, image.cols)}
            alt={"gallery-image"}
            loading="lazy"
            onError={defaultImage.small.errorHandler}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
