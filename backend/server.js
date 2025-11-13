import express from "express";
import cors from "cors";

// Konfigurasi CORS: Mengizinkan frontend Anda (yang berjalan di 5173) untuk mengakses server ini (8080).
const corsOptions = {
  origin: ["http://localhost:5173"],
};

// Inisialisasi aplikasi Express (harus selalu dilakukan sebelum menggunakan 'app')
const app = express();

// Middleware: Mengaktifkan CORS dengan opsi yang ditentukan
app.use(cors(corsOptions));

// Endpoint utama (Root Route) untuk mengirim data JSON
app.get("/", (req, res) => {
  res.json({
    blogPost: [
      {
        title: "the awesome man",
        content: "An Cool Hacker in the word robbing the word most secure bank",
      },
      {
        title: "the batman",
        content: "An Cool Vigilante in Gotham city",
      },
    ],
  });
});

// Server mulai mendengarkan koneksi di port 8080
app.listen(8080, () => {
  console.log("Server running and test in port 8080");
});
