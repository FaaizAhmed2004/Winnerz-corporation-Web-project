import jsPDF from 'jspdf';
import { Order } from '@/types';
import { formatPrice, formatDate } from '@/lib/utils';

export function generateOrderPDF(order: Order): void {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  let yPosition = margin;

  // Helper function to add text
  const addText = (text: string, x: number, y: number, options?: { fontSize?: number; fontStyle?: string }) => {
    if (options?.fontSize) pdf.setFontSize(options.fontSize);
    if (options?.fontStyle) pdf.setFont('helvetica', options.fontStyle as any);
    pdf.text(text, x, y);
    pdf.setFont('helvetica', 'normal'); // Reset to normal
    pdf.setFontSize(12); // Reset to default size
  };

  // Header
  addText('WINNERZ MARKETING INC.', margin, yPosition, { fontSize: 20, fontStyle: 'bold' });
  yPosition += 10;
  addText('123 Business Ave, Suite 100', margin, yPosition);
  yPosition += 7;
  addText('New York, NY 10001', margin, yPosition);
  yPosition += 7;
  addText('Phone: (555) 123-4567', margin, yPosition);
  yPosition += 20;

  // Invoice Title
  addText('ORDER CONFIRMATION', margin, yPosition, { fontSize: 18, fontStyle: 'bold' });
  yPosition += 15;

  // Order Details
  addText(`Order Number: ${order.orderNumber}`, margin, yPosition, { fontStyle: 'bold' });
  addText(`Date: ${formatDate(order.createdAt)}`, pageWidth - 80, yPosition);
  yPosition += 10;
  addText(`Status: ${order.status.toUpperCase()}`, margin, yPosition);
  yPosition += 20;

  // Customer Information
  addText('BILL TO:', margin, yPosition, { fontStyle: 'bold' });
  yPosition += 10;
  addText(`${order.customer.firstName} ${order.customer.lastName}`, margin, yPosition);
  yPosition += 7;
  addText(order.customer.email, margin, yPosition);
  if (order.customer.phone) {
    yPosition += 7;
    addText(order.customer.phone, margin, yPosition);
  }
  yPosition += 20;

  // Shipping Information
  addText('SHIP TO:', margin, yPosition, { fontStyle: 'bold' });
  yPosition += 10;
  addText(order.shipping.address, margin, yPosition);
  yPosition += 7;
  addText(`${order.shipping.city}, ${order.shipping.state} ${order.shipping.zipCode}`, margin, yPosition);
  yPosition += 7;
  addText(order.shipping.country, margin, yPosition);
  yPosition += 20;

  // Items Table Header
  const tableStartY = yPosition;
  addText('ITEM', margin, yPosition, { fontStyle: 'bold' });
  addText('QTY', pageWidth - 120, yPosition, { fontStyle: 'bold' });
  addText('PRICE', pageWidth - 80, yPosition, { fontStyle: 'bold' });
  addText('TOTAL', pageWidth - 40, yPosition, { fontStyle: 'bold' });
  yPosition += 5;

  // Draw line under header
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Items
  order.items.forEach((item) => {
    let itemName = item.product.name;
    if (item.selectedVariants && Object.keys(item.selectedVariants).length > 0) {
      const variants = Object.values(item.selectedVariants).join(', ');
      itemName += ` (${variants})`;
    }

    // Handle long item names
    const maxWidth = pageWidth - 140;
    const lines = pdf.splitTextToSize(itemName, maxWidth);
    
    addText(lines[0], margin, yPosition);
    if (lines.length > 1) {
      yPosition += 7;
      addText(lines[1], margin, yPosition);
    }

    addText(item.quantity.toString(), pageWidth - 120, yPosition);
    addText(formatPrice(item.price), pageWidth - 80, yPosition);
    addText(formatPrice(item.price * item.quantity), pageWidth - 40, yPosition);
    yPosition += 15;
  });

  // Totals
  yPosition += 10;
  pdf.line(pageWidth - 120, yPosition - 5, pageWidth - margin, yPosition - 5);
  
  addText('Subtotal:', pageWidth - 80, yPosition);
  addText(formatPrice(order.totals.subtotal), pageWidth - 40, yPosition);
  yPosition += 10;

  addText('Shipping:', pageWidth - 80, yPosition);
  addText(order.totals.shipping === 0 ? 'Free' : formatPrice(order.totals.shipping), pageWidth - 40, yPosition);
  yPosition += 10;

  addText('Tax:', pageWidth - 80, yPosition);
  addText(formatPrice(order.totals.tax), pageWidth - 40, yPosition);
  yPosition += 10;

  if (order.totals.discount > 0) {
    addText('Discount:', pageWidth - 80, yPosition);
    addText(`-${formatPrice(order.totals.discount)}`, pageWidth - 40, yPosition);
    yPosition += 10;
  }

  // Draw line above total
  pdf.line(pageWidth - 120, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  addText('TOTAL:', pageWidth - 80, yPosition, { fontStyle: 'bold' });
  addText(formatPrice(order.totals.total), pageWidth - 40, yPosition, { fontStyle: 'bold' });
  yPosition += 20;

  // Footer
  yPosition += 20;
  addText('Thank you for your business!', margin, yPosition, { fontStyle: 'bold' });
  yPosition += 10;
  addText('For questions about this order, please contact us at info@winnerz.com', margin, yPosition, { fontSize: 10 });

  // Save the PDF
  pdf.save(`order-${order.orderNumber}.pdf`);
}

export function generateOrderJSON(order: Order): void {
  const orderData = {
    orderNumber: order.orderNumber,
    date: order.createdAt.toISOString(),
    status: order.status,
    customer: order.customer,
    shipping: order.shipping,
    billing: order.billing,
    items: order.items.map(item => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.price,
      total: item.price * item.quantity,
      variants: item.selectedVariants
    })),
    totals: order.totals
  };

  const dataStr = JSON.stringify(orderData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `order-${order.orderNumber}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}