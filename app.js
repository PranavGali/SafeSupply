/* ==========================================================================
   SafeSupply — app.js
   Plain script (no ES module), runs after DOM is ready (placed at end of body)
   ========================================================================== */

// ── SVG ICON HELPER ──────────────────────────────────────────────────────────
const ICONS = {
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  files: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><polyline points="15 2 15 7 20 7"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  upload: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  helpCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  msgSquare: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  paperclip: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  checkBig: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
};

// ── MOCK DATABASE ─────────────────────────────────────────────────────────────
var db = {
  suppliers: [
    { id: 1, name: "FreshHarvest Foods",     category: "Fresh Produce",       contactName: "Datta",    contactEmail: "datta@freshharvest.com",    compliance: "Compliant",        lastQueryDate: "11 Aug 2026", openQueries: 1 },
    { id: 2, name: "GreenField Ingredients", category: "Raw Ingredients",     contactName: "Krishna",  contactEmail: "krishna@greenfield.com",    compliance: "Review Required",  lastQueryDate: "11 Aug 2026", openQueries: 1 },
    { id: 3, name: "PureTaste Foods",        category: "Flavorings",          contactName: "Raghu",    contactEmail: "raghu@puretaste.com",       compliance: "Compliant",        lastQueryDate: "03 Aug 2026", openQueries: 0 },
    { id: 4, name: "SafeSource Packaging",   category: "Packaging Materials", contactName: "Karthik",  contactEmail: "karthik@safesource.com",    compliance: "Expiring Soon",    lastQueryDate: "25 Jul 2026", openQueries: 0 },
    { id: 5, name: "NatureBlend Supplies",   category: "Herbs & Spices",      contactName: "Sanjeev",  contactEmail: "sanjeev@natureblend.com",   compliance: "Compliant",        lastQueryDate: "10 Aug 2026", openQueries: 1 }
  ],
  queries: [
    {
      id: "QRY-2026-0148", supplierId: 1,
      title: "Allergen Declaration Update", category: "Allergen Information", priority: "High",
      dueDate: "2026-08-18", status: "In Progress",
      dateCreated: "11 Aug 2026", createdTime: "10:12 AM", assignedQA: "Pranav Reddy",
      description: "Please provide the latest allergen declaration for the supplied ingredient and confirm whether the formulation has changed.",
      timeline: [
        { title: "Query Created",      date: "11 Aug 2026, 10:12 AM", done: true,  current: false },
        { title: "Sent to Supplier",   date: "11 Aug 2026, 10:14 AM", done: true,  current: false },
        { title: "Supplier Responded", date: "12 Aug 2026, 09:30 AM", done: true,  current: false },
        { title: "QA Review",          date: "In Progress",           done: true,  current: true  },
        { title: "Resolved",           date: "Awaiting resolution",   done: false, current: false }
      ],
      supplierResponse: "Attached is the latest allergen declaration form (Rev 4). We confirm there has been no change in the formulation or cross-contamination risk since the last audit.",
      responseDate: "12 Aug 2026, 09:30 AM",
      attachments: ["allergen_declaration_rev4.pdf", "product_spec_freshharvest.pdf"]
    },
    {
      id: "QRY-2026-0145", supplierId: 2,
      title: "GFSI Certificate Expiry Warning", category: "Certificate / Documentation", priority: "High",
      dueDate: "2026-08-15", status: "Pending",
      dateCreated: "11 Aug 2026", createdTime: "08:30 AM", assignedQA: "Pranav Reddy",
      description: "Your GFSI Certificate is expiring in 4 days. Please upload the audit report and renewal certificate to ensure uninterrupted supply.",
      timeline: [
        { title: "Query Created",      date: "11 Aug 2026, 08:30 AM", done: true,  current: false },
        { title: "Sent to Supplier",   date: "11 Aug 2026, 08:45 AM", done: true,  current: true  },
        { title: "Supplier Responded", date: "Awaiting response",     done: false, current: false },
        { title: "QA Review",          date: "Awaiting response",     done: false, current: false },
        { title: "Resolved",           date: "Pending actions",       done: false, current: false }
      ],
      supplierResponse: null, responseDate: null, attachments: []
    },
    {
      id: "QRY-2026-0142", supplierId: 5,
      title: "Moisture Level Variation", category: "Ingredient Safety", priority: "Medium",
      dueDate: "2026-08-25", status: "In Progress",
      dateCreated: "10 Aug 2026", createdTime: "02:15 PM", assignedQA: "Pranav Reddy",
      description: "Moisture levels in Batch #NB-9812 were at 14.2%, close to the 14.5% limit. Please provide quality check reports for this batch.",
      timeline: [
        { title: "Query Created",      date: "10 Aug 2026, 02:15 PM", done: true, current: false },
        { title: "Sent to Supplier",   date: "10 Aug 2026, 02:30 PM", done: true, current: false },
        { title: "Supplier Responded", date: "11 Aug 2026, 11:00 AM", done: true, current: false },
        { title: "QA Review",          date: "In Progress",           done: true, current: true  },
        { title: "Resolved",           date: "Pending actions",       done: false, current: false }
      ],
      supplierResponse: "Batch #NB-9812 experienced higher relative humidity during the final packaging cycle, but stayed within standard limits. Quality parameters were not compromised. Logs attached.",
      responseDate: "11 Aug 2026, 11:00 AM",
      attachments: ["quality_log_batch_9812.pdf"]
    },
    {
      id: "QRY-2026-0140", supplierId: 3,
      title: "Pesticide Residue Audit Report", category: "Ingredient Safety", priority: "Critical",
      dueDate: "2026-08-05", status: "Resolved",
      dateCreated: "01 Aug 2026", createdTime: "09:00 AM", assignedQA: "Pranav Reddy",
      description: "Provide the standard pesticide residue audit report for the vanilla bean extract shipment delivered in July 2026.",
      timeline: [
        { title: "Query Created",      date: "01 Aug 2026, 09:00 AM", done: true, current: false },
        { title: "Sent to Supplier",   date: "01 Aug 2026, 09:15 AM", done: true, current: false },
        { title: "Supplier Responded", date: "03 Aug 2026, 04:30 PM", done: true, current: false },
        { title: "QA Review",          date: "04 Aug 2026, 10:00 AM", done: true, current: false },
        { title: "Resolved",           date: "04 Aug 2026, 11:30 AM", done: true, current: true  }
      ],
      supplierResponse: "Our raw vanilla extract is tested for all active chemicals and resides below FDA detection limits. The residue testing laboratory report is attached.",
      responseDate: "03 Aug 2026, 04:30 PM",
      attachments: ["vanilla_pesticide_audit_report.pdf"]
    },
    {
      id: "QRY-2026-0138", supplierId: 4,
      title: "Migration Testing Compliance", category: "Compliance", priority: "Medium",
      dueDate: "2026-08-01", status: "Resolved",
      dateCreated: "25 Jul 2026", createdTime: "11:00 AM", assignedQA: "Pranav Reddy",
      description: "Please submit migration testing report for the food-grade plastic liners supplied to our bagging units.",
      timeline: [
        { title: "Query Created",      date: "25 Jul 2026, 11:00 AM", done: true, current: false },
        { title: "Sent to Supplier",   date: "25 Jul 2026, 11:15 AM", done: true, current: false },
        { title: "Supplier Responded", date: "27 Jul 2026, 01:20 PM", done: true, current: false },
        { title: "QA Review",          date: "28 Jul 2026, 09:00 AM", done: true, current: false },
        { title: "Resolved",           date: "28 Jul 2026, 10:15 AM", done: true, current: true  }
      ],
      supplierResponse: "Migration tests compiled in alignment with European plastic materials guidelines and food contact regulations. Report attached.",
      responseDate: "27 Jul 2026, 01:20 PM",
      attachments: ["migration_linings_eu_report.pdf"]
    }
  ]
};

// ── STATE ─────────────────────────────────────────────────────────────────────
var state = {
  view: "suppliers",
  queryId: null,
  uploadedFiles: [],
  supplierSearch: "",
  supplierCompliance: "all",
  supplierStatus: "all",
  querySearch: "",
  queryStatus: "all",
  queryPriority: "all"
};

// ── DOM REFS ──────────────────────────────────────────────────────────────────
var content       = document.getElementById("content-container");
var sidebar       = document.getElementById("sidebar");
var menuToggle    = document.getElementById("menu-toggle");
var bcParent      = document.getElementById("breadcrumb-parent");
var bcCurrent     = document.getElementById("breadcrumb-current");
var queriesCount  = document.getElementById("nav-queries-count");

// ── ROUTER ────────────────────────────────────────────────────────────────────
function go(view, params) {
  state.view = view;
  if (params) {
    if (params.queryId)    state.queryId = params.queryId;
  }
  if (view === "raise-query") state.uploadedFiles = [];
  sidebar.classList.remove("open");
  render();
}

function render() {
  // Sync nav highlight
  document.querySelectorAll(".nav-item").forEach(function(el) {
    el.classList.remove("active");
  });
  var navKey = state.view === "raise-query" || state.view === "query-details" ? "queries" : state.view;
  var navEl = document.getElementById("nav-" + navKey);
  if (navEl) navEl.classList.add("active");

  // Sync query badge count
  var open = db.queries.filter(function(q){ return q.status !== "Resolved"; }).length;
  queriesCount.textContent = open;

  switch (state.view) {
    case "dashboard":    renderDashboard();   break;
    case "suppliers":    renderSuppliers();   break;
    case "queries":      renderQueries();     break;
    case "reports":      renderReports();     break;
    case "settings":     renderSettings();    break;
    case "raise-query":  renderForm();        break;
    case "query-details":renderDetails();     break;
    default:             renderSuppliers();
  }
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function statusBadge(status) {
  if (status === "Pending")     return '<span class="badge badge-pending">'   + ICONS.clock         + ' Pending</span>';
  if (status === "In Progress") return '<span class="badge badge-progress">'  + ICONS.activity      + ' In Progress</span>';
  return                               '<span class="badge badge-resolved">'  + ICONS.checkCircle   + ' Resolved</span>';
}

function priorityBadge(p) {
  return '<span class="badge badge-priority-' + p.toLowerCase() + '">' + p + '</span>';
}

function complianceBadge(c) {
  if (c === "Compliant")        return '<span class="badge badge-compliant">' + ICONS.checkCircle   + ' Compliant</span>';
  if (c === "Review Required")  return '<span class="badge badge-review">'    + ICONS.alertTriangle + ' Review Required</span>';
  return                               '<span class="badge badge-expiring">'  + ICONS.clock         + ' Expiring Soon</span>';
}

function initials(name) {
  return name.split(" ").map(function(w){ return w[0]; }).join("").substring(0, 2).toUpperCase();
}

function nowDateStr() {
  return new Date().toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" });
}
function nowTimeStr() {
  return new Date().toLocaleTimeString("en-US", { hour:"2-digit", minute:"2-digit" });
}

function on(id, evt, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener(evt, fn);
}

function showToast(msg) {
  var t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = ICONS.info + "<span>" + msg + "</span>";
  document.getElementById("toast-container").appendChild(t);
  setTimeout(function(){ t.style.opacity = "0"; setTimeout(function(){ t.remove(); }, 300); }, 3000);
}

// ── SCREEN 1: SUPPLIERS ───────────────────────────────────────────────────────
function renderSuppliers() {
  bcParent.textContent  = "SafeSupply";
  bcCurrent.textContent = "Suppliers";

  var list = db.suppliers.filter(function(s) {
    var term = state.supplierSearch.toLowerCase();
    var matchText = !term || s.name.toLowerCase().includes(term) || s.category.toLowerCase().includes(term) || s.contactName.toLowerCase().includes(term);
    var matchComp = state.supplierCompliance === "all" || s.compliance === state.supplierCompliance;
    var matchStat = state.supplierStatus === "all"
      || (state.supplierStatus === "open" && s.openQueries > 0)
      || (state.supplierStatus === "none" && s.openQueries === 0);
    return matchText && matchComp && matchStat;
  });

  var totalSuppliers = db.suppliers.length;
  var activeQ = db.queries.filter(function(q){ return q.status === "In Progress" || q.status === "Pending"; }).length;
  var pendQ  = db.queries.filter(function(q){ return q.status === "Pending"; }).length;
  var resolQ = db.queries.filter(function(q){ return q.status === "Resolved"; }).length;

  var attentionList = db.queries.filter(function(q) {
    return q.status !== "Resolved" && (q.id === "QRY-2026-0145" || q.id === "QRY-2026-0142");
  });

  var attentionItems = attentionList.map(function(q) {
    var sup = db.suppliers.find(function(s){ return s.id === q.supplierId; });
    var statusText = q.status === "Pending" ? "Pending supplier response" : "In Progress";
    var statusColor = q.status === "Pending" ? "var(--color-pending-text)" : "var(--color-progress-text)";
    return '<div class="needs-attention-card">' +
      '<span class="needs-attention-sup">' + (sup ? sup.name : "") + '</span>' +
      '<div class="needs-attention-meta">' +
        '<span>' + q.category + '</span>' +
        '<span>&bull;</span>' +
        '<span style="color:' + statusColor + ';font-weight:550;">' + statusText + '</span>' +
      '</div>' +
      '<div class="needs-attention-status">' +
        '<button class="needs-attention-action btn-attention-track" data-qid="' + q.id + '">' +
          '<span>View Queries</span> ' + ICONS.arrowRight +
        '</button>' +
      '</div>' +
    '</div>';
  }).join("");

  var attentionSection = attentionList.length > 0 ?
    '<section class="needs-attention-container" aria-label="Action Required Queries">' +
      '<div class="needs-attention-header">' +
        '<span class="needs-attention-title">Needs Attention</span>' +
        '<span class="needs-attention-badge">' + attentionList.length + (attentionList.length === 1 ? ' query requires action' : ' queries require action') + '</span>' +
      '</div>' +
      '<div class="needs-attention-grid">' + attentionItems + '</div>' +
    '</section>' : "";

  var rows = list.length === 0
    ? '<tr><td colspan="7"><div class="table-empty-state">' +
      '<div style="font-size:40px;margin-bottom:12px;">🔍</div>' +
      '<h3>No suppliers found</h3><p>Try adjusting your search or filters.</p></div></td></tr>'
    : list.map(function(s) {
        var sq = db.queries.filter(function(q){ return q.supplierId === s.id; });
        var active = sq.filter(function(q){ return q.status !== "Resolved"; });
        var hasPending = active.some(function(q){ return q.status === "Pending"; });
        var rowStatus = active.length === 0 ? statusBadge("Resolved")
                      : hasPending ? statusBadge("Pending")
                      : statusBadge("In Progress");
        var openTag = s.openQueries > 0
          ? '<span class="badge badge-accent" style="font-size:11px;">' + s.openQueries + ' Open</span>'
          : '<span style="color:var(--color-text-muted);font-size:13px;">—</span>';
        return '<tr data-sid="' + s.id + '" style="cursor:pointer;">' +
          '<td><div class="supplier-cell"><div class="supplier-avatar">' + initials(s.name) + '</div>' +
          '<div class="supplier-details"><span class="supplier-name">' + s.name + '</span>' +
          '<span class="supplier-category">' + s.category + '</span></div></div></td>' +
          '<td><div class="contact-cell"><span class="contact-name">' + s.contactName + '</span>' +
          '<span class="contact-email">' + s.contactEmail + '</span></div></td>' +
          '<td style="text-align:center;">' + openTag + '</td>' +
          '<td style="font-size:13px;font-weight:500;">' + s.lastQueryDate + '</td>' +
          '<td>' + complianceBadge(s.compliance) + '</td>' +
          '<td>' + rowStatus + '</td>' +
          '<td><button class="action-link btn-vq" data-sid="' + s.id + '">' +
          '<span>View Queries</span>' + ICONS.arrowRight + '</button></td></tr>';
      }).join("");

  content.innerHTML =
    '<section class="summary-grid" aria-label="Summary Metrics">' +
      metricCard("teal",  ICONS.users,       "Total Suppliers",      totalSuppliers) +
      metricCard("blue",  ICONS.activity,    "Active Queries",       activeQ) +
      metricCard("amber", ICONS.alertCircle, "Pending Responses",    pendQ) +
      metricCard("green", ICONS.checkCircle, "Resolved This Month",  resolQ) +
    '</section>' +

    attentionSection +

    '<section class="card-container">' +
      '<div class="filter-bar">' +
        '<div class="filter-left">' +
          '<div class="search-wrapper">' + ICONS.search +
            '<input type="text" id="sup-search" placeholder="Search suppliers..." value="' + state.supplierSearch + '">' +
          '</div>' +
          '<div class="filter-group"><span class="filter-label">Compliance:</span>' +
            '<select id="flt-comp" class="select-input">' +
              opt("all","All Statuses",state.supplierCompliance) +
              opt("Compliant","Compliant",state.supplierCompliance) +
              opt("Review Required","Review Required",state.supplierCompliance) +
              opt("Expiring Soon","Expiring Soon",state.supplierCompliance) +
            '</select></div>' +
          '<div class="filter-group"><span class="filter-label">Query Status:</span>' +
            '<select id="flt-stat" class="select-input">' +
              opt("all","All Statuses",state.supplierStatus) +
              opt("open","Has Open Queries",state.supplierStatus) +
              opt("none","No Open Queries",state.supplierStatus) +
            '</select></div>' +
        '</div>' +
        '<div>' +
          '<button class="btn btn-primary" id="btn-raise-top">' + ICONS.plus + '<span>Raise New Query</span></button>' +
        '</div>' +
      '</div>' +

      '<div class="table-responsive">' +
        '<table class="data-table">' +
          '<thead><tr>' +
            '<th style="width:25%">Supplier</th><th style="width:20%">Contact</th>' +
            '<th style="width:12%;text-align:center;">Open Queries</th>' +
            '<th style="width:13%">Last Query</th><th style="width:15%">Compliance</th>' +
            '<th style="width:12%">Status</th><th>Action</th>' +
          '</tr></thead>' +
          '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>' +
    '</section>';

  // Events
  on("sup-search", "input", function(e){ state.supplierSearch = e.target.value; renderSuppliers(); });
  on("flt-comp",   "change", function(e){ state.supplierCompliance = e.target.value; renderSuppliers(); });
  on("flt-stat",   "change", function(e){ state.supplierStatus = e.target.value; renderSuppliers(); });
  on("btn-raise-top", "click", function(){ go("raise-query"); });

  document.querySelectorAll(".btn-attention-track").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      go("query-details", { queryId: btn.getAttribute("data-qid") });
    });
  });

  document.querySelectorAll(".btn-vq").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var sid = parseInt(btn.getAttribute("data-sid"));
      var sup = db.suppliers.find(function(s){ return s.id === sid; });
      state.querySearch = sup ? sup.name : "";
      go("queries");
    });
  });

  document.querySelectorAll(".data-table tbody tr[data-sid]").forEach(function(row) {
    row.addEventListener("click", function() {
      var sid = parseInt(row.getAttribute("data-sid"));
      var sup = db.suppliers.find(function(s){ return s.id === sid; });
      state.querySearch = sup ? sup.name : "";
      go("queries");
    });
  });
}

function metricCard(color, icon, label, value) {
  return '<div class="summary-card"><div class="summary-icon ' + color + '">' + icon + '</div>' +
    '<div class="summary-info"><span class="summary-label">' + label + '</span>' +
    '<span class="summary-value">' + value + '</span></div></div>';
}

function opt(val, label, current) {
  return '<option value="' + val + '"' + (current === val ? ' selected' : '') + '>' + label + '</option>';
}

// ── SCREEN 2: QUERIES LIST ────────────────────────────────────────────────────
function renderQueries() {
  bcParent.textContent  = "SafeSupply";
  bcCurrent.textContent = "Queries";

  var list = db.queries.filter(function(q) {
    var sup = db.suppliers.find(function(s){ return s.id === q.supplierId; });
    var term = state.querySearch.toLowerCase();
    var matchText = !term
      || q.id.toLowerCase().includes(term)
      || q.title.toLowerCase().includes(term)
      || q.category.toLowerCase().includes(term)
      || (sup && sup.name.toLowerCase().includes(term));
    var matchStat = state.queryStatus === "all" || q.status === state.queryStatus;
    var matchPri  = state.queryPriority === "all" || q.priority === state.queryPriority;
    return matchText && matchStat && matchPri;
  }).sort(function(a, b){ return b.id.localeCompare(a.id); });

  var rows = list.length === 0
    ? '<tr><td colspan="7"><div class="table-empty-state">' +
      '<div style="font-size:40px;margin-bottom:12px;">📋</div>' +
      '<h3>No queries found</h3><p>Adjust your filters or raise a new query.</p></div></td></tr>'
    : list.map(function(q) {
        var sup = db.suppliers.find(function(s){ return s.id === q.supplierId; });
        return '<tr data-qid="' + q.id + '" style="cursor:pointer;">' +
          '<td><span class="query-id-tag">' + q.id + '</span></td>' +
          '<td><div style="display:flex;flex-direction:column;">' +
            '<span style="font-weight:600;color:var(--color-text);">' + q.title + '</span>' +
            '<span style="font-size:11px;color:var(--color-text-muted);">' + q.category + '</span>' +
          '</div></td>' +
          '<td style="font-weight:500;">' + (sup ? sup.name : "—") + '</td>' +
          '<td>' + priorityBadge(q.priority) + '</td>' +
          '<td style="font-size:13px;font-weight:500;">' + q.dueDate + '</td>' +
          '<td>' + statusBadge(q.status) + '</td>' +
          '<td><button class="action-link btn-track" data-qid="' + q.id + '">' +
            '<span>Track</span>' + ICONS.arrowRight + '</button></td></tr>';
      }).join("");

  content.innerHTML =
    '<div class="view-header">' +
      '<div class="header-title-area">' +
        '<h2>Queries</h2>' +
        '<p class="header-subtitle">Track and resolve all supplier food-safety queries.</p>' +
      '</div>' +
      '<button class="btn btn-primary" id="btn-raise-q">' + ICONS.plus + '<span>Raise New Query</span></button>' +
    '</div>' +

    '<section class="card-container">' +
      '<div class="filter-bar">' +
        '<div class="filter-left">' +
          '<div class="search-wrapper">' + ICONS.search +
            '<input type="text" id="q-search" placeholder="Search by ID, supplier, title..." value="' + state.querySearch + '">' +
          '</div>' +
          '<div class="filter-group"><span class="filter-label">Status:</span>' +
            '<select id="flt-qstat" class="select-input">' +
              opt("all","All Statuses",state.queryStatus) +
              opt("Pending","Pending",state.queryStatus) +
              opt("In Progress","In Progress",state.queryStatus) +
              opt("Resolved","Resolved",state.queryStatus) +
            '</select></div>' +
          '<div class="filter-group"><span class="filter-label">Priority:</span>' +
            '<select id="flt-qpri" class="select-input">' +
              opt("all","All Priorities",state.queryPriority) +
              opt("Low","Low",state.queryPriority) +
              opt("Medium","Medium",state.queryPriority) +
              opt("High","High",state.queryPriority) +
              opt("Critical","Critical",state.queryPriority) +
            '</select></div>' +
        '</div>' +
      '</div>' +

      '<div class="table-responsive">' +
        '<table class="data-table">' +
          '<thead><tr>' +
            '<th style="width:15%">Query ID</th>' +
            '<th style="width:28%">Details</th>' +
            '<th style="width:18%">Supplier</th>' +
            '<th style="width:10%">Priority</th>' +
            '<th style="width:12%">Due Date</th>' +
            '<th style="width:10%">Status</th>' +
            '<th style="width:7%">Action</th>' +
          '</tr></thead>' +
          '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>' +
    '</section>';

  on("btn-raise-q", "click", function(){ go("raise-query"); });
  on("q-search",  "input",  function(e){ state.querySearch   = e.target.value; renderQueries(); });
  on("flt-qstat", "change", function(e){ state.queryStatus   = e.target.value; renderQueries(); });
  on("flt-qpri",  "change", function(e){ state.queryPriority = e.target.value; renderQueries(); });

  document.querySelectorAll(".btn-track").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      go("query-details", { queryId: btn.getAttribute("data-qid") });
    });
  });
  document.querySelectorAll(".data-table tbody tr[data-qid]").forEach(function(row) {
    row.addEventListener("click", function() {
      go("query-details", { queryId: row.getAttribute("data-qid") });
    });
  });
}

// ── SCREEN 3: RAISE QUERY FORM ────────────────────────────────────────────────
function renderForm() {
  bcParent.textContent  = "Queries";
  bcCurrent.textContent = "Raise New Query";

  var supOpts = '<option value="" disabled selected>Select a Supplier</option>' +
    db.suppliers.map(function(s){ return '<option value="' + s.id + '">' + s.name + '</option>'; }).join("");

  content.innerHTML =
    '<div class="view-header" style="max-width:800px;margin:0 auto;">' +
      '<div class="header-title-area">' +
        '<h2>Raise New Query</h2>' +
        '<p class="header-subtitle">Send a food-safety concern or audit request to a supplier.</p>' +
      '</div>' +
    '</div>' +

    '<div class="form-card">' +
      '<div class="form-body">' +

        // Section 1
        '<div class="form-section">' +
          '<h3 class="form-section-title">' + ICONS.building + '<span>Supplier Linkage</span></h3>' +
          '<div class="form-grid">' +
            '<div class="form-group" id="grp-sup">' +
              '<label class="form-label" for="f-sup">Select Supplier <span class="required">*</span></label>' +
              '<select id="f-sup" class="form-control">' + supOpts + '</select>' +
              '<div class="error-message" id="err-sup"></div>' +
            '</div>' +
            '<div id="contact-preview"></div>' +
          '</div>' +
        '</div>' +

        // Section 2
        '<div class="form-section">' +
          '<h3 class="form-section-title">' + ICONS.helpCircle + '<span>Query Information</span></h3>' +
          '<div class="form-grid">' +
            '<div class="form-group" id="grp-cat">' +
              '<label class="form-label" for="f-cat">Category <span class="required">*</span></label>' +
              '<select id="f-cat" class="form-control">' +
                '<option value="" disabled selected>Select Category</option>' +
                '<option>Allergen Information</option>' +
                '<option>Certificate / Documentation</option>' +
                '<option>Ingredient Safety</option>' +
                '<option>Compliance</option>' +
                '<option>Product Quality</option>' +
                '<option>Other</option>' +
              '</select>' +
              '<div class="error-message" id="err-cat"></div>' +
            '</div>' +
            '<div class="form-group" id="grp-pri">' +
              '<label class="form-label" for="f-pri">Priority Level <span class="required">*</span></label>' +
              '<select id="f-pri" class="form-control">' +
                '<option value="" disabled selected>Select Priority</option>' +
                '<option value="Low">Low — General compliance request</option>' +
                '<option value="Medium">Medium — Quality check alert</option>' +
                '<option value="High">High — Certificate expiry risk</option>' +
                '<option value="Critical">Critical — Contamination risk</option>' +
              '</select>' +
              '<div class="error-message" id="err-pri"></div>' +
            '</div>' +
            '<div class="form-group" id="grp-ttl">' +
              '<label class="form-label" for="f-ttl">Query Title <span class="required">*</span></label>' +
              '<input type="text" id="f-ttl" class="form-control" placeholder="e.g. Allergen Statement Validation">' +
              '<div class="error-message" id="err-ttl"></div>' +
            '</div>' +
            '<div class="form-group" id="grp-due">' +
              '<label class="form-label" for="f-due">Response Due Date <span class="required">*</span></label>' +
              '<input type="date" id="f-due" class="form-control" min="' + new Date().toISOString().split("T")[0] + '">' +
              '<div class="error-message" id="err-due"></div>' +
            '</div>' +
            '<div class="form-group full-width" id="grp-desc">' +
              '<label class="form-label" for="f-desc">Question / Description <span class="required">*</span></label>' +
              '<textarea id="f-desc" class="form-control" rows="4" placeholder="Please provide the latest allergen declaration for the supplied ingredient and confirm whether the formulation has changed."></textarea>' +
              '<div class="error-message" id="err-desc"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        // Section 3
        '<div class="form-section">' +
          '<h3 class="form-section-title">' + ICONS.paperclip + '<span>Supporting Materials</span></h3>' +
          '<div class="dropzone" id="dropzone">' +
            '<div class="dropzone-icon">' + ICONS.upload + '</div>' +
            '<span class="dropzone-text">Click or drag files here to attach</span>' +
            '<span class="dropzone-hint">PDF, DOCX, PNG, JPG — up to 10 MB each</span>' +
            '<input type="file" id="file-input" style="display:none;" multiple>' +
          '</div>' +
          '<div id="file-list" style="display:flex;flex-direction:column;gap:6px;margin-top:8px;"></div>' +
        '</div>' +

      '</div>' +
      '<div class="form-actions">' +
        '<button class="btn btn-secondary" id="btn-cancel">Cancel</button>' +
        '<button class="btn btn-ghost"    id="btn-draft">Save as Draft</button>' +
        '<button class="btn btn-primary"  id="btn-submit">' + ICONS.send + '<span>Submit Query</span></button>' +
      '</div>' +
    '</div>';

  // Supplier change → show contact
  on("f-sup", "change", function() {
    var sid = parseInt(document.getElementById("f-sup").value);
    var sup = db.suppliers.find(function(s){ return s.id === sid; });
    var preview = document.getElementById("contact-preview");
    if (sup) {
      preview.innerHTML =
        '<div class="supplier-contact-preview">' +
          '<div class="contact-preview-avatar">' + ICONS.mail + '</div>' +
          '<div class="contact-preview-info">' +
            '<span class="contact-preview-title">Assigned Contact</span>' +
            '<span class="contact-preview-name">' + sup.contactName + '</span>' +
            '<span style="font-size:12px;color:var(--color-text-muted);">' + sup.contactEmail + '</span>' +
          '</div>' +
        '</div>';
    } else {
      preview.innerHTML = "";
    }
  });

  // File upload
  on("dropzone", "click", function() { document.getElementById("file-input").click(); });
  on("file-input", "change", function(e) { addFiles(e.target.files); });
  var dz = document.getElementById("dropzone");
  dz.addEventListener("dragover", function(e){ e.preventDefault(); dz.classList.add("dragover"); });
  dz.addEventListener("dragleave", function(){ dz.classList.remove("dragover"); });
  dz.addEventListener("drop", function(e){ e.preventDefault(); dz.classList.remove("dragover"); addFiles(e.dataTransfer.files); });

  function addFiles(files) {
    for (var i = 0; i < files.length; i++) state.uploadedFiles.push(files[i].name);
    renderFileList();
  }

  function renderFileList() {
    var fl = document.getElementById("file-list");
    if (!fl) return;
    fl.innerHTML = state.uploadedFiles.map(function(name, idx) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;background:var(--color-border-light);padding:8px 12px;border-radius:var(--radius-sm);border:1px solid var(--color-border);">' +
        '<div style="display:flex;align-items:center;gap:8px;">' + ICONS.file + '<span style="font-size:13px;font-weight:500;">' + name + '</span></div>' +
        '<button class="btn-remove" data-idx="' + idx + '" style="background:none;border:none;cursor:pointer;color:#ef4444;">' + ICONS.trash + '</button>' +
      '</div>';
    }).join("");
    document.querySelectorAll(".btn-remove").forEach(function(btn) {
      btn.addEventListener("click", function() {
        state.uploadedFiles.splice(parseInt(btn.getAttribute("data-idx")), 1);
        renderFileList();
      });
    });
  }

  // Cancel / Draft
  on("btn-cancel", "click", function(){ go("suppliers"); });
  on("btn-draft",  "click", function(){ showToast("Query saved to Drafts."); go("queries"); });

  // Submit with validation
  on("btn-submit", "click", function() {
    var supVal  = document.getElementById("f-sup").value;
    var catVal  = document.getElementById("f-cat").value;
    var priVal  = document.getElementById("f-pri").value;
    var ttlVal  = document.getElementById("f-ttl").value.trim();
    var dueVal  = document.getElementById("f-due").value;
    var descVal = document.getElementById("f-desc").value.trim();

    var valid = true;
    function setErr(grpId, errId, msg) {
      document.getElementById(grpId).classList.toggle("has-error", !!msg);
      document.getElementById(errId).textContent = msg || "";
      if (msg) valid = false;
    }

    setErr("grp-sup", "err-sup", supVal  ? "" : "Please select a supplier.");
    setErr("grp-cat", "err-cat", catVal  ? "" : "Please select a category.");
    setErr("grp-pri", "err-pri", priVal  ? "" : "Please select a priority level.");
    setErr("grp-ttl", "err-ttl", ttlVal  ? "" : "Please enter a query title.");
    setErr("grp-due", "err-due", dueVal  ? "" : "Please select a due date.");
    setErr("grp-desc","err-desc",descVal ? "" : "Please describe the question.");

    if (!valid) { showToast("Please fix the errors above."); return; }

    var year  = new Date().getFullYear();
    var seq   = String(db.queries.length + 140).padStart(4, "0");
    var newId = "QRY-" + year + "-" + seq;
    var sup   = db.suppliers.find(function(s){ return s.id === parseInt(supVal); });
    var now   = nowDateStr() + ", " + nowTimeStr();

    var q = {
      id: newId, supplierId: parseInt(supVal), title: ttlVal,
      category: catVal, priority: priVal, dueDate: dueVal,
      status: "Pending", dateCreated: nowDateStr(), createdTime: nowTimeStr(),
      assignedQA: "Pranav Reddy", description: descVal,
      timeline: [
        { title: "Query Created",      date: now,                  done: true,  current: false },
        { title: "Sent to Supplier",   date: now,                  done: true,  current: true  },
        { title: "Supplier Responded", date: "Awaiting response",  done: false, current: false },
        { title: "QA Review",          date: "Awaiting response",  done: false, current: false },
        { title: "Resolved",           date: "Pending actions",    done: false, current: false }
      ],
      supplierResponse: null, responseDate: null,
      attachments: state.uploadedFiles.slice()
    };
    db.queries.push(q);
    if (sup) { sup.openQueries += 1; sup.lastQueryDate = q.dateCreated; }

    renderSuccess(q, sup);
  });
}

// ── SCREEN 3B: SUCCESS ────────────────────────────────────────────────────────
function renderSuccess(q, sup) {
  content.innerHTML =
    '<div class="success-card">' +
      '<div class="success-icon-badge">' + ICONS.checkBig + '</div>' +
      '<h3 class="success-title">Query Submitted Successfully</h3>' +
      '<p class="success-message">Your query has been sent to <strong>' + (sup ? sup.name : "the supplier") + '</strong>. They will receive an automated notification.</p>' +
      '<div class="success-details-box">' +
        '<div class="success-detail-item"><span class="success-detail-label">Query ID</span><span class="success-detail-value" style="color:var(--color-primary);font-weight:700;">' + q.id + '</span></div>' +
        '<div class="success-detail-item"><span class="success-detail-label">Priority</span><span class="success-detail-value">' + q.priority + '</span></div>' +
        '<div class="success-detail-item"><span class="success-detail-label">Due Date</span><span class="success-detail-value">' + q.dueDate + '</span></div>' +
        '<div class="success-detail-item"><span class="success-detail-label">Contact</span><span class="success-detail-value">' + (sup ? sup.contactName : "—") + '</span></div>' +
      '</div>' +
      '<div class="success-actions">' +
        '<button class="btn btn-secondary" id="btn-suc-back">Back to Suppliers</button>' +
        '<button class="btn btn-primary"   id="btn-suc-track">' + ICONS.eye + '<span>Track Status</span></button>' +
      '</div>' +
    '</div>';

  on("btn-suc-back",  "click", function(){ go("suppliers"); });
  on("btn-suc-track", "click", function(){ go("query-details", { queryId: q.id }); });
}

// ── SCREEN 4: QUERY DETAILS ───────────────────────────────────────────────────
function renderDetails() {
  var q = db.queries.find(function(x){ return x.id === state.queryId; });
  if (!q) {
    content.innerHTML = '<div class="table-empty-state" style="padding:80px 0;"><h3>Query not found</h3>' +
      '<button class="btn btn-primary" id="btn-notfound">Return to Queries</button></div>';
    on("btn-notfound", "click", function(){ go("queries"); });
    return;
  }

  var sup = db.suppliers.find(function(s){ return s.id === q.supplierId; });
  bcParent.textContent  = "Queries";
  bcCurrent.textContent = q.id;

  var timelineHTML = q.timeline.map(function(step) {
    var cls = step.done ? "completed" : "";
    if (step.current) cls = "current";
    return '<div class="timeline-item ' + cls + '">' +
      '<div class="timeline-node">' + ICONS.check + '</div>' +
      '<span class="timeline-title">' + step.title + '</span>' +
      '<span class="timeline-date">'  + step.date  + '</span>' +
    '</div>';
  }).join("");

  var attachHTML = q.attachments && q.attachments.length
    ? '<div class="attachment-list">' + q.attachments.map(function(doc) {
        return '<a href="#" class="attachment-item" onclick="event.preventDefault();showToast(\'Downloading ' + doc + '...\');">' +
          ICONS.fileText + '<span class="attachment-name">' + doc + '</span></a>';
      }).join("") + '</div>'
    : '<p style="font-size:13px;color:var(--color-text-muted);">No files attached.</p>';

  var responseHTML = q.supplierResponse
    ? '<div class="response-card">' +
        '<div class="response-header">' +
          '<div class="responder-info">' +
            '<div class="responder-avatar">' + (sup ? sup.name[0] : "S") + '</div>' +
            '<span class="responder-name">' + (sup ? sup.name : "Supplier") + '</span>' +
          '</div>' +
          '<span class="response-date">' + q.responseDate + '</span>' +
        '</div>' +
        '<p class="response-text">' + q.supplierResponse + '</p>' +
      '</div>'
    : '<div style="background:var(--color-bg);padding:var(--space-lg);border-radius:var(--radius-md);border:1px dashed var(--color-border);text-align:center;color:var(--color-text-muted);">' +
        '<p style="font-size:13px;">Awaiting supplier response. A reminder has been sent.</p>' +
      '</div>';

  var resolveBtn = q.status !== "Resolved"
    ? '<button class="btn btn-primary" id="btn-resolve">' + ICONS.checkCircle + '<span>Mark as Resolved</span></button>'
    : "";

  content.innerHTML =
    '<div class="view-header">' +
      '<div class="header-title-area">' +
        '<h2 style="font-size:20px;">' + q.title + '</h2>' +
        '<div class="query-meta-header">' +
          '<span class="query-id-tag">' + q.id + '</span>' +
          statusBadge(q.status) +
          priorityBadge(q.priority) +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;">' +
        '<button class="btn btn-secondary" id="btn-back">' + ICONS.chevronLeft + '<span>Back</span></button>' +
        resolveBtn +
      '</div>' +
    '</div>' +

    '<div class="query-layout">' +

      // Left column
      '<div class="query-main-column">' +
        '<article class="query-content-card">' +
          '<div class="query-card-header">' +
            '<span class="query-card-title">' + ICONS.helpCircle + '<span>Question Description</span></span>' +
            '<span style="font-size:12px;color:var(--color-text-muted);">Created: ' + q.dateCreated + ' at ' + q.createdTime + '</span>' +
          '</div>' +
          '<div class="query-card-body">' +
            '<p class="question-text">' + q.description + '</p>' +
            '<div style="margin-top:12px;">' +
              '<span style="font-size:12px;font-weight:600;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:.05em;">Attached Documents</span>' +
              '<div style="margin-top:8px;">' + attachHTML + '</div>' +
            '</div>' +
          '</div>' +
        '</article>' +
        '<article class="query-content-card">' +
          '<div class="query-card-header">' +
            '<span class="query-card-title">' + ICONS.msgSquare + '<span>Supplier Response</span></span>' +
          '</div>' +
          '<div class="query-card-body">' + responseHTML + '</div>' +
        '</article>' +
      '</div>' +

      // Right column
      '<div class="query-sidebar-column">' +
        '<section class="sidebar-card">' +
          '<div class="sidebar-card-header">' + ICONS.clock + '<span>Resolution Timeline</span></div>' +
          '<div class="sidebar-card-body"><div class="timeline">' + timelineHTML + '</div></div>' +
        '</section>' +
        '<section class="sidebar-card">' +
          '<div class="sidebar-card-header">' + ICONS.info + '<span>Audit Metadata</span></div>' +
          '<div class="sidebar-card-body">' +
            '<div class="detail-list">' +
              detailRow("Supplier",    sup ? sup.name : "—") +
              detailRow("Category",   q.category) +
              detailRow("Due Date",   q.dueDate) +
              detailRow("Assigned QA",q.assignedQA) +
            '</div>' +
          '</div>' +
        '</section>' +
      '</div>' +

    '</div>';

  on("btn-back", "click", function(){ go("queries"); });

  on("btn-resolve", "click", function() {
    q.status = "Resolved";
    if (sup && sup.openQueries > 0) sup.openQueries -= 1;
    var ts = nowDateStr() + ", " + nowTimeStr();
    q.timeline.forEach(function(step) {
      step.current = false;
      if (step.title === "QA Review") { step.done = true; }
      if (step.title === "Resolved")  { step.done = true; step.current = true; step.date = ts; }
    });
    showToast(q.id + " marked as Resolved.");
    renderDetails();
  });
}

function detailRow(label, val) {
  return '<div class="detail-row"><span class="detail-label">' + label + '</span><span class="detail-value">' + val + '</span></div>';
}

// ── SCREEN 5: DASHBOARD ───────────────────────────────────────────────────────
function renderDashboard() {
  bcParent.textContent  = "SafeSupply";
  bcCurrent.textContent = "Dashboard";

  var total   = db.queries.length;
  var pending = db.queries.filter(function(q){ return q.status === "Pending"; }).length;
  var inprog  = db.queries.filter(function(q){ return q.status === "In Progress"; }).length;
  var resolved= db.queries.filter(function(q){ return q.status === "Resolved"; }).length;

  var actionItems = db.queries.filter(function(q){ return q.status !== "Resolved"; }).slice(0, 3)
    .map(function(q) {
      var sup = db.suppliers.find(function(s){ return s.id === q.supplierId; });
      return '<div class="supplier-contact-preview" data-qid="' + q.id + '" style="cursor:pointer;">' +
        '<div class="contact-preview-avatar" style="background:var(--color-primary-light);color:var(--color-primary);border-radius:var(--radius-md);">' + ICONS.alertCircle + '</div>' +
        '<div style="display:flex;flex-direction:column;flex-grow:1;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;">' +
            '<span style="font-weight:600;font-size:13.5px;">' + q.title + '</span>' +
            '<span class="query-id-tag">' + q.id + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">' +
            '<span style="font-size:12px;color:var(--color-text-muted);">' + (sup ? sup.name : "—") + ' · Due ' + q.dueDate + '</span>' +
            priorityBadge(q.priority) +
          '</div>' +
        '</div>' +
      '</div>';
    }).join("");

  content.innerHTML =
    '<section class="summary-grid">' +
      metricCard("teal",  ICONS.files,       "Total Queries",    total) +
      metricCard("amber", ICONS.clock,       "Awaiting Supplier",pending) +
      metricCard("blue",  ICONS.activity,    "Under QA Review",  inprog) +
      metricCard("green", ICONS.checkCircle, "Resolved",         resolved) +
    '</section>' +

    '<div style="display:grid;grid-template-columns:2fr 1fr;gap:24px;">' +
      '<section class="card-container">' +
        '<div class="filter-bar" style="border-bottom:1px solid var(--color-border-light);">' +
          '<span style="font-size:15px;font-weight:600;">Action Required</span>' +
          '<button class="action-link" id="dash-view-all">View All ' + ICONS.arrowRight + '</button>' +
        '</div>' +
        '<div style="padding:16px;display:flex;flex-direction:column;gap:8px;">' +
          (actionItems || '<p style="padding:16px;color:var(--color-text-muted);font-size:13px;text-align:center;">All queries are resolved. Great work! 🎉</p>') +
        '</div>' +
      '</section>' +
      '<section class="sidebar-card">' +
        '<div class="sidebar-card-header">' + ICONS.zap + '<span>Quick Actions</span></div>' +
        '<div class="sidebar-card-body" style="display:flex;flex-direction:column;gap:8px;">' +
          '<button class="btn btn-primary" id="dash-raise" style="width:100%;">' + ICONS.plus + '<span>Raise New Query</span></button>' +
          '<button class="btn btn-secondary" id="dash-sups" style="width:100%;">' + ICONS.users + '<span>View Suppliers</span></button>' +
        '</div>' +
      '</section>' +
    '</div>';

  on("dash-view-all", "click", function(){ go("queries"); });
  on("dash-raise",    "click", function(){ go("raise-query"); });
  on("dash-sups",     "click", function(){ go("suppliers"); });

  document.querySelectorAll("[data-qid]").forEach(function(el) {
    el.addEventListener("click", function() {
      go("query-details", { queryId: el.getAttribute("data-qid") });
    });
  });
}

// ── SCREEN 6: REPORTS ────────────────────────────────────────────────────────
function renderReports() {
  bcParent.textContent  = "SafeSupply";
  bcCurrent.textContent = "Reports";
  content.innerHTML =
    '<div class="view-header">' +
      '<div class="header-title-area"><h2>Reports</h2><p class="header-subtitle">Generate compliance and query analytics reports.</p></div>' +
    '</div>' +
    '<div class="card-container" style="padding:64px;text-align:center;color:var(--color-text-muted);">' +
      '<div style="font-size:48px;margin-bottom:16px;">📊</div>' +
      '<h3 style="color:var(--color-text);margin-bottom:8px;">Compliance Analytics</h3>' +
      '<p style="max-width:380px;margin:0 auto 24px;font-size:13px;">Export query response time data, supplier compliance scores, and monthly audit history.</p>' +
      '<div style="display:flex;justify-content:center;gap:12px;">' +
        '<button class="btn btn-secondary" id="rpt-csv">' + ICONS.download + '<span>Export CSV</span></button>' +
        '<button class="btn btn-primary"   id="rpt-pdf">' + ICONS.fileText + '<span>Generate PDF</span></button>' +
      '</div>' +
    '</div>';
  on("rpt-csv", "click", function(){ showToast("Exporting data as CSV..."); });
  on("rpt-pdf", "click", function(){ showToast("Generating PDF report..."); });
}

// ── SCREEN 7: SETTINGS ───────────────────────────────────────────────────────
function renderSettings() {
  bcParent.textContent  = "SafeSupply";
  bcCurrent.textContent = "Settings";
  content.innerHTML =
    '<div class="view-header">' +
      '<div class="header-title-area"><h2>Settings</h2><p class="header-subtitle">Configure application behaviour and integrations.</p></div>' +
    '</div>' +
    '<div class="form-card">' +
      '<div class="form-body">' +
        '<div style="display:flex;flex-direction:column;gap:16px;">' +
          settingRow("Auto-reminder Notifications","Remind suppliers 3 days before certificate expirations.", true) +
          settingRow("Slack Webhook Alerts","Push Critical-priority queries to #qa-alerts channel.", false) +
        '</div>' +
      '</div>' +
    '</div>';
}

function settingRow(title, desc, checked) {
  return '<div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--color-border-light);">' +
    '<div><span style="font-weight:600;display:block;font-size:13.5px;">' + title + '</span>' +
    '<span style="font-size:12px;color:var(--color-text-muted);">' + desc + '</span></div>' +
    '<input type="checkbox"' + (checked ? ' checked' : '') + ' style="width:16px;height:16px;cursor:pointer;accent-color:var(--color-primary);">' +
  '</div>';
}

// ── BOOT ──────────────────────────────────────────────────────────────────────
// Wire sidebar nav buttons
document.querySelectorAll(".nav-item").forEach(function(btn) {
  btn.addEventListener("click", function() {
    go(btn.getAttribute("data-view"));
  });
});

// Mobile hamburger
menuToggle.addEventListener("click", function() {
  sidebar.classList.toggle("open");
});
document.addEventListener("click", function(e) {
  if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});

// Global search bar
document.getElementById("global-search").addEventListener("input", function(e) {
  var val = e.target.value;
  if (state.view === "suppliers") {
    state.supplierSearch = val;
    renderSuppliers();
  } else {
    state.querySearch = val;
    if (state.view !== "queries") go("queries");
    else renderQueries();
  }
});

// Initial render
go("suppliers");
