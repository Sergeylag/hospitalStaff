const Pool = require('pg').Pool

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "root",
    database: "postgres"
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        // SELECT * FROM test_table
        // pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        pool.query('SELECT * FROM test_table', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
        const { id, name, role } = body
        console.log(id, name, role)
        //insert into test_table (id, name, role) values (3, \'user2\', \'user\')
        // pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        pool.query('INSERT INTO test_table (id, name, role) VALUES ($1, $2, $3)', [id, name, role], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new merchant has been added added: ${results.rows[0]}`)
        })
    })
}
const deleteMerchant = (id) => {
    return new Promise(function(resolve, reject) {
        // console.log(ide)
        // const id = parseInt(request.params.id)
        console.log(id)
        pool.query('DELETE FROM test_table WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
}
