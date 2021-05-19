import React, { useEffect} from 'react'
import {useSWRInfinite} from 'swr'
import fetcher from 'libs/fetcher'
import styles from './Photos.module.css'
import Uimage from 'components/UImage'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getKey } from '../../utils'

interface PhotosProps {
  id_collection?: number
}

const Photos = ({ id_collection }: PhotosProps) => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setSize((prevSize) => prevSize + 1)
    }
  }

  if (!data) return <div>loading...</div>
  
  return (
    <div className={styles.chips}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {
            data.map((photoArr: any, index) => {
              return photoArr.map((photo) => {
                return photo.response.results.map((img) => {
                  return (
                    <Grid item xs={4} key={img.id}>
                      <Uimage
                        id={img.id}
                        urls={img.urls}
                        altDescription={img.alt_description ? img.alt_description : null}
                        key={`${img.id}_uimage_component`}
                      />
                    </Grid>
                  )
                })
              })
            })
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Photos
