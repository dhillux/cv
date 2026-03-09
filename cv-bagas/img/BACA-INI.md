# Cara Menambahkan Foto Profil via URL Internet

Foto profil menggunakan URL langsung dari internet (tidak perlu file lokal).

---

## Langkah upload foto ke ibb.co (gratis & mudah)

1. Buka https://imgbb.com
2. Klik "Start uploading" → pilih foto kamu
3. Klik "Upload"
4. Setelah upload, klik tombol **"Copy BBCode"** dropdown → pilih **"Direct links"**
5. URL akan terlihat seperti: `https://i.ibb.co/xxxxxxxx/nama-foto.jpg`

---

## Cara pasang URL di index.html

Cari teks `https://i.ibb.co/placeholder/` di file index.html,
lalu ganti dengan URL foto asli masing-masing:

| Placeholder              | Ganti dengan URL foto       |
|--------------------------|-----------------------------|
| foto-bagas.jpg           | URL foto Bagas (header + team card 1) |
| foto-anggota2.jpg        | URL foto anggota ke-2       |
| foto-anggota3.jpg        | URL foto anggota ke-3       |
| foto-anggota4.jpg        | URL foto anggota ke-4       |
| foto-anggota5.jpg        | URL foto anggota ke-5       |
| foto-anggota6.jpg        | URL foto anggota ke-6       |

---

## Tips
- URL harus langsung ke file gambar (berakhiran .jpg/.png/.webp)
- Jika URL gagal → otomatis tampil inisial nama sebagai fallback
- Ukuran ideal foto: 400x400 px (persegi) agar crop bulat sempurna
