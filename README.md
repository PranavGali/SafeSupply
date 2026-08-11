# SafeSupply — Supplier Query Management
### UX/UI Design & Technical Implementation Case Study
*Prepared for the QA Supplier Query Management Module — Food Safety Internship Assessment*

SafeSupply is a high-fidelity B2B SaaS web application designed for Quality Assurance (QA) Managers in the food manufacturing sector. It solves the critical operational challenge of tracking, managing, and resolving food-safety queries with suppliers (e.g. allergen validation, certificate updates, quality audits) which otherwise get lost in scattered email threads.

---

## 1. Problem Statement
Food safety regulations demand absolute audit trail transparency. Currently, QA managers spend hours weekly emailing suppliers back-and-forth regarding certificate renewals, ingredient safety sheets, and quality deviations.
* **The Risk**: Queries get lost in inboxes, certificate expirations are missed, and unvalidated allergen formulations threaten consumer safety.
* **The Opportunity**: Centralize supplier communication into a dedicated, visually tracked dashboard that improves transparency, maintains compliance history, and accelerates resolution times.

## 2. Target User Profile: The QA Manager
* **Primary Role**: Oversees safety compliance, coordinates supplier certifications, and conducts product spec audits.
* **Core Pain Points**:
  * Email clutter and difficulty tracking who responded to what and when.
  * Difficulty showing auditors a clean timeline/history of supplier interactions.
  * High-risk safety incidents buried beneath routine check-in emails.
* **Interface Preferences**: Needs a highly efficient desktop utility interface (data tables, filter bars, color coding) that is accessible, readable under pressure, and doesn't rely on decorative fluff.

## 3. User Goal
Identify unresolved supplier compliance issues, initiate safety queries, track supplier responses using centralized query tracking, and archive resolutions in a structured audit trail.

## 4. User Flow
```
Select Supplier 
      ↓
View Existing Queries
      ↓
Raise New Query 
      ↓
Fill Query Details (Supplier, Category, Priority, Description)
      ↓
Submit Query
      ↓
Query Created (Confirmation & Generated ID QRY-2026-XXXX)
      ↓
Track Status (Visual Timeline)
      ↓
Supplier Responds (Response Card & Attachments)
      ↓
QA Reviews Response
      ↓
Mark as Resolved (Structured Audit Trail)
```

---

## 5. Key UX Decisions

### Why supplier and query status are visible together?
Rather than forcing QA Managers to navigate back-and-forth between a "Supplier List" and a separate "Queries Feed," SafeSupply couples them. The Supplier List displays compliance indicators alongside open queries metrics. This gives the user instant context: *Is this supplier in review because of an unresolved query, or are they experiencing compliance issues because of an expired certificate?*

### Why food-safety categories are predefined?
Leaving category fields as free-text input introduces data fragmentation (e.g., one manager writes "allergen info," another writes "Allergens"). By predefining critical categories (*Allergen Information, Certificate / Documentation, Ingredient Safety, Compliance, Product Quality, Other*), we:
1. Standardize query taxonomy.
2. Enable structured analytics reporting.
3. Allow automated routing (e.g. sending critical Allergen queries to top priorities automatically).

### Why priority and due date are included?
Not all queries carry the same weight. A missed GFSI certificate is important, but a suspected Salmonella contamination is critical. Priority levels (*Low, Medium, High, Critical*) combined with due dates allow the system to calculate escalating alerts. It helps QA Managers filter and sort by urgency, tackling highest risk issues first.

### Why the timeline is used for query tracking?
For food audits, demonstrating the *audit trail* is mandatory. A visual status timeline (Created → Sent → Responded → Review → Resolved) gives QA managers and regulatory auditors instant visual confirmation of exactly where a query sits, who is holding it up, and the exact timestamps of each interaction.

### How the design reduces dependency on email?
Instead of loose emails, queries are raised directly inside SafeSupply. Suppliers receive structured alerts with direct links to upload certificates or respond. The system manages auto-reminders, tracks response history, and centralizes attachment uploads, eliminating the "did they attach the file?" confusion.

### How the interface helps QA managers identify unresolved issues quickly?
The dashboard uses clear, high-contrast, non-color-exclusive status badges (combining visual icons, descriptive text labels, and color tints). The summary cards at the top of the suppliers list and dashboard act as instant filtering anchors, showing the user exactly how many issues are pending actions.

---

## 6. Accessibility (a11y) Decisions
* **Visual Anchors**: Status states do not rely solely on color. Every badge features a corresponding descriptive icon (e.g., checkmarks for resolved, clock icons for pending, caution triangles for review) to assist color-blind users.
* **Sufficient Contrast**: Designed with accessible contrast, clear labels, visible focus states, and status indicators that do not rely on color alone (e.g. Amber text on Amber light bg, Green text on Emerald light bg, Zinc text on white).
* **Keyboard Navigation**: Interactive elements use `<button>`, `<select>`, and `<input>` tags to ensure native focus states and keyboard navigation, with custom high-contrast focus rings (`outline-offset`).
* **Semantic HTML**: Utilizes HTML5 semantic landmarks (`<aside>`, `<header>`, `<main>`, `<nav>`, `<article>`) and appropriate ARIA accessibility attributes.

---

## 7. The Design System
SafeSupply is built on a custom, strict design system based on an **8px grid** (padding, margins, and card corners increment by 8px, e.g. 4px, 8px, 12px, 16px, 24px, 32px, 48px).

| Token | CSS Value | Application |
| :--- | :--- | :--- |
| **Accent / Teal** | `#0D9488` | Main action buttons, active navigation, active nodes |
| **Teal Hover** | `#0F766E` | Hover states for primary elements |
| **Dark Neutral** | `#09090B` | Primary headings and core text |
| **Light Neutral** | `#FAFAFA` | Page backgrounds |
| **Card BG** | `#FFFFFF` | Workspaces, cards, sidebar background |
| **Border Zinc** | `#E4E4E7` | Division lines, card containers |
| **Border Light** | `#F4F4F5` | Secondary dividers, table row separator |
| **Typography** | `Plus Jakarta Sans`, `Inter` | 14px default UI body size, 24px main page titles |
| **Radius MD** | `8px` | Buttons, text fields, small badges |
| **Radius LG** | `12px` | Main cards, tables, popovers |
| **Shadow Soft** | `0 1px 3px 0 rgba(0,0,0,0.03)`| Card depth representation without visual noise |

---

## 8. Screens Designed

### Screen 1: Supplier Management (Directory)
* **Features**: Summary statistics cards, global filter toolbar (filters by compliance status, query status, search text), and a structured directory grid showing supplier metadata, compliance ratings, open query counters, and view action cues.

### Screen 2: Raise New Query Form
* **Features**: Structured layout with clear form controls, dynamic supplier details widget (automatically shows supplier contact emails on selection), input validators with localized validation alerts, drag-and-drop file attachment zone, and draft options. Includes a high-fidelity Success Confirmation Screen showing generated Query ID, priority status, and timeline navigation triggers.

### Screen 3: Query Details & Visual Timeline
* **Features**: Dynamic 2-column layout. The main column houses the question description, attached PDF specs, and the supplier's response card. The sidebar houses the linear visual timeline (advancing nodes) and structured audit metadata. Includes an active "Mark as Resolved" action that dynamically advances the timeline state and updates the compliance records in real-time.

---

## 9. Future Improvements (Roadmap)
1. **Interactive Document Viewer**: Embedded PDF review module that allows QA managers to check compliance documents directly in-app without downloading them.
2. **Automated Supplier Email reminders**: Scheduler that automatically alerts suppliers when queries approach their due dates.
3. **Audit Package Generation**: Single-click compiler to export all communications and certificates as a zip folder for ISO 22000 audits.

---

## How to Run the Project Locally

The project is built as a Single Page Application (SPA) powered by Vite for development hot-reloading and serving:

1. Clone or navigate to the project directory:
   ```bash
   cd "smart foods"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local address in your web browser (typically `http://localhost:5173`).
