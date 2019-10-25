import mariadb from "mariadb"

export const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "apgqlsrv1mariadb"
})

export const getMovies = async () => {
  const conn = await pool.getConnection()
  return (await conn.query(`SELECT * FROM movieql`))
}

export const getById = async (id) => {
  const conn = await pool.getConnection()
  return (await conn.query(`SELECT * FROM movieql where id=${id}`))[0]
}

export const addMovie = async (id, title, mcover, language) => {
  const conn = await pool.getConnection()
  const data = (await conn.query(`SELECT * FROM movieql where id=${id}`))[0]
  // getById(id)[0] = 다시 또 왜 [0] 이걸?
  console.log(data);

  if(!data)
    return await conn.query(`INSERT INTO 
                          movieql(id, title, mcover) 
                          VALUES(${id}, "${title}", "${mcover}")
                          `)

  if(data.id === id)
    return await conn.query(`UPDATE movieql 
                            set id=${id}, title="${title}", mcover="${mcover}" 
                            WHERE id=${id}
                            `)

}

export const delMovie = async (id) => {
  const conn = await pool.getConnection()
  return (await conn.query(`DELETE from movieql where id=${id}`))
}
