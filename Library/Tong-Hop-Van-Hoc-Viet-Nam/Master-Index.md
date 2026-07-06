# MASTER INDEX

## Master Registry

### Vietnam Literature Digital Library (VLDL)

**Version:** 2.0 – System Standardization

---

# Giới thiệu

Master Index là tài liệu quản trị trung tâm của dự án **Vietnam Literature Digital Library (VLDL)**.

Đây là **nguồn dữ liệu gốc (Single Source of Truth)** để quản lý toàn bộ các tập chuyên khảo, các giai đoạn văn học, cấu trúc thư mục và tình trạng biên tập của dự án.

Mọi thay đổi về số tập, tên tập, giai đoạn văn học, cấu trúc thư mục hoặc trạng thái biên tập đều phải được cập nhật tại Master Index trước khi đồng bộ sang các tài liệu khác như Timeline, Tac-Gia-A-Z, Tac-Pham-A-Z, Ban-Do-Van-Hoc và README của từng thư mục.

Master Index là tài liệu quản trị chính thức của Vietnam Literature Digital Library.

---

# Quy tắc quản lý

1. Mỗi tập chỉ có một số duy nhất.
2. Mỗi tập chỉ xuất hiện một lần trong Master Index.
3. Mỗi tập thuộc một giai đoạn văn học.
4. Mỗi tập có một README làm trang giới thiệu.
5. Mỗi tập có thể gồm nhiều tập tin Markdown là các chương hoặc chuyên đề.
6. Các tập tin Markdown không được xem là các tập độc lập.
7. Master Index chỉ quản lý các tập chính thức của dự án.
8. Mọi thay đổi phải cập nhật tại Master Index trước khi cập nhật các tài liệu liên quan.

---

# Danh mục các tập

| Tập | Tên tập | Giai đoạn | Thư mục | README | Kiểm định | Ghi chú |
|----:|----------|-----------|----------|:------:|:---------:|----------|
| 01 | Văn học Dân gian Việt Nam | Văn học Dân gian | Van-Hoc-Dan-Gian | ✅ | ✅ VERIFIED | Gồm 4 chuyên đề: Ca dao, Tục ngữ, Truyện cổ tích, Sử thi |
| 02 | Văn học Trung đại Việt Nam | Văn học Trung đại | Van-Hoc-Trung-Dai | ✅ | ✅ VERIFIED | Gồm 5 chuyên đề: Nguyễn Du, Nguyễn Trãi, Hồ Xuân Hương, Cao Bá Quát, Nguyễn Gia Thiều |
| 03 | Thơ Mới (1932–1945) | Thơ Mới | Tho-Moi | ✅ | ✅ VERIFIED | Gồm 8 chuyên đề: Thế Lữ, Lưu Trọng Lư, Huy Cận, Nguyễn Bính, Xuân Diệu, Hàn Mặc Tử, Chế Lan Viên, Vũ Hoàng Chương |
| 04 | Văn học Hiện đại Việt Nam (1930–1945) | Văn học Hiện đại (1930–1945) | Van-Hoc-Hien-Dai | ✅ | ✅ VERIFIED | Gồm 7 chuyên đề: Vũ Trọng Phụng, Nguyễn Công Hoan, Nam Cao, Tô Hoài, Nguyễn Tuân, Kim Lân, Thạch Lam |
| 05 | Văn học Cách mạng Việt Nam (1945–1975) | Văn học Cách mạng (1945–1975) | Van-Hoc-Cach-Mang-1945-1975 | ✅ | ✅ VERIFIED | Gồm 6 chuyên đề: Tố Hữu, Chính Hữu, Nguyễn Đình Thi, Phạm Tiến Duật, Nguyễn Thi, Nguyễn Trung Thành |
| 06 | Văn học Việt Nam sau 1975 | Văn học Việt Nam sau 1975 | Van-Hoc-Sau-1975 | ✅ | ✅ VERIFIED | Gồm 7 chuyên đề: Nguyễn Minh Châu, Bảo Ninh, Nguyễn Huy Thiệp, Lê Minh Khuê, Nguyễn Ngọc Tư, Ma Văn Kháng, Nguyễn Khải |

---

# Kiến trúc dự án

Vietnam Literature Digital Library được xây dựng theo nguyên tắc:

**Một tập = Một đơn vị học thuật hoàn chỉnh**

Mỗi tập bao gồm:

- README.md (trang giới thiệu)
- Các tập tin Markdown là chương hoặc chuyên đề
- Có thể mở rộng thêm phụ lục và tài liệu nghiên cứu

Các tập tin Markdown không phải là các tập độc lập và không được đánh số trong Master Index.

---

# Trạng thái kiểm định

Master Index đã được đối chiếu trực tiếp với cấu trúc GitHub của dự án.

Kết quả:

- ✅ 06/06 giai đoạn đã được kiểm định.
- ✅ Cấu trúc thư mục thống nhất.
- ✅ README đầy đủ.
- ✅ Kiến trúc "Một tập – nhiều chuyên đề Markdown" đã được áp dụng.
- ✅ Phù hợp với Golden Template.
- ✅ Phù hợp với ADR-001.

**Trạng thái:** VERIFIED

**Phiên bản:** Version 2.0 – System Standardization

---

## Biên soạn

**Ngô Xuân Thể**

Vietnam Literature Digital Library (VLDL)

**Phiên bản phát hành:** Version 2.0

**Ngày kiểm định:** 06/07/2026

**Trạng thái tài liệu:** Official Release
