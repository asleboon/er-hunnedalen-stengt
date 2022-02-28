import React from 'react'
import { useQuery } from 'react-query';
import { YR_BASE_URL } from '../constants';
import { performRequest } from '../http';
import { YrResponse } from '../yr-response';
import styles from '../styles/Home.module.css'


const MountainPass: React.FC = () => {
    const { data } = useQuery('yr', () => performRequest<null,YrResponse>('/api/mountain-pass'));

    if (!data) return <p className={styles.description}>Noe gikk galt!</p>

    const { _embedded: { route, roadMessages} } = data;
  return (
      <>
        <h1 className={styles.title}>
            Er Hunnedalen stengt?
        </h1>
        <h2 className={styles.title}>
            {route.isClosed ? 'JA!' : 'Nei'}
        </h2>
        <>
        { roadMessages 
            && roadMessages.length > 0 
                ? roadMessages.map(m => (
                    <p key={m.id}>
                    {m.message}
                    </p>
                ))
                : (
                    <p className={styles.description}>
                    Det er ikke kommet noen meldinger 
                    om at Fylkesvei 45 mellom Ålgård og Sirdal er stengt.
                    </p>
                    )
        }
        </>
      </>
  )
}

export default MountainPass;