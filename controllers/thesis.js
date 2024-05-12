import Joi from "joi";
import { v4 as uuidv4 } from "uuid";

// -------------------------------------------------------------------------

const data = [
  { id: 1, judul: "sistem rekomendasi pada digital library machine learning natural language processing", penulis: "Abil Khairi", kategori: "Machine Learning", tipe_karya: "proposal", proposalSeminarMonth: "Maret" },
  { id: 2, judul: "judul", penulis: "O.K. Muhammad Majid Maulana", kategori: "Network", tipe_karya: "skripsi", proposalSeminarMonth: "January" },
  { id: 3, judul: "judul", penulis: "Sukma Rizki", kategori: "Android Development", tipe_karya: "proposal", proposalSeminarMonth: "Juny" },
  { id: 4, judul: "judul", penulis: "Andrea Micola Azwir", kategori: "Game Development", tipe_karya: "skripsi", proposalSeminarMonth: "September" },
  { id: 5, judul: "judul", penulis: "Haris Yunanda Rangkuti", kategori: "Crytography", tipe_karya: "proposal", proposalSeminarMonth: "January" },
  { id: 6, judul: "judul", penulis: "Rian Hidayatullah", kategori: "AI Cloud Computing", tipe_karya: "skripsi", proposalSeminarMonth: "May" },
  { id: 7, judul: "judul", penulis: "Muhammad Rizki", kategori: "Web Development", tipe_karya: "skripsi", proposalSeminarMonth: "May" },
  { id: 8, judul: "judul", penulis: "Aprian Gigin Prasetya", kategori: "Internet of Things", tipe_karya: "proposal", proposalSeminarMonth: "July" },
  { id: 9, judul: "judul", penulis: "Andry Maulana Akbar", kategori: "Internet of Things", tipe_karya: "proposal", proposalSeminarMonth: "Desember" },
  { id: 10, judul: "judul", penulis: "Nefo Preyandre", kategori: "Forecasting", tipe_karya: "proposal", proposalSeminarMonth: "July" },
  { id: 11, judul: "judul", penulis: "Zainul Anwar Adi Putra", kategori: "Cyber Security", tipe_karya: "skripsi", proposalSeminarMonth: "November" },
  { id: 12, judul: "judul", penulis: "Andriyan Ginting", kategori: "Mobile Development", tipe_karya: "proposal", proposalSeminarMonth: "October" },
  { id: 13, judul: "judul", penulis: "Rifkial Iqwal", kategori: "AI", tipe_karya: "proposal", proposalSeminarMonth: "September" },
  { id: 14, judul: "judul", penulis: "Adi Prasetyo", kategori: "Web Development", tipe_karya: "proposal", proposalSeminarMonth: "Maret" },
  { id: 15, judul: "judul", penulis: "Fazril Adama Hidayat", kategori: "Text Mining", tipe_karya: "proposal", proposalSeminarMonth: "Juny" },
  { id: 16, judul: "judul", penulis: "Ansharulhaq Aminsyah", kategori: "Data Mining", tipe_karya: "proposal", proposalSeminarMonth: "July" },
  { id: 17, judul: "judul", penulis: "Brucel Duta Samudera", kategori: "Web Development", tipe_karya: "proposal", proposalSeminarMonth: "April" },
  { id: 18, judul: "judul", penulis: "Fajar Chaniago", kategori: "Web Development", tipe_karya: "skripsi", proposalSeminarMonth: "February" },
];
// -------------------------------------------------------------------------

export const getThesises = (req, res) => {
  res.send(data);
};

export const createThesis = (req, res) => {
  const { error } = validateThesis(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const thesis = {
    id: uuidv4(),
    // judul: req.body.judul,
    penulis: req.body.penulis,
    //kategori: req.body.kategori,
    //tipe_karya: req.body.tipe_karya,
    //proposalSeminarMonth: req.body.proposalSeminarMonth,
  };

  data.push(thesis);
  res.send(thesis);
};

export const getThesisByID = (req, res) => {
  const thesis = data.find((c) => c.id === req.params.id);
  if (!thesis) {
    res.status(400).send("thesis not found");
    return;
  }

  res.send(thesis);
};

export const editThesis = (req, res) => {
  const thesis = data.find((c) => c.id === req.params.id);
  if (!thesis) return res.status(404).send("thesis not found");

  const { error } = validateThesis(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // thesis.judul = req.body.judul,
  thesis.penulis = req.body.penulis;
  // thesis.kategori = req.body.kategori,
  // thesis.tipe_karya = req.body.tipe_karya,
  // thesis.proposalSeminarMonth = req.body.proposalSeminarMonth,
  res.send(thesis);
};

export const deleteThesis = (req, res) => {
  const thesis = data.find((c) => c.id === req.params.id);
  if (!thesis) return res.status(404).send("thesis not found");

  const index = data.indexOf(thesis);
  data.splice(index, 1);

  res.send(thesis).send(`user is deleted`);
};

// -----------------------------------------------------------

function validateThesis(thesis) {
  const schema = Joi.object({
    penulis: Joi.string().min(3).required(),
  });

  return schema.validate(thesis); // Validate against the schema
}
