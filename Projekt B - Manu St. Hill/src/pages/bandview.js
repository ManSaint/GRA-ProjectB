import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import musicService from '../services/music-group-service'

export function BandView() {

    const params = useParams();
    const [bands, setBands] = useState({});

    useEffect(() => {
        
        (async () => {

            const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
            const a = await service.readMusicGroupAsync(params.id)

            setBands(a)
        })();

    }, [params.id])

  return (
    <>
    <h1>Band view</h1>
    <p>You clicked on Band view with id: {params.id}</p>
    <ul>
        <li>{bands.name}</li>
        <li>{bands.establishedYear}</li>
        <li>{bands.strGenre}</li>
    </ul>
    </>
  )
}
