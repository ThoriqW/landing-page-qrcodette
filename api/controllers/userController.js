const connectionDB = require("../config/db");

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const sql = `SELECT * FROM pegawai WHERE nik = "${id}"`;
    connectionDB.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json({ massage: massage.err });
  }
};
