const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const crypto = require('crypto');

const dbConfig = {
    user: 'postgres',
    host: 'postgres-1.cn62tejxkxhb.eu-north-1.rds.amazonaws.com',
    database: 'RODX',
    password: 'nicoleta',
    port: 5432
};
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
  };
  
  const secretKey = generateSecretKey();

// functie pt inregistrare
async function registerUser(userData) {
  const client = new pg.Client(dbConfig);
  await client.connect();

  try {
    // verificam daca userul este deja in bd pe baza username si email
    const existingUser = await client.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [userData.username, userData.email]
    );

    if (existingUser.rows.length > 0) {
      throw new Error('Numele de utilizator sau adresa de email este deja inregistrata.');
    }

    // Hash parola utilizatorului
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // inseram userul in bd
    await client.query(
      'INSERT INTO users (first_name, last_name, email, password, username) VALUES ($1, $2, $3, $4, $5)',
      [userData.first_name, userData.last_name, userData.email, hashedPassword, userData.username]
    );

    return { success: true, message: 'Utilizator inregistrat cu succes.' };
  } catch (error) {
    return { success: false, message: error.message };
  } finally {
    await client.end();
  }
}

// Functie pt autentificare
async function authenticateUser(username, password) {
  const client = new pg.Client(dbConfig);
  await client.connect();

  try {
    // caut userul in bd dupa username
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      throw new Error('Utilizatorul nu exista.');
    }

    // verific daca parola e corecta
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Parola incorecta, incearca din nou');
    }

    // generez token JWT
    const token = jwt.sign({ id: user.id }, secretKey); 

    return { success: true, message: 'Autentificare cu succes.', token };
  } catch (error) {
    return { success: false, message: error.message };
  } finally {
    await client.end();
  }
}

module.exports = { registerUser, authenticateUser };
