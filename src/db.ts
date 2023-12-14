import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:admin@localhost:5432/postgres");

const setupDb = async () => {
  await db.none("DROP TABLE IF EXISTS planets");
  await db.none(`
    CREATE TABLE planets(
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    )
  `);

  await db.none(`DROP TABLE IF EXISTS users`);
  await db.none(`
    CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      token TEXT
    )`);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Juptier')`);
  await db.none(`INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`);

  const planets = await db.many(`SELECT * FROM planets`);

  console.log(planets);
};

setupDb();

export { db };
