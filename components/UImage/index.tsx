import styles from './UImage.module.css'

const Uimage = ({ id, urls, altDescription }) => {
  return (
    <div key={`uimg_container_${id}`} className={styles.imgContainer}>
      <img className={styles.img} src={urls.regular} alt={altDescription} loading="lazy"/>
    </div>
  )
}

export default Uimage
