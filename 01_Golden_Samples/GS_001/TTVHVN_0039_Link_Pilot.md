---
document_id: VHLDL-PILOT-BOOK0054-LINK
book_id: BOOK0054
series: Tổng tập Văn học Việt Nam
volume: 39
source_title: Tổng tập Văn học Việt Nam - Tập 39
publisher: Nhà xuất bản Khoa học xã hội
year: 2000
status: PILOT-QA-PENDING
scope: Link-focused pilot extraction
source_lock: true
---

# TTVHVN_039 — Link-focused Pilot

## 1. Scope

This artifact is a **link-focused pilot**, prepared to test the bridge between:

- `LSVN_001` — Lịch sử Việt Nam, Tập 1
- `TTVHVN_039` — Tổng tập Văn học Việt Nam, Tập 39

It is **not declared a complete source-locked transcription of all pages of TTVHVN_039**. Only content actually retrievable from the currently accessible source evidence is included.

## 2. Bibliographic identification

- BookID: `BOOK0054`
- Series: `Tổng tập Văn học Việt Nam`
- Volume: `39`
- Publisher: `Nhà xuất bản Khoa học xã hội`
- Year: `2000`
- Main focus: văn học các dân tộc thiểu số Việt Nam
- Editor/compilers identified in source metadata: GS. Đặng Nghiêm Vạn (chủ biên), Chu Thái Sơn, Nguyễn Hữu Thấu, Lục Văn Pảo.

## 3. Relevant contents

The accessible source identifies:

### Dân tộc Tày

- `Pú Lương Quân` — p. 29 — described as a truyền thuyết về sự ra đời của người Tày và các họ tộc.
- `Chín chúa tranh vua` — p. 39 — described as a trường ca lịch sử / truyền thuyết concerning Thục Phán (An Dương Vương), his rule in Nam Cương, the conflict with nine chúa, and the subsequent relation to Văn Lang / Âu Lạc.

### Other materials relevant to the oral/traditional literature layer

- `Kể chuyện bản mường` — p. 91 — a historical/chronicle tradition of the Thái Đen.
- `Chia bản chia mường` — p. 148.
- `Một số luật lệ mường Ca Da` — p. 206.
- `Dặn lại mường` — p. 209.
- `Lệ luật dòng lang họ Quách` — p. 212 — described as a system of **luật lệ truyền miệng**.
- `Luật tục (Klei duê bhiăn kdi)` — p. 214 — presented in verse or prose with artistic form.

## 4. History ↔ Literature Link Test

### LINK-001 — Thục Phán / An Dương Vương

**History source:** `LSVN_001`

The history volume records the Tày tradition “Cẩu chùa cheng vùa” (“Chín chúa tranh vua”), concerning Thục Chế, Thục Phán, Nam Cương, the nine chúa Mường, and the emergence of An Dương Vương.

**Literature source:** `TTVHVN_039`, p. 39

The literature volume identifies `Chín chúa tranh vua` as a Tày historical epic / legend concerning Thục Phán (An Dương Vương).

**Link status:** `FOUND`

### LINK-002 — Chín chúa tranh vua

```text
LSVN_001
  └── Nước Âu Lạc
      └── Thục Phán / An Dương Vương
          └── Cẩu chùa cheng vùa
              └── Chín chúa tranh vua
                    ↕
TTVHVN_039
  └── Dân tộc Tày
      └── Chín chúa tranh vua
          └── p. 39
```

**Link status:** `FOUND — strong thematic and entity match`

### LINK-003 — Truyền khẩu / truyền miệng

The history source explicitly defines a type of legend as:

- `truyền khẩu (bất thành văn)`

and separately describes legends fixed in written form.

The accessible literature-volume metadata describes `Lệ luật dòng lang họ Quách` as `luật lệ truyền miệng`.

For this pilot, **“truyền miệng” is treated as the corresponding conceptual form of “truyền khẩu”**, per the project decision for this run.

**Important QA rule:** the extraction must preserve the source's actual wording at each occurrence; the equivalence is a semantic mapping for Link analysis, not permission to rewrite source text.

**Link status:** `FOUND — semantic equivalence / terminology mapping`

## 5. Cross-volume link record

| LinkID | History entity | Literature entity | Relationship | Status |
|---|---|---|---|---|
| LINK-001 | Thục Phán / An Dương Vương | Chín chúa tranh vua | Historical figure ↔ literary/legendary work | FOUND |
| LINK-002 | Cẩu chùa cheng vùa / Chín chúa tranh vua | Chín chúa tranh vua | Same tradition / title | FOUND |
| LINK-003 | Truyền khẩu | Truyền miệng | Oral-transmission concept | FOUND |
| LINK-004 | Nước Âu Lạc | Chín chúa tranh vua | Historical context ↔ literary tradition | FOUND |

## 6. Source traceability

### LSVN_001

The history source identifies the Tày legend `Cẩu chùa cheng vùa (Chín chúa tranh vua)` and connects it with Thục Phán / An Dương Vương and Nam Cương.

### TTVHVN_039

The accessible source metadata identifies:

- `Chín chúa tranh vua` — p. 39
- `Lệ luật dòng lang họ Quách` — p. 212
- `Luật tục` — p. 214

## 7. QA observations for the future reader

1. Do not collapse `truyền khẩu` and `truyền miệng` into a single source quotation.
2. Preserve the exact source wording first.
3. Store the semantic equivalence in the Link layer.
4. Link `Thục Phán / An Dương Vương` to `Chín chúa tranh vua` as an entity/work relationship.
5. Link `Nam Cương / Văn Lang / Âu Lạc` as historical-context nodes only where the source explicitly supports the relationship.
6. Do not infer additional historical equivalences merely because two works concern similar periods.

## 8. Pilot status

`PILOT-QA-PENDING`

This file is intentionally suitable for manual review and regression testing. It should not be promoted to `ACCEPTED` until the complete TTVHVN_039 source text is available for page-by-page source locking and traceability.

