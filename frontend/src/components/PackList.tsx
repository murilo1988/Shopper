

import useFetch from "../hooks/useFetch"
import Pack from '../../src/types/typesProduct'

import { useEffect, useState } from 'react';




function PackList() {
    const { data, loading, error } = useFetch<Pack[]>('/packs')
    const [packs, setPacks] = useState<Pack[] | null>(null)

    useEffect(() => {
        if (data) {
            setPacks(data);
        }
    }, [data]);

    if (loading) return <div>Carregando</div>
    if (error) return <div>Ocorreu um erro {error.message}</div>
    return (
        <>
            <h2>Pack list</h2>
            <div className="container-pack">
                <ul>
                    {packs &&
                        packs.map((pack: Pack) => (
                            <li className="pack-list" key={pack.product_id}>
                                <div>{pack.pack_id}</div>
                                <div>{pack.qty}</div>
                                <button>editar</button>
                            </li>

                        ))}
                </ul>
            </div>
        </>
    )
}

export default PackList

