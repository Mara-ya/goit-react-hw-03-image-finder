import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({images, openModal}) => {
    return (images.map(({id, webformatURL, tags, largeImageURL}) => {
        return(
            <GalleryItem key={id}>
                <GalleryItemImage src={webformatURL} alt={tags} onClick={() => openModal({largeImageURL, tags})}/>
            </GalleryItem>
        )
    })
    )
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
    openModal: PropTypes.func.isRequired,
  };