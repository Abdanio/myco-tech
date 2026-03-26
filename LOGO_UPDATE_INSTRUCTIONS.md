# Instruksi Update Logo

## Status Logo Saat Ini

Logo-logo berikut digunakan di website Myco-Tech:
1. **HIMAIF Logo**: `https://github.com/user-attachments/assets/9de145b4-b16b-4ec4-9e88-2803e3b518d2`
2. **Myco-Tech Logo**: `https://github.com/user-attachments/assets/6850b4f9-d61d-4342-aac4-dbf854c01710`
3. **HIMALOGI Logo**: `https://github.com/user-attachments/assets/629c12f6-d21f-46af-bb81-4cb589981cd7`

## Yang Perlu Dilakukan

Logo **HIMALOGI** dan **Myco-Tech** perlu diupdate dengan versi yang memiliki **background transparan** untuk tampilan yang lebih profesional.

## Langkah-Langkah Update Logo:

### Opsi 1: Upload Logo Baru ke GitHub (Recommended)

1. **Hapus Background dari Logo**
   - Gunakan tool seperti:
     - **remove.bg** (online, gratis untuk resolusi standar)
     - **Adobe Photoshop** (dengan Magic Wand atau Pen Tool)
     - **GIMP** (gratis, open source)
     - **Canva** (dengan Background Remover)

2. **Simpan sebagai PNG Transparan**
   - Format file: PNG (bukan JPG)
   - Pastikan background benar-benar transparan
   - Resolusi recommended: 512x512 px atau lebih tinggi untuk kualitas terbaik

3. **Upload ke GitHub**
   - Buka salah satu issue atau PR di repository
   - Drag & drop file logo baru ke comment box
   - GitHub akan menggenerate URL baru
   - Copy URL tersebut

4. **Update URL di File HTML**
   - Replace URL logo lama dengan URL baru di semua file:
     - `index.html` (line 106 & 109)
     - `tupoksi.html` (line 15 & 16)
     - `profile-tim.html` (line 15 & 16)
     - `kebijakan.html` (line 15 & 16)
     - `ketentuan.html` (line 15 & 16)
     - `dokumentasi.html` (line 15 & 16)

### Opsi 2: Host Logo Lokal

1. Simpan logo dengan background transparan di folder `/assets/logos/`
2. Update semua referensi logo di HTML files dari URL GitHub ke path lokal:
   ```html
   <!-- Dari -->
   <img src="https://github.com/user-attachments/assets/..." alt="HIMALOGI Logo">

   <!-- Menjadi -->
   <img src="assets/logos/himalogi-transparent.png" alt="HIMALOGI Logo">
   ```

## Tools Recommended untuk Remove Background

1. **remove.bg** - https://www.remove.bg/
   - Gratis, online, instant
   - Sangat accurate untuk logo dan shapes
   - Limit: resolusi untuk free tier

2. **Canva Background Remover**
   - Perlu account Canva Pro
   - User-friendly interface
   - Hasil sangat bagus

3. **GIMP** (Gratis)
   - Download: https://www.gimp.org/
   - Select by Color Tool atau Fuzzy Select
   - Export as PNG

4. **Photoshop** (Berbayar)
   - Magic Wand atau Quick Selection
   - Pen Tool untuk precision
   - Hasil paling profesional

## Verifikasi

Setelah update, pastikan:
- ✅ Logo terlihat jelas dengan background transparan
- ✅ Tidak ada white/colored box around the logo
- ✅ Logo size dan proporsi tetap baik
- ✅ Semua pages (6 files HTML) sudah menggunakan logo baru

## File yang Perlu Diupdate

Setelah mendapat URL logo baru, update file-file berikut:

| File | Logo HIMALOGI | Logo Myco-Tech |
|------|---------------|----------------|
| index.html | Line 109 | Line 106 |
| tupoksi.html | Line 16 | Line 15 |
| profile-tim.html | Line 16 | Line 15 |
| kebijakan.html | Line 16 | Line 15 |
| ketentuan.html | Line 16 | Line 15 |
| dokumentasi.html | Line 16 | Line 15 |

## Contoh Script untuk Replace (Optional)

Jika ingin menggunakan script untuk replace semua sekaligus:

```bash
# Replace HIMALOGI logo URL (example)
find . -name "*.html" -type f -exec sed -i 's|OLD_HIMALOGI_URL|NEW_HIMALOGI_URL|g' {} +

# Replace Myco-Tech logo URL (example)
find . -name "*.html" -type f -exec sed -i 's|OLD_MYCOTECH_URL|NEW_MYCOTECH_URL|g' {} +
```

## Catatan Penting

⚠️ **PENTING**: File ini (`LOGO_UPDATE_INSTRUCTIONS.md`) dapat dihapus setelah logo berhasil diupdate dengan background transparan.

---
*Dokumentasi dibuat: 26 Maret 2026*
*Myco-Tech Project - HIMAIF × HIMALOGI*
