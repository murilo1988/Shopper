import database from '../infra/database'


export function getProducts() {
    return database.query('select * from products')
}


