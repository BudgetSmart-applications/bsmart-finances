const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bsmart.db');


const Account = function(account) {
  this.username = account.username;
  this.password = account.password;
  this.email = account.email;
  this.role = account.role;
}

Account.create = (newAccount, result) => {
  db.run(`INSERT INTO account (username, password, email, role) VALUES (?, ?, ?, ?)`, [newAccount.username, newAccount.password, newAccount.email, newAccount.role], function(err) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created account: ", { id: this.lastID, ...newAccount });
    result(null, { id: this.lastID, ...newAccount });
  });
}

Account.findById = (accountId, result) => {
  db.get(`SELECT * FROM account WHERE id = ?`, [accountId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found account: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

Account.findByUsername = (username, result) => {
  db.get(`SELECT * FROM account WHERE username = ?`, [username], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found account: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

Account.getAll = result => {
  db.all(`
    SELECT * FROM account
  `, [], (err, res) => { // [] is the parameter to be passed into the query
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("accounts: ", res);
    result(null, res);
  });
}

Account.updateById = (id, account, result) => {
  db.run(`UPDATE account SET username = ?, password = ?, email = ?, role = ? WHERE id = ?`, [account.username, account.password, account.email, account.role, id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res) {
      console.log("updated account: ", { id: id, ...account });
      result(null, { id: id, ...account });
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

Account.remove = (id, result) => {
  db.run(`DELETE FROM account WHERE id = ?`, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res) {
      console.log("deleted account with id: ", id);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

Account.removeAll = result => {
  db.run(`DELETE FROM account`, [
  ], (err, res) => { // [] is the parameter to be passed into the query
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} accounts`);
    result(null, res);
  }
  );
}

module.exports = Account;

