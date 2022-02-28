import React from 'react';
import { useQuery } from 'react-query';
import { performRequest } from '../http';
import { YrResponse } from '../yr-response';
import styles from '../styles/Home.module.css';

// TODO: Hent data på ny med refetch knapp. Må ha en cooldown peridoe. Hvor lenge skal det være cachet?
// TODO: Style finere. bakgrunn #111111, kort: enten #000000 eller #333333
// TODO: Trenger en farge til knapp også.

const MountainPass: React.FC = () => {
    const { data, isFetching, isLoading } = useQuery('yr', () =>
        performRequest<null, YrResponse>('/api/mountain-pass')
    );

    if (isFetching || isLoading ) return <p className={styles.description}>
        Henter data 📀
    </p>

    if (!data) return <p className={styles.description}>Noe gikk galt!</p>;

    const {
        _embedded: { route, roadMessages },
    } = data;
    return (
        <>
            <h1 className={styles.title}>Er Hunnedalen stengt?</h1>
            <h2 className={styles.title}>{route.isClosed ? 'JA!' : 'Nei'}</h2>
            <>
                {roadMessages && roadMessages.length > 0 ? (
                    roadMessages.map((m) => <p key={m.id}>{m.message}</p>)
                ) : (
                    <p className={styles.description}>
                        Det er ikke kommet noen meldinger om at Fylkesvei 45
                        mellom Ålgård og Sirdal er stengt.
                    </p>
                )}
            </>
        </>
    );
};

export default MountainPass;
