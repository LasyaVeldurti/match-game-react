import './index.css'

const Thumbnail = props => {
  const {imageDetails, onClickImage} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickThumbnail = () => {
    onClickImage(id)
  }
  return (
    <li className="thumbnail-li-item">
      <button
        onClick={onClickThumbnail}
        className="thumbnail-btn"
        type="button"
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
