

import useFetch from "../hooks/useFetch"


interface Pack {
    id: number,
    pack_id: number,
    product_id: number,
    qty: number

}


function PackList() {
    const { data, loading, error } = useFetch<Pack[]>('/packs')

    if (loading) return <div>Carregando</div>
    if (error) return <div>Ocorreu um erro {error.message}</div>
    return (
        <>
            <h2>Pack list</h2>
            <div className="container-pack">
                <ul>
                    {data && data.map((packs: Pack) => (
                        <li className="pack-list" key={packs.id}>
                            <div>{packs.id}</div>
                            <div>{packs.pack_id}</div>
                            <div>{packs.product_id}</div>
                            <div>{packs.qty}</div>
                            <button>editar</button>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}

export default PackList