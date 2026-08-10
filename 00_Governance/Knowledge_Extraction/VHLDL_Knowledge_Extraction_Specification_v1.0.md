# VHLDL Knowledge Extraction Specification v1.0

## 1. Purpose

This specification defines the controlled requirements for
Knowledge Extraction in the Vietnam History & Literature Digital
Library (VHLDL).

It is a working specification for extraction, validation,
traceability, quality control, and regression testing.

This specification does not replace the VHLDL Master Prompt.

The Master Prompt defines how the Knowledge Extraction Engine
should operate.

This specification defines what the resulting work must satisfy.

---

## 2. Source of Truth

The original PDF is the primary source of historical and literary
content.

All extracted data must remain traceable to the source PDF.

No secondary source may be used unless it has been explicitly
confirmed for the relevant task.

The system must not silently replace source evidence with general
knowledge.

---

## 3. Core Principles

All Knowledge Extraction must follow these principles:

1. Accuracy.
2. Completeness.
3. No hallucination.
4. No unsupported inference.
5. Traceability.
6. Reproducibility.
7. Version control.
8. Source preservation.
9. Explicit uncertainty.
10. No silent correction of source content.

If a value cannot be independently verified from the permitted
source evidence, it must not be presented as verified data.

Use `UNKNOWN` when the required value cannot be verified, together
with the reason.

---

## 4. Evidence Classification

Each important extracted value must be distinguishable according
to its evidence status.

Permitted evidence classifications include:

- Verified from PDF Metadata
- Verified from PDF Content
- System Report
- OCR Derived
- Manual Verification
- UNKNOWN

System-reported information must not automatically be treated as
verified information.

OCR-derived information must remain identifiable as OCR-derived
until independently verified.

---

## 5. Processing Pipeline

The standard VHLDL processing pipeline is:

PDF
↓
Source Validation
↓
Document Structure Extraction
↓
Knowledge Unit Extraction
↓
Workbook
↓
Markdown
↓
Quality Review
↓
GitHub
↓
Website

No processing stage should be silently skipped.

---

## 6. Mandatory Processing Stages

### 6.1 Source Validation

Before extraction begins:

- identify the source PDF;
- identify the BookID / SourceID where applicable;
- establish the available text layer;
- establish whether OCR is required;
- record relevant source metadata;
- distinguish System Report from Verified Data;
- record uncertainty explicitly.

No unverified value may be promoted to verified data.

---

### 6.2 Document Structure Extraction

Extract and preserve the structural organization of the source,
including where applicable:

- volume information;
- chapters;
- sections;
- headings;
- subheadings;
- page sequence;
- footnotes;
- appendices;
- tables;
- other structural elements relevant to traceability.

After Document Structure Extraction is completed, the process must
stop for review before continuing to Knowledge Unit Extraction.

This checkpoint is mandatory.

---

### 6.3 Knowledge Unit Extraction

Knowledge units may include, where supported by the source:

- persons;
- historical events;
- literary works;
- authors;
- places;
- dynasties;
- historical periods;
- characters;
- institutions;
- concepts;
- keywords;
- relationships;
- other explicitly supported entities.

A knowledge unit must be supported by source evidence.

The system must not create an entity merely because it is plausible
or commonly known.

---

### 6.4 Workbook Generation

Extracted structured data must be mapped to the approved VHLDL
Workbook structure.

The Workbook must not contain information that cannot be traced
back to the permitted source evidence.

Where a field cannot be verified, use the approved uncertainty
status rather than inventing a value.

---

### 6.5 Markdown Generation

Markdown must preserve the source content and its traceability.

Where page-level traceability is required, each relevant source page
must have an identifiable source-page marker.

Markdown generation must not introduce:

- unsupported facts;
- invented relationships;
- silent corrections;
- external factual additions.

---

## 7. Traceability

Every extracted knowledge unit must be traceable to its source.

Traceability should identify, where applicable:

- source PDF;
- PDF page;
- BookID;
- SourceID;
- entity or knowledge-unit identifier;
- extraction status;
- evidence classification.

A reviewer must be able to move from extracted data back to the
original source evidence.

---

## 8. Uncertainty and Unknown Values

When evidence is insufficient:

`UNKNOWN`

must be preferred over an invented or inferred value.

The reason for `UNKNOWN` should be recorded.

Examples of reasons include:

- not present in source;
- source evidence inaccessible;
- OCR unclear;
- conflicting source evidence;
- insufficient evidence;
- cannot be independently verified.

The system must not convert uncertainty into certainty.

---

## 9. No Inference Rule

The following are not permitted without source support:

- guessing missing dates;
- completing damaged names;
- expanding abbreviations without evidence;
- identifying persons solely from contextual similarity;
- creating historical relationships solely from general knowledge;
- treating semantic similarity as identity;
- treating similar terminology as exact equivalence without an
  explicitly recorded mapping;
- adding information from memory or external knowledge.

Semantic relationships may be recorded only when the relationship
is supported by the permitted evidence and clearly identified as a
relationship rather than a replacement of source wording.

---

## 10. History ↔ Literature Links

History and Literature may be linked when the evidence supports the
relationship.

A link must distinguish between:

- source wording;
- identified entity;
- relationship type;
- supporting source;
- source page;
- confidence / status.

A semantic link must not rewrite or replace the original source
wording.

The existence of two similar names or concepts alone is not
sufficient evidence for an exact identity.

---

## 11. Quality Control

Every processed dataset must pass the following five validation
stages:

1. Source Validation
2. Knowledge Validation
3. Workbook Validation
4. Markdown Validation
5. Final Audit

Every discrepancy must be recorded in the Data Quality Log.

A PASS at one stage does not automatically imply PASS at later
stages.

---

## 12. Regression Testing

Every material change to the extraction rules or Master Prompt must
be testable against previously identified defects.

Regression testing must determine:

1. whether the previous defect has been corrected;
2. whether the defect remains;
3. whether a new defect has appeared;
4. whether an existing correct behavior has regressed.

Previous defects must not be deleted from the historical record.

They remain test cases for future versions.

---

## 13. Error Recording

During manual QA:

- record the relevant line or page;
- record the observed problem;
- identify the error category where possible;
- preserve the original Markdown;
- do not silently correct the source file during QA.

If the reviewer cannot determine the cause of an anomaly, it may be
recorded as `UNKNOWN`.

The reviewer should not be required to diagnose whether an anomaly
is caused by OCR, font encoding, extraction, or another technical
cause unless the evidence permits that conclusion.

---

## 14. Version Control

This specification is versioned independently from the Master Prompt.

`VHLDL Knowledge Extraction Specification v1.0`

is the initial controlled version.

Future changes must create a new version or an explicitly recorded
amendment.

The original version must not be overwritten.

---

## 15. Relationship with the Master Prompt

The Master Prompt and this Specification are separate controlled
documents.

### Master Prompt

Defines:

- role;
- operating instructions;
- extraction behavior;
- processing rules;
- response behavior.

### Knowledge Extraction Specification

Defines:

- required standards;
- evidence requirements;
- traceability;
- validation;
- quality gates;
- regression requirements.

A change to the Master Prompt does not automatically change this
Specification.

A change to this Specification does not automatically change the
Master Prompt.

Both must be version-controlled independently.

---

## 16. Controlled Pilot Status

This version is intended for controlled pilot testing.

It must not be treated as proof that the Master Prompt is complete.

The purpose of the pilot is to expose real extraction defects,
compare results across runs, and improve the system through
controlled amendments and regression testing.

---

## 17. Acceptance Principle

A volume must not be considered fully accepted merely because a
Markdown file has been generated.

Acceptance requires completion of the applicable validation gates
and resolution or explicit disposition of identified issues.

The status of a volume must therefore remain explicit, such as:

- PILOT
- WORKING
- PENDING
- BLOCKED
- PASS
- ACCEPTED

---

## 18. Change History

### Version 1.0

Initial controlled specification for VHLDL Knowledge Extraction.

Status:

`WORKING / PILOT`
3
