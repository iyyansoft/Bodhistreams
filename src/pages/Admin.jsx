import React, { useState, useEffect } from 'react';
import { Search, Eye, Edit2, Trash2, Mail, Download, Printer, Plus, TrendingUp, DollarSign, FileText, CheckCircle, Clock, AlertTriangle, ArrowUpDown, ChevronLeft, ChevronRight, X, Building2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageWrapper from '../components/PageWrapper';
import './Admin.css';

export default function Admin() {
  const [invoices, setInvoices] = useState([]);
  const [activities, setActivities] = useState([]);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [sortField, setSortField] = useState('invoiceNumber');
  const [sortDirection, setSortDirection] = useState('desc');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Selected Invoice Modal States
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState(null);
  
  // Custom alert/toast modal state
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success', message: '' });

  // Additional fully functional popup states
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isActivityLogModalOpen, setIsActivityLogModalOpen] = useState(false);
  const [deletedInvoices, setDeletedInvoices] = useState([]);
  const [sidebarFilter, setSidebarFilter] = useState('All'); // 'All' | 'Bills' | 'Estimates'

  // Initialize clean database state for a fresh installation
  useEffect(() => {
    // Perform a one-time clean slate wipe of prefilled mock data
    const hasResetToCleanSlate = localStorage.getItem('clean_slate_reset_v2');
    if (!hasResetToCleanSlate) {
      localStorage.removeItem('invoices');
      localStorage.removeItem('has_initialized_invoices');
      localStorage.removeItem('invoice_activities');
      localStorage.removeItem('invoice_seq_2026');
      localStorage.removeItem('invoice_seq_2027');
      localStorage.removeItem('invoice_seq_2028');
      localStorage.setItem('clean_slate_reset_v2', 'true');
    }

    const storedInvoices = localStorage.getItem('invoices');
    let loadedInvoices = storedInvoices ? JSON.parse(storedInvoices) : [];
    setInvoices(loadedInvoices);

    const storedActivities = localStorage.getItem('invoice_activities');
    let loadedActivities = storedActivities ? JSON.parse(storedActivities) : [];
    setActivities(loadedActivities);

    const storedDeleted = localStorage.getItem('deleted_invoices');
    setDeletedInvoices(storedDeleted ? JSON.parse(storedDeleted) : []);
  }, []);

  // Search, Filter and Sort
  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inv.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesStatus = true;
    if (sidebarFilter === 'Bills') {
      matchesStatus = (inv.paymentStatus || '').toLowerCase() === 'pending';
    } else if (sidebarFilter === 'Estimates') {
      matchesStatus = (inv.paymentStatus || '').toLowerCase() === 'draft';
    }
    const matchesYear = yearFilter === 'All' || inv.date.startsWith(yearFilter);
    return matchesSearch && matchesStatus && matchesYear;
  });

  // Summary Metrics calculations based on filtered invoices
  const totalInvoicesCount = filteredInvoices.length;
  const totalRevenue = filteredInvoices
    .filter(inv => (inv.paymentStatus || '').toLowerCase() === 'paid')
    .reduce((sum, inv) => sum + parseFloat(inv.totalAmount || 0), 0);
  const paidCount = filteredInvoices.filter(inv => (inv.paymentStatus || '').toLowerCase() === 'paid').length;
  const pendingCount = filteredInvoices.filter(inv => (inv.paymentStatus || '').toLowerCase() === 'pending').length;
  const draftCount = filteredInvoices.filter(inv => (inv.paymentStatus || '').toLowerCase() === 'draft').length;

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'date') {
      comparison = new Date(a.date) - new Date(b.date);
      if (comparison === 0) {
        comparison = a.invoiceNumber.localeCompare(b.invoiceNumber);
      }
    } else if (sortField === 'amount') {
      comparison = parseFloat(a.totalAmount || 0) - parseFloat(b.totalAmount || 0);
      if (comparison === 0) {
        comparison = a.invoiceNumber.localeCompare(b.invoiceNumber);
      }
    } else if (sortField === 'invoiceNumber') {
      comparison = a.invoiceNumber.localeCompare(b.invoiceNumber);
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Pagination bounds
  const totalPages = Math.ceil(sortedInvoices.length / itemsPerPage);
  const paginatedInvoices = sortedInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Actions
  const handleViewInvoice = (inv) => {
    setSelectedInvoice(inv);
    setIsViewModalOpen(true);
  };

  const handleEditInvoice = (inv) => {
    setSelectedInvoice(inv);
    setEditForm({ ...inv });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedInvoices = invoices.map(inv => inv.id === editForm.id ? editForm : inv);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    setInvoices(updatedInvoices);
    setIsEditModalOpen(false);

    // Activity Log
    logActivity('edit', `Invoice ${editForm.invoiceNumber} was updated by Admin.`);
    showToast('success', 'Invoice updated successfully.');
  };

  const handleDeleteInvoice = (id, num) => {
    if (window.confirm("Are you sure you want to move this invoice to trash? You can restore it later from the Trash menu.")) {
      const invoiceToMove = invoices.find(inv => inv.id === id);
      const updatedInvoices = invoices.filter(inv => inv.id !== id);
      const newDeleted = [invoiceToMove, ...deletedInvoices];
      
      localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
      localStorage.setItem('deleted_invoices', JSON.stringify(newDeleted));
      
      setInvoices(updatedInvoices);
      setDeletedInvoices(newDeleted);

      logActivity('delete', `Invoice ${num} was moved to trash.`);
      showToast('success', `Invoice ${num} moved to trash.`);
    }
  };

  const handleRestoreInvoice = (id, num) => {
    const invoiceToRestore = deletedInvoices.find(inv => inv.id === id);
    const updatedDeleted = deletedInvoices.filter(inv => inv.id !== id);
    const updatedInvoices = [invoiceToRestore, ...invoices];

    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    localStorage.setItem('deleted_invoices', JSON.stringify(updatedDeleted));
    
    setInvoices(updatedInvoices);
    setDeletedInvoices(updatedDeleted);

    logActivity('generate', `Invoice ${num} was restored from trash.`);
    showToast('success', `Invoice ${num} restored successfully.`);
  };

  const handlePermanentDeleteInvoice = (id, num) => {
    if (window.confirm("Are you sure you want to permanently delete this invoice? This action cannot be undone.")) {
      const updatedDeleted = deletedInvoices.filter(inv => inv.id !== id);
      localStorage.setItem('deleted_invoices', JSON.stringify(updatedDeleted));
      setDeletedInvoices(updatedDeleted);

      logActivity('delete', `Invoice ${num} was permanently deleted from database.`);
      showToast('success', `Invoice ${num} permanently deleted.`);
    }
  };

  const logActivity = (type, message) => {
    const newAct = {
      id: Date.now(),
      type,
      message,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newAct, ...activities].slice(0, 15);
    localStorage.setItem('invoice_activities', JSON.stringify(updated));
    setActivities(updated);
  };

  const showToast = (type, message) => {
    setModalState({ isOpen: true, type, message });
  };

  const handleResendEmail = (inv) => {
    if (inv.isMailSent) {
      showToast('success', 'Mail Sent');
    } else {
      showToast('error', 'Mail Not Sent');
    }
  };

  const generatePremiumInvoiceHTML = (inv) => {
    return `
      <header class="invoice-hero">
        <div class="invoice-hero-left">
          <div class="company-logo-area">
            <div class="invoice-brand-logo-container" aria-label="BodhiStreams Logo"></div>
          </div>
          <div class="invoice-company-details">
            <p>Plot 30/2, 2nd St, Ramapuram</p>
            <p>Adambakkam, Chennai, Tamil Nadu - 600088</p>
            <p>Tel: +91 98845 95762</p>
            <p>Email: bodhistreamsltd@gmail.com</p>
            <p>GST No: 33AAOCB4388D1ZL</p>
          </div>
        </div>

        <div class="invoice-hero-right">
          <h1>INVOICE</h1>
          <div class="invoice-hero-details">
            <div class="hero-detail-row">
              <span class="hero-detail-label">Invoice No:</span>
              <strong class="hero-detail-value">${inv.invoiceNumber}</strong>
            </div>

            <div class="hero-detail-row">
              <span class="hero-detail-label">Invoice Date:</span>
              <span class="hero-detail-value">${inv.date}</span>
            </div>

            <div class="hero-detail-row">
              <span class="hero-detail-label">Due Date:</span>
              <span class="hero-detail-value">${inv.dueDate}</span>
            </div>
          </div>
        </div>
      </header>

      <div class="invoice-addresses-section">
        <div class="invoice-address-block">
          <h3>BILL TO :</h3>
          <div class="invoice-address-details">
            <strong>${inv.billingAddress?.name || ''}</strong>
            ${inv.billingAddress?.company ? `<p style="font-weight:bold; margin: 4px 0;">${inv.billingAddress.company}</p>` : ''}
            <p style="margin: 4px 0;">${inv.billingAddress?.address || ''}</p>
            <p style="margin: 4px 0;">${inv.billingAddress?.cityStateZip || inv.billingAddress?.city || ''}</p>
            <p style="margin: 4px 0;">Tel: ${inv.billingAddress?.phone || ''}</p>
            <p style="margin: 4px 0;">Email: ${inv.billingAddress?.email || ''}</p>
          </div>
        </div>
        <div class="invoice-address-block">
          <h3>SHIP TO :</h3>
          <div class="invoice-address-details">
            <strong>${inv.shippingAddress?.name || ''}</strong>
            ${inv.shippingAddress?.company ? `<p style="font-weight:bold; margin: 4px 0;">${inv.shippingAddress.company}</p>` : ''}
            <p style="margin: 4px 0;">${inv.shippingAddress?.address || ''}</p>
            <p style="margin: 4px 0;">${inv.shippingAddress?.cityStateZip || inv.shippingAddress?.city || ''}</p>
            <p style="margin: 4px 0;">Phone: ${inv.shippingAddress?.phone || ''}</p>
          </div>
        </div>
      </div>

      <div class="invoice-table-section">
        <div class="invoice-table-wrapper">
          <table class="invoice-items-table">
            <thead>
              <tr>
                <th class="col-no">No.</th>
                <th class="col-desc">Description</th>
                <th class="col-hsn">HSN/SAC</th>
                <th class="col-qty">Quantity</th>
                <th class="col-price">Unit Price (INR)</th>
                <th class="col-total">Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              ${inv.items.map((item, idx) => `
                <tr>
                  <td class="col-no">${idx + 1}</td>
                  <td class="col-desc">${item.description}</td>
                  <td class="col-hsn">${item.hsnSac || item.hsnCode || 'N/A'}</td>
                  <td class="col-qty">${item.quantity}</td>
                  <td class="col-price">₹${parseFloat(item.unitPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  <td class="col-total">₹${(item.quantity * item.unitPrice).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="invoice-totals-section">
        <div class="invoice-totals-left-bank">
          <div class="invoice-bottom-block">
            <h4>PAYMENT METHOD</h4>
            <div class="invoice-bank-details">
              <span>Account No:</span><strong>45114071945</strong>
              <span>Account Name:</span><strong>Bodhistreams convergence Pvt Ltd</strong>
              <span>Bank Name:</span><strong>State Bank of India</strong>
              <span>IFSC Code:</span><strong>SBIN0006463</strong>
            </div>
          </div>
        </div>
        <div class="invoice-totals-box">
          <div class="invoice-total-row">
            <span>Subtotal:</span>
            <strong>₹${parseFloat(inv.totalAmount / 1.18).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>
          </div>
          <div class="invoice-total-row">
            <span>Tax (18% GST):</span>
            <strong>₹${parseFloat(inv.totalAmount - (inv.totalAmount / 1.18)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>
          </div>
          <div class="invoice-total-row grand-total">
            <span>Total Due:</span>
            <strong>₹${parseFloat(inv.totalAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>
          </div>
        </div>
      </div>

      <div class="invoice-bottom-details">
        <div class="invoice-bottom-block terms-block">
          <h4>Terms & Conditions</h4>
          <ul class="terms-list" style="list-style-type: disc; padding-left: 20px;">
            <li class="terms-text-paragraph">Please pay within 30 days of the invoice date.</li>
            <li class="terms-text-paragraph">Late payments are subject to a 2% monthly fee interest charge.</li>
            <li class="terms-text-paragraph">Sourced components are subject to standard OEM warranties.</li>
          </ul>
        </div>
        <div class="invoice-bottom-block signature-block">
          <div class="signature-area" style="display: flex; flex-direction: column; align-items: center;">
            ${inv.signatureImage ? `
              <img src="${inv.signatureImage}" alt="Authorized Signature" class="uploaded-signature-img" style="max-height: 55px; max-width: 160px; object-fit: contain; margin-bottom: 4px;" />
            ` : `<div style="height: 48px;"></div>`}
            <div class="invoice-sig-line"></div>
            <div class="invoice-sig-subtitle">Authorized Signatory</div>
          </div>
        </div>
      </div>

      <div class="invoice-bottom-footer-bar">
        <span>📍 Chennai, Tamil Nadu, India</span>
        <span>📞 +91 98845 95762</span>
        <span>✉️ bodhistreamsltd@gmail.com</span>
        <span>🌐 www.bodhistreams.net</span>
      </div>
    `;
  };

  const handlePrintInvoice = (inv) => {
    // 1. Proactively clear any leftover temporary print nodes or styles in case afterprint didn't fire
    document.querySelectorAll('.temp-print-invoice-print').forEach(el => el.remove());
    document.querySelectorAll('#temp-print-styles').forEach(el => el.remove());

    // 2. Create temporary wrapper representing raw Invoice
    const tempDiv = document.createElement('div');
    tempDiv.className = 'invoice-wrapper temp-print-invoice-print';
    tempDiv.innerHTML = generatePremiumInvoiceHTML(inv);
    document.body.appendChild(tempDiv);

    // Create dynamic style element to isolate the print layout
    const style = document.createElement('style');
    style.id = 'temp-print-styles';
    style.innerHTML = `
      @media print {
        body > * {
          display: none !important;
        }
        #root, #root * {
          display: none !important;
        }
        body > .temp-print-invoice-print {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Trigger printing
    window.print();

    // Clean up temporary DOM nodes after print interaction
    window.addEventListener('afterprint', () => {
      if (tempDiv.parentNode) document.body.removeChild(tempDiv);
      if (style.parentNode) document.head.removeChild(style);
    }, { once: true });
  };

  const handleDownloadPDFDirectly = (inv) => {
    document.body.classList.add('html2pdf-mode');
    
    const tempDiv = document.createElement('div');
    tempDiv.className = 'invoice-wrapper temp-print-invoice';
    tempDiv.style.position = 'fixed';
    tempDiv.style.left = '0';
    tempDiv.style.top = '0';
    tempDiv.style.opacity = '0';
    tempDiv.style.zIndex = '-9999';
    tempDiv.style.background = '#ffffff';
    tempDiv.style.width = '800px';
    tempDiv.style.height = '1120px';
    tempDiv.style.boxSizing = 'border-box';
    
    tempDiv.innerHTML = generatePremiumInvoiceHTML(inv);
    document.body.appendChild(tempDiv);

    const opt = {
      margin:       0,
      filename:     `Invoice-${inv.invoiceNumber}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'px', format: [800, 1120], hotfixes: ['px_scaling'] }
    };

    if (window.html2pdf) {
      window.html2pdf()
        .from(tempDiv)
        .set(opt)
        .save()
        .then(() => {
          document.body.classList.remove('html2pdf-mode');
          if (tempDiv.parentNode) document.body.removeChild(tempDiv);
          showToast('success', 'PDF downloaded successfully.');
        })
        .catch((err) => {
          console.error(err);
          document.body.classList.remove('html2pdf-mode');
          if (tempDiv.parentNode) document.body.removeChild(tempDiv);
        });
    } else {
      document.body.classList.remove('html2pdf-mode');
      if (tempDiv.parentNode) document.body.removeChild(tempDiv);
      alert("PDF library is still loading.");
    }
  };

  // SVG Chart rendering data
  const chartData = [
    { label: 'Jul 26', count: 2, revenue: 1860.47 },
    { label: 'Jan 27', count: 1, revenue: 2450.00 },
    { label: 'Feb 27', count: 1, revenue: 90.00 },
    { label: 'Jun 28', count: 1, revenue: 1156.40 }
  ];

  return (
    <PageWrapper>
      <div className="invoicely-layout">
        {/* ================= LEFT SIDEBAR ================= */}
        <div className="invoicely-sidebar no-print">
          <div className="sidebar-profile" onClick={() => showToast('success', 'Workspace settings are active for BodhiStreams Convergence Pvt Ltd')}>
            <div className="profile-dropdown-trigger">
              <div className="profile-logo-wrapper" style={{ padding: '2px', background: '#ffffff', overflow: 'hidden' }}>
                <img src="/favicon.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="profile-name">BodhiStreams Convergence Pvt Ltd</span>
              <ChevronDown size={14} className="profile-arrow" />
            </div>
          </div>
          
          {/* Removed invoicely branding and upgrade buttons */}
          
          <nav className="sidebar-nav">
            <a 
              href="#" 
              className={`nav-item ${sidebarFilter === 'All' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setSidebarFilter('All'); }}
            >
              <span className="nav-icon">📊</span> Dashboard
            </a>
            <a href="/invoice" className="nav-item">
              <span className="nav-icon">📄</span> Invoices
            </a>
            <a 
              href="#" 
              className={`nav-item ${sidebarFilter === 'Bills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setSidebarFilter('Bills'); }}
            >
              <span className="nav-icon">💸</span> Bills
            </a>
            {/* Removed Estimates */}
            <a 
              href="#" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); setIsActivityLogModalOpen(true); }}
            >
              <span className="nav-icon">⏱️</span> Track
            </a>
            <a 
              href="#" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); setIsTrashModalOpen(true); }}
            >
              <span className="nav-icon">🗑️</span> Trash
            </a>
          </nav>
        </div>

        {/* ================= MAIN CONTENT AREA ================= */}
        <div className="invoicely-main">
          {/* Header */}
          <div className="invoicely-header no-print">
            <h1 className="main-title">Dashboard</h1>
            <div className="header-actions">
              <button type="button" className="btn-help" onClick={() => setIsHelpModalOpen(true)}>Help</button>
              <button 
                type="button" 
                className="btn-add-new" 
                onClick={() => window.location.href = '/invoice'}
              >
                Add New ▾
              </button>
            </div>
          </div>
          
          {/* Row 1: Recent Activity & At a Glance */}
          <div className="top-dashboard-grid no-print">
            <div className="dashboard-card recent-activity-card">
              <div className="card-header">
                <span>Recent Activity</span>
                <a href="#" className="header-link">View Activity Log</a>
              </div>
              <div className="card-body">
                <div className="activity-list-invoicely">
                  {activities.length > 0 ? (
                    activities.map(act => (
                      <div key={act.id} className="activity-row">
                        <strong>{act.time}</strong> — {act.message}
                      </div>
                    ))
                  ) : (
                    <div className="no-activity">No recent activities.</div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="dashboard-card glance-card">
              <div className="card-header">
                <span>At a Glance</span>
              </div>
              <div className="card-body">
                <div className="glance-row">
                  <span className="glance-label">Total Invoices generated:</span>
                  <strong className="glance-value">{totalInvoicesCount}</strong>
                </div>
                <div className="glance-row">
                  <span className="glance-label">System Status:</span>
                  <strong className="glance-value text-green">Online</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Invoice List Table Card */}
          <div className="dashboard-card table-card-invoicely">
            <div className="card-header no-print">
              <span>Invoices</span>
            </div>
            <div className="card-body">
              <div className="table-filters-bar no-print">
                <div className="search-wrapper">
                  <Search size={16} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search by invoice no, customer name..." 
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  />
                </div>

                <div className="filters-group">
                  <select value={yearFilter} onChange={(e) => { setYearFilter(e.target.value); setCurrentPage(1); }}>
                    <option value="All">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>

              <div className="table-responsive-wrapper">
                <table className="admin-invoices-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort('invoiceNumber')} style={{ cursor: 'pointer', width: '130px' }}>
                        Invoice No <ArrowUpDown size={12} className="sort-indicator" />
                      </th>
                      <th onClick={() => handleSort('date')} style={{ cursor: 'pointer', width: '100px' }}>
                        Date <ArrowUpDown size={12} className="sort-indicator" />
                      </th>
                      <th style={{ width: '140px' }}>Customer Name</th>
                      <th style={{ width: '140px' }}>Company Name</th>
                      <th style={{ width: '200px' }}>Email</th>
                      <th onClick={() => handleSort('amount')} style={{ cursor: 'pointer', textAlign: 'right', width: '110px' }}>
                        Total <ArrowUpDown size={12} className="sort-indicator" />
                      </th>
                      <th style={{ textAlign: 'center', width: '220px' }} className="no-print">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedInvoices.length > 0 ? (
                      paginatedInvoices.map(inv => (
                        <tr key={inv.id}>
                          <td>
                            <button type="button" className="link-inv-no" onClick={() => handleViewInvoice(inv)}>
                              {inv.invoiceNumber}
                            </button>
                          </td>
                          <td>{inv.date}</td>
                          <td>{inv.customerName}</td>
                          <td>{inv.companyName}</td>
                          <td>{inv.email}</td>
                          <td style={{ textAlign: 'right', fontWeight: '600' }}>
                            ₹{parseFloat(inv.totalAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                          <td className="actions-cell no-print">
                            <button type="button" className="action-circle-btn view" title="View Details" onClick={() => handleViewInvoice(inv)}>
                              <Eye size={14} />
                            </button>
                            <button type="button" className="action-circle-btn edit" title="Edit Invoices" onClick={() => handleEditInvoice(inv)}>
                              <Edit2 size={14} />
                            </button>
                            <button type="button" className="action-circle-btn email" title="Resend Invoice Email" onClick={() => handleResendEmail(inv)}>
                              <Mail size={14} />
                            </button>

                            <button type="button" className="action-circle-btn print" title="Print Invoice" onClick={() => handlePrintInvoice(inv)}>
                              <Printer size={14} />
                            </button>
                            <button type="button" className="action-circle-btn delete" title="Delete Invoice" onClick={() => handleDeleteInvoice(inv.id, inv.invoiceNumber)}>
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                          No invoices found matching criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* ================= PAGINATION ================= */}
              {totalPages > 1 && (
                <div className="admin-pagination no-print">
                  <span className="pagination-info">
                    Page {currentPage} of {totalPages} ({filteredInvoices.length} entries)
                  </span>
                  <div className="pagination-buttons">
                    <button 
                      type="button" 
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    >
                      <ChevronLeft size={16} /> Prev
                    </button>
                    <button 
                      type="button" 
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= VIEW DETAIL MODAL ================= */}
      {isViewModalOpen && selectedInvoice && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card">
            <div className="modal-header">
              <h2>Invoice Details: {selectedInvoice.invoiceNumber}</h2>
              <button type="button" className="close-x" onClick={() => setIsViewModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-scroll">
              <div className="view-grid-details">
                <div className="details-sec">
                  <h4>Bill To:</h4>
                  <strong>{selectedInvoice.billingAddress.company}</strong>
                  <p>{selectedInvoice.billingAddress.address}</p>
                  <p>{selectedInvoice.billingAddress.cityStateZip}</p>
                  <p>Tel: {selectedInvoice.billingAddress.phone}</p>
                  <p>Email: {selectedInvoice.billingAddress.email}</p>
                </div>
                <div className="details-sec">
                  <h4>Ship To:</h4>
                  <strong>{selectedInvoice.shippingAddress.name}</strong>
                  <p>{selectedInvoice.shippingAddress.address}</p>
                  <p>{selectedInvoice.shippingAddress.cityStateZip}</p>
                  <p>Phone: {selectedInvoice.shippingAddress.phone}</p>
                </div>
                <div className="details-sec">
                  <h4>Dates &amp; Totals:</h4>
                  <p><strong>Invoice Date:</strong> {selectedInvoice.date}</p>
                  <p><strong>Due Date:</strong> {selectedInvoice.dueDate}</p>
                  <p><strong>Grand Total:</strong> ₹{parseFloat(selectedInvoice.totalAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  <p><strong>Status:</strong> <span className={`status-badge ${selectedInvoice.paymentStatus.toLowerCase()}`}>{selectedInvoice.paymentStatus}</span></p>
                </div>
              </div>

              <div className="view-items-table-wrapper" style={{ marginTop: '20px' }}>
                <h4>Items Details</h4>
                <table className="view-items-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th style={{ textAlign: 'center' }}>HSN</th>
                      <th style={{ textAlign: 'right' }}>Qty</th>
                      <th style={{ textAlign: 'right' }}>Unit Price</th>
                      <th style={{ textAlign: 'right' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.items.map(item => (
                      <tr key={item.id}>
                        <td>{item.description}</td>
                        <td style={{ textAlign: 'center' }}>{item.hsnCode}</td>
                        <td style={{ textAlign: 'right' }}>{item.quantity}</td>
                        <td style={{ textAlign: 'right' }}>₹{parseFloat(item.unitPrice).toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }}>₹{(item.quantity * item.unitPrice).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="invoice-modal-btn" onClick={() => setIsViewModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {isEditModalOpen && editForm && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card">
            <form onSubmit={handleSaveEdit}>
              <div className="modal-header">
                <h2>Edit Invoice: {editForm.invoiceNumber}</h2>
                <button type="button" className="close-x" onClick={() => setIsEditModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body-scroll">
                <div className="edit-form-grid">
                  <div className="edit-block">
                    <h3>Billing Address</h3>
                    <input 
                      type="text" 
                      value={editForm.billingAddress.company}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        billingAddress: { ...editForm.billingAddress, company: e.target.value },
                        customerName: e.target.value
                      })}
                      placeholder="Company Name"
                      required
                    />
                    <input 
                      type="text" 
                      value={editForm.billingAddress.address}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        billingAddress: { ...editForm.billingAddress, address: e.target.value }
                      })}
                      placeholder="Street Address"
                      required
                    />
                    <input 
                      type="text" 
                      value={editForm.billingAddress.cityStateZip}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        billingAddress: { ...editForm.billingAddress, cityStateZip: e.target.value }
                      })}
                      placeholder="City, State, Zip"
                    />
                    <input 
                      type="email" 
                      value={editForm.billingAddress.email}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        billingAddress: { ...editForm.billingAddress, email: e.target.value },
                        email: e.target.value
                      })}
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="edit-block">
                    <h3>Invoice Parameters</h3>
                    <div className="form-row">
                      <label>Date:</label>
                      <input 
                        type="date" 
                        value={editForm.date}
                        onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                      />
                    </div>
                    <div className="form-row">
                      <label>Due Date:</label>
                      <input 
                        type="date" 
                        value={editForm.dueDate}
                        onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
                      />
                    </div>
                    <div className="form-row">
                      <label>Total Amount (₹):</label>
                      <input 
                        type="number" 
                        step="0.01"
                        value={editForm.totalAmount}
                        onChange={(e) => setEditForm({ ...editForm, totalAmount: parseFloat(e.target.value) || 0 })}
                      />
                    </div>
                    {/* Payment Status removed */}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="invoice-modal-btn cancel-btn" onClick={() => setIsEditModalOpen(false)} style={{ background: '#64748b' }}>
                  Cancel
                </button>
                <button type="submit" className="invoice-modal-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Modal Alerts */}
      {modalState.isOpen && (
        <div className="invoice-modal-overlay no-print">
          <div className="invoice-modal-card">
            <span className={`modal-icon ${modalState.type}`}>
              {modalState.type === 'success' ? '✅' : '❌'}
            </span>
            <h3>{modalState.type === 'success' ? 'Success' : 'Error'}</h3>
            <p>{modalState.message}</p>
            <button 
              type="button" 
              className={`invoice-modal-btn ${modalState.type === 'error' ? 'error-btn' : ''}`}
              onClick={() => setModalState({ isOpen: false, type: 'success', message: '' })}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ================= TRASH BIN MODAL ================= */}
      {isTrashModalOpen && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card" style={{ maxWidth: '750px' }}>
            <div className="modal-header">
              <h2>Trash Recycle Bin</h2>
              <button type="button" className="close-x" onClick={() => setIsTrashModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-scroll">
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>
                Soft-deleted invoices are held here. You can choose to restore them to the active list or permanently delete them.
              </p>
              <div className="table-responsive-wrapper">
                <table className="admin-invoices-table">
                  <thead>
                    <tr>
                      <th style={{ width: '130px' }}>Invoice No</th>
                      <th>Customer Name</th>
                      <th>Company Name</th>
                      <th style={{ textAlign: 'right', width: '120px' }}>Total Amount</th>
                      <th style={{ textAlign: 'center', width: '160px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deletedInvoices.length > 0 ? (
                      deletedInvoices.map(inv => (
                        <tr key={inv.id}>
                          <td>{inv.invoiceNumber}</td>
                          <td>{inv.customerName}</td>
                          <td>{inv.companyName}</td>
                          <td style={{ textAlign: 'right', fontWeight: '600' }}>
                            ₹{parseFloat(inv.totalAmount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                          <td style={{ textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <button 
                              type="button" 
                              className="invoice-modal-btn" 
                              style={{ padding: '4px 10px', fontSize: '11px', background: '#76be43' }}
                              onClick={() => handleRestoreInvoice(inv.id, inv.invoiceNumber)}
                            >
                              Restore
                            </button>
                            <button 
                              type="button" 
                              className="invoice-modal-btn" 
                              style={{ padding: '4px 10px', fontSize: '11px', background: '#ef4444' }}
                              onClick={() => handlePermanentDeleteInvoice(inv.id, inv.invoiceNumber)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>
                          Trash bin is empty.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="invoice-modal-btn" onClick={() => setIsTrashModalOpen(false)} style={{ background: '#abb2b7' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HELP DESK MODAL ================= */}
      {isHelpModalOpen && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card" style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h2>Help Center &amp; User Manual</h2>
              <button type="button" className="close-x" onClick={() => setIsHelpModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-scroll" style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#3c4354' }}>
              <h3 style={{ fontSize: '15px', color: '#2d3548', marginTop: '0', marginBottom: '10px' }}>💡 How to use the Invoicely Dashboard</h3>
              <ul style={{ paddingLeft: '20px', margin: '0 0 20px' }}>
                <li><strong>Generating Invoices:</strong> Click "Add New" in the top header or "Invoices" in the sidebar to open the Invoice Creator form.</li>
                <li><strong>Editing Invoices:</strong> Click the edit (pencil) icon on any invoice row to update customer address parameters or total values.</li>
                <li><strong>Soft Deletion:</strong> Clicking the delete (trash) icon moves the invoice into the "Trash Recycle Bin" instead of erasing it instantly.</li>
                <li><strong>Recycle Bin:</strong> Click "Trash" in the left navigation to open the trash drawer to restore or permanently erase records.</li>
                <li><strong>Track Audits:</strong> Click "Track" to inspect the chronological activity trail logs.</li>
                <li><strong>Print &amp; Download:</strong> Click the Print (printer) or PDF (download) icons inside the table to dispatch invoices.</li>
              </ul>
              <h3 style={{ fontSize: '15px', color: '#2d3548', marginBottom: '10px' }}>📧 Contact Support</h3>
              <p style={{ margin: '0' }}>For additional support, please contact the IT event desk at <a href="mailto:support@bodhistreams.net" style={{ color: '#ff5b26', textDecoration: 'underline' }}>support@bodhistreams.net</a>.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="invoice-modal-btn" onClick={() => setIsHelpModalOpen(false)}>
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= UPGRADE PREMIUM MODAL ================= */}
      {isUpgradeModalOpen && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card" style={{ maxWidth: '550px' }}>
            <div className="modal-header">
              <h2>Upgrade invoicely Subscription</h2>
              <button type="button" className="close-x" onClick={() => setIsUpgradeModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-scroll" style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
              <h3 style={{ fontSize: '18px', color: '#2d3548', marginTop: '0', marginBottom: '10px' }}>Unlock invoicely Enterprise Plan</h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 25px' }}>
                Get access to unlimited PDF designs, multi-currency templates, auto-billing templates, and team workflows.
              </p>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '4px', border: '1px solid #dcdfe1', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#2d3548', marginBottom: '4px' }}>₹1,499<span style={{ fontSize: '12px', fontWeight: '500', color: '#707787' }}> / month</span></div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#76be43', fontWeight: '750', letterSpacing: '0.5px' }}>Save 20% Billed Annually</div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="invoice-modal-btn" onClick={() => { setIsUpgradeModalOpen(false); showToast('success', 'Subscription upgraded successfully! Enjoy invoicely Enterprise.'); }} style={{ width: '100%' }}>
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TRACK AUDIT LOGS MODAL ================= */}
      {isActivityLogModalOpen && (
        <div className="modal-overlay no-print">
          <div className="modal-card view-invoice-card" style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h2>Activity Log Audit Trail</h2>
              <button type="button" className="close-x" onClick={() => setIsActivityLogModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-scroll">
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>
                Chronological list of all user activity events logged in this session:
              </p>
              <div className="activity-list-invoicely">
                {activities.length > 0 ? (
                  activities.map(act => (
                    <div key={act.id} className="activity-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{act.message}</span>
                      <strong style={{ fontSize: '11px', color: '#94a3b8' }}>{act.time}</strong>
                    </div>
                  ))
                ) : (
                  <div className="no-activity" style={{ textAlign: 'center', padding: '20px' }}>No session logs recorded.</div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="invoice-modal-btn" onClick={() => setIsActivityLogModalOpen(false)} style={{ background: '#abb2b7' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
