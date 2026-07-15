import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageWrapper from '../components/PageWrapper';
import './Invoice.css';

export default function Invoice() {
  // Editable Billing Address details state (Now dummy/sample address)
  const [billingAddress, setBillingAddress] = useState({
    name: "",
    company: "",
    address: "",
    state: "",
    city: "",
    phone: "",
    email: ""
  });

  // Checkbox state for copying Billing to Shipping
  const [sameAsBilling, setSameAsBilling] = useState(false);

  // Shipping Address input fields state (Empty by default)
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    company: '',
    address: '',
    state: '',
    city: '',
    phone: '',
    email: ''
  });

  // State for uploaded signature image
  const [signatureImage, setSignatureImage] = useState(null);

  // Checkbox state for sending email copy
  const [sendEmailCopy, setSendEmailCopy] = useState(false);

  // Custom modal state
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success', message: '' });

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSignatureImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Sync Shipping Address when "Same as Bill To Address" is checked, or clear it when unchecked
  useEffect(() => {
    if (sameAsBilling) {
      setShippingAddress({
        name: billingAddress.name,
        company: billingAddress.company,
        address: billingAddress.address,
        state: billingAddress.state,
        city: billingAddress.city,
        phone: billingAddress.phone,
        email: billingAddress.email
      });
    } else {
      setShippingAddress({
        name: '',
        company: '',
        address: '',
        state: '',
        city: '',
        phone: '',
        email: ''
      });
    }
  }, [sameAsBilling, billingAddress]);

  // Predefined HSN code options
  const hsnOptions = [
    { 
      code: '8479', 
      label: '8479 - Machines & Mechanical Appliances',
      description: 'MACHINES AND MECHANICAL APPLIANCES HAVING INDIVIDUAL FUNCTIONS, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER'
    },
    { 
      code: '8471', 
      label: '8471 - Automatic Data Processing Machines',
      description: 'AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF , MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED'
    },
    { 
      code: '998313', 
      label: '998313 - IT Consulting & Support',
      description: 'Information technology consulting and support services'
    },
    { 
      code: '998596', 
      label: '998596 - Events & Conventions',
      description: 'Events, Exhibitions, Conventions and trade shows organisation and assistance services'
    },
    { 
      code: '998599', 
      label: '998599 - Other Support Services',
      description: 'Other support services nowhere else classified'
    }
  ];

  // Invoice Items state: initialized with one empty row containing placeholder-like defaults
  const [items, setItems] = useState([
    { id: Date.now(), description: '', quantity: 1, unitPrice: 0, hsnCode: '' }
  ]);

  const [dateMode, setDateMode] = useState('system'); // 'system' or 'manual'
  const [invoiceDate, setInvoiceDate] = useState(() => new Date().toISOString().split('T')[0]); // YYYY-MM-DD
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [hasIncremented, setHasIncremented] = useState(false);

  // Dynamically compute invoice number based on selected date's year
  useEffect(() => {
    if (!invoiceDate) return;
    const dateObj = new Date(invoiceDate);
    const year = dateObj.getFullYear();
    if (isNaN(year)) return;

    // Reset sequence to 1 if no invoices exist in localStorage
    const existingInvoicesStr = localStorage.getItem('invoices');
    const invoices = existingInvoicesStr ? JSON.parse(existingInvoicesStr) : [];
    if (invoices.length === 0) {
      localStorage.setItem(`invoice_seq_${year}`, "1");
    }

    // Fetch or initialize sequence for the selected year
    const storedSeq = localStorage.getItem(`invoice_seq_${year}`);
    const seq = storedSeq ? parseInt(storedSeq, 10) : 1;

    // Format to 4 digits (e.g. 0001)
    const paddedSeq = seq.toString().padStart(4, '0');
    setInvoiceNumber(`INV-${year}-${paddedSeq}`);
  }, [invoiceDate, hasIncremented]);

  // Helper to increment invoice sequence in localStorage once per session
  const incrementInvoiceSequence = (force = false) => {
    if (hasIncremented && !force) return;
    if (!invoiceDate) return;
    const dateObj = new Date(invoiceDate);
    const year = dateObj.getFullYear();
    if (isNaN(year)) return;

    const existingInvoicesStr = localStorage.getItem('invoices');
    const invoices = existingInvoicesStr ? JSON.parse(existingInvoicesStr) : [];
    
    let seq;
    if (invoices.length === 0) {
      seq = 1;
    } else {
      const storedSeq = localStorage.getItem(`invoice_seq_${year}`);
      seq = storedSeq ? parseInt(storedSeq, 10) : 1;
    }

    localStorage.setItem(`invoice_seq_${year}`, (seq + 1).toString());
    setHasIncremented(true);
  };

  const handleNewInvoice = () => {
    // 1. Reset form fields to empty
    setBillingAddress({ name: '', company: '', address: '', city: '', state: '', phone: '', email: '' });
    setShippingAddress({ name: '', address: '', city: '', state: '', phone: '', email: '' });
    setItems([{ id: Date.now(), description: '', quantity: 1, unitPrice: 0, hsnCode: '' }]);
    // 2. Increment the sequence in localStorage so it updates to the next invoice number
    setHasIncremented(false);
    incrementInvoiceSequence(true);
  };

  // Save generated invoice details to localStorage for Admin Dashboard management
  const saveInvoiceToLocalStorage = () => {
    const existingInvoicesStr = localStorage.getItem('invoices');
    let invoices = existingInvoicesStr ? JSON.parse(existingInvoicesStr) : [];
    const matched = invoices.find(inv => inv.invoiceNumber === invoiceNumber);
    const wasMailSent = matched ? !!matched.isMailSent : false;

    const newInvoice = {
      id: invoiceNumber,
      invoiceNumber: invoiceNumber,
      date: invoiceDate,
      dueDate: dueDate,
      customerName: shippingAddress.name || billingAddress.name || billingAddress.company || 'Customer',
      companyName: billingAddress.company,
      email: billingAddress.email,
      phone: billingAddress.phone,
      totalAmount: totalDue,
      paymentStatus: 'Pending',
      invoiceStatus: 'Final',
      items: items,
      billingAddress: billingAddress,
      shippingAddress: shippingAddress,
      isMailSent: wasMailSent
    };

    invoices = invoices.filter(inv => inv.invoiceNumber !== invoiceNumber);
    invoices.unshift(newInvoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));

    const activityStr = localStorage.getItem('invoice_activities');
    let activities = activityStr ? JSON.parse(activityStr) : [];
    activities.unshift({
      id: Date.now(),
      type: 'generate',
      message: `Invoice ${invoiceNumber} was successfully generated for ${newInvoice.customerName}.`,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem('invoice_activities', JSON.stringify(activities.slice(0, 15)));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
  };

  // Handle changes in table items
  const handleItemChange = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          let updatedValue = value;
          if (field === 'quantity') {
            updatedValue = value === '' ? '' : Math.max(1, parseInt(value) || 0);
          } else if (field === 'unitPrice') {
            updatedValue = value === '' ? '' : Math.max(0, parseFloat(value) || 0);
          }
          return { ...item, [field]: updatedValue };
        }
        return item;
      })
    );
  };

  // Add dynamic row
  const addRow = () => {
    setItems(prev => [
      ...prev,
      { id: Date.now() + Math.random(), description: '', quantity: 1, unitPrice: 0, hsnCode: '' }
    ]);
  };

  // Delete row
  const deleteRow = (id) => {
    if (items.length > 1) {
      setItems(prev => prev.filter(item => item.id !== id));
    } else {
      // Clear first row if it's the last remaining row
      setItems([{ id: Date.now(), description: '', quantity: 1, unitPrice: 0 }]);
    }
  };

  // Financial calculations
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + ((item.quantity || 0) * (item.unitPrice || 0)), 0);
  };

  const subtotal = calculateSubtotal();
  const taxRate = 0.18; // 18% GST standard
  const tax = subtotal * taxRate;
  const discount = 0;
  const totalDue = subtotal + tax - discount;

  // Separate handler to send invoice copy via EmailJS
  const handleSendEmail = () => {
    if (!sendEmailCopy) return;
    if (!billingAddress.email) {
      alert("Client email is required in the Bill To section to send the copy.");
      return;
    }

    // 1. Select the live invoice container
    const liveElement = document.querySelector('.invoice-wrapper');
    if (!liveElement) return;

    // 2. Clone the container in memory to isolate it
    const clonedElement = liveElement.cloneNode(true);
    clonedElement.classList.add('html2pdf-mode');

    // 3. Remove all 'no-print' actions and buttons from the compiled clone
    const noPrintElements = clonedElement.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    // 4. Wrap the clone in a parent container to enforce centered A4 margins
    const pdfParent = document.createElement('div');
    pdfParent.style.position = 'fixed';
    pdfParent.style.left = '0';
    pdfParent.style.top = '0';
    pdfParent.style.zIndex = '-9999';
    pdfParent.style.opacity = '1';

    const pdfWrapper = document.createElement('div');
    pdfWrapper.className = 'html2pdf-mode-wrapper';
    pdfWrapper.style.position = 'relative';
    pdfWrapper.style.padding = '40px';
    pdfWrapper.style.background = '#ffffff';
    pdfWrapper.style.width = '800px';
    pdfWrapper.style.height = 'auto';
    pdfWrapper.style.boxSizing = 'border-box';
    
    clonedElement.style.width = '720px';
    clonedElement.style.height = 'auto'; // Flow naturally to prevent footer clipping
    clonedElement.style.margin = '0';
    clonedElement.style.padding = '0';
    clonedElement.style.boxShadow = 'none';
    clonedElement.style.border = '1px solid #cbd5e1';
    clonedElement.style.borderRadius = '16px';
    clonedElement.style.overflow = 'hidden';
    clonedElement.style.background = '#ffffff';
    clonedElement.style.boxSizing = 'border-box';
    clonedElement.style.display = 'flex';
    clonedElement.style.flexDirection = 'column';

    pdfWrapper.appendChild(clonedElement);
    pdfParent.appendChild(pdfWrapper);
    document.body.appendChild(pdfParent);

    // 5. Define html2pdf options (identical to downloaded PDF)
    const opt = {
      margin:       0,
      filename:     `Invoice-${invoiceNumber || 'BS'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2.5, 
        useCORS: true, 
        logging: false,
        letterRendering: true,
        scrollY: 0,
        scrollX: 0
      },
      jsPDF:        { unit: 'px', format: [800, 1120], hotfixes: ['px_scaling'] }
    };

    if (window.html2pdf) {
      window.html2pdf()
        .from(pdfWrapper)
        .set(opt)
        .output('datauristring')
        .then((pdfBase64) => {
          if (pdfParent.parentNode) pdfParent.parentNode.removeChild(pdfParent);
          const cleanBase64 = pdfBase64.includes(',') ? pdfBase64.split(',')[1] : pdfBase64;

          return fetch('http://localhost:5000/api/send-invoice', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: billingAddress.email,
              company: billingAddress.company || 'BODHI',
              invoiceNumber: invoiceNumber,
              pdfBase64: cleanBase64,
            }),
          }).then((response) => {
            if (!response.ok) {
              return response.json().then((data) => {
                throw new Error(data.error || 'Failed to send email via server');
              });
            }
            return response.json();
          });
        })
        .catch((err) => {
          if (pdfParent.parentNode) pdfParent.parentNode.removeChild(pdfParent);
          throw err;
        })
        .then(() => {
          // Mark as sent in localStorage
          const existingInvoicesStr = localStorage.getItem('invoices');
          if (existingInvoicesStr) {
            let invoices = JSON.parse(existingInvoicesStr);
            invoices = invoices.map(inv => {
              if (inv.invoiceNumber === invoiceNumber) {
                return { ...inv, isMailSent: true };
              }
              return inv;
            });
            localStorage.setItem('invoices', JSON.stringify(invoices));
          }

          setModalState({
            isOpen: true,
            type: 'success',
            message: 'Email Sent Successfully.',
            detail: ''
          });
        })
        .catch((err) => {
          console.error("Email/PDF Error:", err);
          setModalState({
            isOpen: true,
            type: 'error',
            message: 'Mail Sending Failed',
            detail: err && (err.text || err.message) ? String(err.text || err.message) : ''
          });
        });
    } else {
      alert("PDF engine is still loading. Please try again in a moment.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-validation checking shipping details
    if (!shippingAddress.name || !shippingAddress.address) {
      alert("Please fill in at least the Name and Address fields in the Shipping Address form before submitting.");
      return;
    }
    // Save to local storage
    saveInvoiceToLocalStorage();
    // Show success popup without opening print dialog
    setModalState({
      isOpen: true,
      type: 'success',
      message: 'Invoice generated successfully.'
    });
  };

  // Pre-fill invoice dates
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Pre-fill invoice dates
  const formatDateString = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Direct PDF generation and download
  const handleSavePDF = () => {
    // 1. Select the live invoice container
    const liveElement = document.querySelector('.invoice-wrapper');
    if (!liveElement) return;

    // 2. Clone the container in memory to isolate it from active window scrolls and page offsets
    const clonedElement = liveElement.cloneNode(true);
    clonedElement.classList.add('html2pdf-mode');

    // 3. Remove all 'no-print' actions and buttons from the compiled clone
    const noPrintElements = clonedElement.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());

    // 4. Wrap the clone in a parent container to enforce centered A4 margins
    const pdfParent = document.createElement('div');
    pdfParent.style.position = 'fixed';
    pdfParent.style.left = '0';
    pdfParent.style.top = '0';
    pdfParent.style.zIndex = '-9999';
    pdfParent.style.opacity = '1';

    const pdfWrapper = document.createElement('div');
    pdfWrapper.className = 'html2pdf-mode-wrapper';
    pdfWrapper.style.position = 'relative';
    pdfWrapper.style.padding = '40px';
    pdfWrapper.style.background = '#ffffff';
    pdfWrapper.style.width = '800px';
    pdfWrapper.style.height = 'auto';
    pdfWrapper.style.boxSizing = 'border-box';
    
    clonedElement.style.width = '720px';
    clonedElement.style.height = 'auto'; // Flow naturally to prevent footer clipping
    clonedElement.style.margin = '0';
    clonedElement.style.padding = '0';
    clonedElement.style.boxShadow = 'none';
    clonedElement.style.border = '1px solid #cbd5e1';
    clonedElement.style.borderRadius = '16px';
    clonedElement.style.overflow = 'hidden';
    clonedElement.style.background = '#ffffff';
    clonedElement.style.boxSizing = 'border-box';
    clonedElement.style.display = 'flex';
    clonedElement.style.flexDirection = 'column';

    pdfWrapper.appendChild(clonedElement);
    pdfParent.appendChild(pdfWrapper);
    document.body.appendChild(pdfParent);

    // 5. Define html2pdf options (optimized for standard A4 points)
    const opt = {
      margin:       0,
      filename:     `Invoice-${invoiceNumber || 'BS'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2.5, 
        useCORS: true, 
        logging: false,
        letterRendering: true,
        scrollY: 0,
        scrollX: 0
      },
      jsPDF:        { unit: 'px', format: [800, 1120], hotfixes: ['px_scaling'] }
    };

    // 6. Run html2pdf using the in-memory clone wrapper
    if (window.html2pdf) {
      window.html2pdf()
        .from(pdfWrapper)
        .set(opt)
        .save()
        .then(() => {
          if (pdfParent.parentNode) pdfParent.parentNode.removeChild(pdfParent);
          incrementInvoiceSequence();
          saveInvoiceToLocalStorage();
        })
        .catch((err) => {
          if (pdfParent.parentNode) pdfParent.parentNode.removeChild(pdfParent);
          console.error('PDF generation error:', err);
        });
    } else {
      // Fallback to native window.print if script CDN hasn't loaded yet
      incrementInvoiceSequence();
      saveInvoiceToLocalStorage();
      window.print();
    }
  };

  return (
    <PageWrapper>
      <div className="invoice-page-container">
        <form onSubmit={handleSubmit}>
          <div className="invoice-wrapper">
            {/* ================= HERO HEADER ================= */}
            {/* ================= HERO HEADER ================= */}
            <header className="invoice-hero">

              <div className="invoice-hero-left">
                <div className="company-logo-area">
                  <div className="invoice-brand-logo-container" aria-label="BodhiStreams Logo"></div>
                </div>
                <div className="invoice-company-details">
                  <p>Plot 30/2, 2nd St, Ramapuram</p>
                  <p>Adambakkam, Chennai, Tamil Nadu - 600088</p>
                  <p>Tel: +91 98845 95762</p>
                  <p>Email: bodhistreamsltd@gmail.com</p>
                  <p>GST No: 33AAOCB4388D1ZL</p>
                </div>
              </div>

              <div className="invoice-hero-right">
                <h1>INVOICE</h1>
                <div className="invoice-hero-details">
                  <div className="hero-detail-row">
                    <span className="hero-detail-label">Invoice No:</span>
                    <strong className="hero-detail-value">{invoiceNumber}</strong>
                  </div>

                  <div className="hero-detail-row">
                    <span className="hero-detail-label">Invoice Date:</span>
                    <span className="hero-detail-value no-print">
                      {dateMode === 'system' ? (
                        formatDateString(invoiceDate)
                      ) : (
                        <input 
                          type="date" 
                          className="invoice-hero-date-picker" 
                          value={invoiceDate} 
                          onChange={(e) => {
                            setInvoiceDate(e.target.value);
                            const newInvDate = new Date(e.target.value);
                            if (!isNaN(newInvDate.getTime())) {
                              newInvDate.setDate(newInvDate.getDate() + 30);
                              setDueDate(newInvDate.toISOString().split('T')[0]);
                            }
                          }} 
                        />
                      )}
                    </span>
                    <span className="hero-detail-value print-only">{formatDateString(invoiceDate)}</span>
                  </div>

                  <div className="hero-detail-row">
                    <span className="hero-detail-label">Due Date:</span>
                    <span className="hero-detail-value no-print">
                      {dateMode === 'system' ? (
                        formatDateString(dueDate)
                      ) : (
                        <input 
                          type="date" 
                          className="invoice-hero-date-picker" 
                          value={dueDate} 
                          onChange={(e) => setDueDate(e.target.value)} 
                        />
                      )}
                    </span>
                    <span className="hero-detail-value print-only">{formatDateString(dueDate)}</span>
                  </div>

                  <div className="hero-detail-row no-print">
                    <span className="hero-detail-label">Date Mode:</span>
                    <div className="hero-date-toggle">
                      <button 
                        type="button" 
                        className={`hero-toggle-btn ${dateMode === 'system' ? 'active' : ''}`}
                        onClick={() => {
                          setDateMode('system');
                          setInvoiceDate(new Date().toISOString().split('T')[0]);
                        }}
                      >
                        System
                      </button>
                      <button 
                        type="button" 
                        className={`hero-toggle-btn ${dateMode === 'manual' ? 'active' : ''}`}
                        onClick={() => setDateMode('manual')}
                      >
                        Manual
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* ================= BILLING & SHIPPING ADDRESSES ================= */}
            <div className="invoice-addresses-section">
              {/* Left Column: Billing Address (Now Editable) */}
              <div className="invoice-address-block">
                <div className="address-header-tab">
                  <h3>Bill To :</h3>
                </div>
                <div className="invoice-address-details">
                  <div className="no-print invoice-shipping-form">
                    <input
                      type="text"
                      placeholder="Name"
                      className="invoice-input"
                      value={billingAddress.name}
                      onChange={(e) => setBillingAddress({ ...billingAddress, name: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="invoice-input"
                      value={billingAddress.company}
                      onChange={(e) => setBillingAddress({ ...billingAddress, company: e.target.value })}
                    />
                    <textarea
                      placeholder="Address"
                      className="invoice-input invoice-textarea"
                      value={billingAddress.address}
                      onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="invoice-input"
                      value={billingAddress.state}
                      onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="invoice-input"
                      value={billingAddress.city}
                      onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="invoice-input"
                      value={billingAddress.phone}
                      onChange={(e) => setBillingAddress({ ...billingAddress, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="invoice-input"
                      value={billingAddress.email}
                      onChange={(e) => setBillingAddress({ ...billingAddress, email: e.target.value })}
                    />
                  </div>
                  <div className="print-only" style={{ color: '#64748b' }}>
                    <strong style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px', marginBottom: '5px', display: 'block' }}>{billingAddress.name}</strong>
                    {billingAddress.company && <p style={{ fontWeight: '500', margin: '0 0 4px 0' }}>{billingAddress.company}</p>}
                    <p style={{ margin: '0 0 4px 0' }}>{billingAddress.address}</p>
                    {billingAddress.state && <p style={{ margin: '0 0 4px 0' }}>{billingAddress.state}</p>}
                    {billingAddress.city && <p style={{ margin: '0 0 4px 0' }}>{billingAddress.city}</p>}
                    <p style={{ marginTop: '8px', margin: '8px 0 4px 0' }}>Tel: {billingAddress.phone}</p>
                    <p style={{ margin: '0' }}>Email: {billingAddress.email}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Editable Shipping Address */}
              <div className="invoice-address-block">
                <div className="address-header-tab">
                  <h3>Ship To :</h3>
                </div>
                <div className="invoice-address-details">
                  <div className="invoice-shipping-form">
                    <div className="same-as-billing-container no-print" style={{ marginBottom: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#475569' }}>
                        <input
                          type="checkbox"
                          checked={sameAsBilling}
                          onChange={(e) => setSameAsBilling(e.target.checked)}
                          style={{ accentColor: '#76be43' }}
                        />
                        Same as Bill To Address
                      </label>
                    </div>

                    <div className="invoice-shipping-fields no-print" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="invoice-input"
                        value={shippingAddress.name}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                        required
                      />

                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="invoice-input"
                        value={shippingAddress.company}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                      />

                      <textarea
                        name="address"
                        placeholder="Address"
                        className="invoice-input invoice-textarea"
                        value={shippingAddress.address}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                        required
                      />

                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="invoice-input"
                        value={shippingAddress.state}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                      />

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="invoice-input"
                        value={shippingAddress.city}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                      />

                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="invoice-input"
                        value={shippingAddress.phone}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="invoice-input"
                        value={shippingAddress.email}
                        onChange={handleShippingChange}
                        disabled={sameAsBilling}
                      />
                    </div>

                    <div className="print-only" style={{ color: '#64748b' }}>
                      <strong style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px', marginBottom: '5px', display: 'block' }}>{shippingAddress.name}</strong>
                      {shippingAddress.company && <p style={{ fontWeight: '500', margin: '0 0 4px 0' }}>{shippingAddress.company}</p>}
                      <p style={{ margin: '0 0 4px 0' }}>{shippingAddress.address}</p>
                      {shippingAddress.state && <p style={{ margin: '0 0 4px 0' }}>{shippingAddress.state}</p>}
                      {shippingAddress.city && <p style={{ margin: '0 0 4px 0' }}>{shippingAddress.city}</p>}
                      <p style={{ marginTop: '8px', margin: '8px 0 4px 0' }}>Tel: {shippingAddress.phone}</p>
                      <p style={{ margin: '0' }}>Email: {shippingAddress.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= INVOICE ITEMS TABLE ================= */}
            <div className="invoice-table-section">
              <div className="invoice-table-wrapper">
                <table className="invoice-items-table">
                  <thead>
                    <tr>
                      <th className="col-no print-only" style={{ width: '40px', textAlign: 'center' }}>No.</th>
                      <th className="col-desc">
                        <span className="no-print">Description</span>
                        <span className="print-only">Description</span>
                      </th>
                      <th className="col-hsn" style={{ width: '130px' }}>
                        <span>HSN/SAC</span>
                      </th>
                      <th className="col-qty" style={{ width: '95px' }}>
                        <span className="no-print">Quantity</span>
                        <span className="print-only">Quantity</span>
                      </th>
                      <th className="col-price" style={{ width: '125px' }}>
                        <span className="no-print">Unit Price</span>
                        <span className="print-only">Unit Price (INR)</span>
                      </th>
                      <th className="col-total" style={{ width: '115px' }}>
                        <span className="no-print">Total</span>
                        <span className="print-only">Amount (INR)</span>
                      </th>
                      <th className="col-action no-print"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={item.id}>
                        <td className="col-no print-only" style={{ textAlign: 'center', color: '#64748b' }}>
                          {index + 1}
                        </td>
                        <td className="col-desc">
                          <input
                            type="text"
                            placeholder="Enterprise IT Hardware/Consulting Service..."
                            className="invoice-input no-print"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                            required
                          />
                          <span className="print-only" style={{ fontWeight: '500', color: '#1e293b' }}>
                            {item.description || (index === 0 ? "Ocean Freight - FCL 20' Container" : index === 1 ? "Export Customs Clearance" : index === 2 ? "Port Handling Fee - Origin" : index === 3 ? "Bill of Lading Issuance" : index === 4 ? "Documentation Handling" : "Consulting Service")}
                          </span>
                        </td>
                        <td className="col-hsn">
                          <div className="no-print" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <select
                              className="invoice-input"
                              value={hsnOptions.some(opt => opt.code === item.hsnCode) ? item.hsnCode : item.hsnCode ? 'custom' : ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                if (val === 'custom') {
                                  handleItemChange(item.id, 'hsnCode', 'Custom');
                                } else {
                                  handleItemChange(item.id, 'hsnCode', val);
                                }
                              }}
                              style={{ width: '100%' }}
                            >
                              <option value="">Select</option>
                              {hsnOptions.map(opt => (
                                <option key={opt.code} value={opt.code}>{opt.code}</option>
                              ))}
                              <option value="custom">Custom...</option>
                            </select>
                            {(item.hsnCode === 'Custom' || (item.hsnCode && !hsnOptions.some(opt => opt.code === item.hsnCode))) && (
                              <input
                                type="text"
                                placeholder="Enter HSN"
                                className="invoice-input"
                                value={item.hsnCode === 'Custom' ? '' : item.hsnCode}
                                onChange={(e) => handleItemChange(item.id, 'hsnCode', e.target.value)}
                                style={{ marginTop: '4px' }}
                              />
                            )}
                          </div>
                          <span className="print-only" style={{ display: 'block', textAlign: 'center' }}>
                            {item.hsnCode || (index === 0 ? '8479' : index === 1 ? '8471' : index === 2 ? '998313' : index === 3 ? '998596' : index === 4 ? '998599' : '-')}
                          </span>
                        </td>
                        <td className="col-qty">
                          <input
                            type="number"
                            min="1"
                            placeholder="1"
                            className="invoice-input no-print"
                            style={{ textAlign: 'center' }}
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                            required
                          />
                          <span className="print-only" style={{ display: 'block', textAlign: 'right' }}>
                            {item.quantity ? `${item.quantity}` : (index === 0 ? "1container" : index === 1 ? "1shipment" : index === 2 ? "1container" : index === 3 ? "1document" : index === 4 ? "1job" : "1")}
                          </span>
                        </td>
                        <td className="col-price">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            className="invoice-input no-print"
                            value={item.unitPrice}
                            onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                            required
                          />
                          <span className="print-only" style={{ display: 'block', textAlign: 'right' }}>
                            ₹{parseFloat(item.unitPrice || (index === 0 ? 1200 : index === 1 ? 90 : index === 2 ? 150 : index === 3 ? 35 : index === 4 ? 45 : 0)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="col-total">
                          <span className="no-print">
                            ₹{((item.quantity || 0) * (item.unitPrice || 0)).toFixed(2)}
                          </span>
                          <span className="print-only" style={{ display: 'block', textAlign: 'right' }}>
                            ₹{((item.quantity || (index === 0 ? 1 : index === 1 ? 1 : index === 2 ? 1 : index === 3 ? 1 : index === 4 ? 1 : 0)) * (item.unitPrice || (index === 0 ? 1200 : index === 1 ? 90 : index === 2 ? 150 : index === 3 ? 35 : index === 4 ? 45 : 0))).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="col-action no-print">
                          <button
                            type="button"
                            className="invoice-delete-row-btn"
                            onClick={() => deleteRow(item.id)}
                            title="Remove Row"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="invoice-table-actions no-print">
                <button
                  type="button"
                  className="invoice-add-row-btn"
                  onClick={addRow}
                >
                  <Plus size={16} /> Add Item Row
                </button>
              </div>
            </div>

            {/* ================= FINANCIAL TOTALS WITH BANK DETAILS ================= */}
            <div className="invoice-totals-section">
              {/* Left: Payment Method Bank Details */}
              <div className="invoice-totals-left-bank">
                <h4 style={{ fontWeight: '700', color: '#101e0b', fontSize: '14px', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Payment Method</h4>
                <div className="invoice-bank-details">
                  <span>Account No:</span>
                  <strong>45114071945</strong>
                  <span>Account Name:</span>
                  <strong>Bodhistreams convergence Pvt Ltd</strong>
                  <span>Bank Name:</span>
                  <strong>State Bank of India</strong>
                  <span>IFSC Code:</span>
                  <strong>SBIN0006463</strong>
                </div>
              </div>

              {/* Right: Financial Totals */}
              <div className="invoice-totals-box">
                <div className="invoice-total-row">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="invoice-total-row">
                  <span>Discount:</span>
                  <span>₹{discount.toFixed(2)}</span>
                </div>
                <div className="invoice-total-row">
                  <span>Tax (18% GST):</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="invoice-total-row grand-total">
                  <span>Total:</span>
                  <span>₹{totalDue.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* ================= TERMS AND SIGNATURE ================= */}
            <div className="invoice-bottom-details two-cols">
              <div className="invoice-bottom-block terms-block">
                <h4 style={{ fontWeight: '700', color: '#101e0b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 14px' }}>Terms &amp; Conditions</h4>
                <ul className="terms-list" style={{ margin: 0, paddingLeft: '20px', color: '#475569', fontSize: '12.5px', lineHeight: '1.75' }}>
                  <li>Please pay within 30 days of the invoice date.</li>
                  <li>Late payments are subject to a 2% monthly fee interest charge.</li>
                  <li>Sourced components are subject to standard OEM warranties.</li>
                </ul>
              </div>

              <div className="invoice-bottom-block signature-block">
                <div className="signature-area" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {signatureImage ? (
                    <img 
                      src={signatureImage} 
                      alt="Authorized Signature" 
                      className="uploaded-signature-img"
                      style={{ maxHeight: '55px', maxWidth: '160px', objectFit: 'contain', marginBottom: '4px' }} 
                    />
                  ) : (
                    <div style={{ height: '48px' }}></div>
                  )}
                  <div className="invoice-sig-line"></div>
                  <div className="invoice-sig-subtitle">Authorized Signatory</div>
                  
                  <div className="signature-upload-wrapper no-print" style={{ marginTop: '8px' }}>
                    <label className="sig-upload-label" style={{ fontSize: '11px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 8px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', color: '#475569', fontWeight: '500' }}>
                      📁 Upload Signature
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleSignatureUpload} 
                        style={{ display: 'none' }} 
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FULL WIDTH COLORED FOOTER BANNER ================= */}
            <div className="invoice-bottom-footer-bar">
              <span>📍 Chennai, Tamil Nadu, India</span>
              <span>📞 +91 98845 95762</span>
              <span>✉️ bodhistreamsltd@gmail.com</span>
              <span>🌐 www.bodhistreams.net</span>
            </div>


          </div>

          {/* Action Bar (hidden in print view) */}
          <div className="invoice-action-bar no-print">
            <div className="action-bar-left">
              <label className="send-email-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={sendEmailCopy} 
                  onChange={(e) => setSendEmailCopy(e.target.checked)} 
                />
                Send email copy to client
              </label>
              <button
                type="button"
                className="invoice-btn invoice-btn-send"
                disabled={!sendEmailCopy}
                onClick={handleSendEmail}
              >
                Send
              </button>
            </div>
            <div className="action-bar-right">

              <button
                type="button"
                className="invoice-btn"
                style={{ background: '#475569', color: '#ffffff' }}
                onClick={handleNewInvoice}
              >
                New Invoice
              </button>
              <button
                type="button"
                className="invoice-btn invoice-btn-print-only"
                onClick={() => window.print()}
              >
                Print
              </button>
              <button type="submit" className="invoice-btn invoice-btn-generate">
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Custom Success/Error Modal */}
      {modalState.isOpen && (
        <div className="invoice-modal-overlay no-print">
          <div className="invoice-modal-card">
            <span className={`modal-icon ${modalState.type}`}>
              {modalState.type === 'success' ? '✅' : '❌'}
            </span>
            <h3>{modalState.type === 'success' ? 'Success' : 'Error'}</h3>
            <p>{modalState.message}</p>
            {modalState.detail && (
              <p style={{ fontSize: '12px', color: '#707787', background: '#f8fafc', padding: '10px', borderRadius: '4px', border: '1px solid #dcdfe1', marginTop: '10px', wordBreak: 'break-all' }}>
                {modalState.detail}
              </p>
            )}
            <button 
              type="button" 
              className={`invoice-modal-btn ${modalState.type === 'error' ? 'error-btn' : ''}`}
              onClick={() => {
                setModalState({ isOpen: false, type: 'success', message: '', detail: '' });
                setHasIncremented(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
