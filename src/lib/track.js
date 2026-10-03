'use client';

/**
 * Conversion events.
 *
 * Every one of these is a lead signal. They fire into GA4 and the Meta Pixel if
 * those are configured, and do nothing if they are not, so calling them is
 * always safe.
 *
 * In GA4, mark generate_lead, phone_click and whatsapp_click as conversions.
 * In Meta Events Manager, build the custom conversion on Lead.
 */

function ga(event, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}

function meta(event, params = {}) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}

/** A form was submitted successfully. The main conversion. */
export function trackLead({ form, page, product } = {}) {
  ga('generate_lead', { form, page, product });
  meta('Lead', { content_name: form, content_category: product });
}

/** Someone tapped a phone number. */
export function trackPhoneClick(page) {
  ga('phone_click', { page });
  meta('Contact', { content_name: 'phone' });
}

/** Someone tapped a WhatsApp link. */
export function trackWhatsAppClick(page) {
  ga('whatsapp_click', { page });
  meta('Contact', { content_name: 'whatsapp' });
}

/** Someone opened the brochure or catalogue. */
export function trackBrochureDownload(page) {
  ga('brochure_download', { page });
  meta('ViewContent', { content_name: 'brochure' });
}

/** Someone clicked a quote or site visit CTA. */
export function trackQuoteClick({ page, product } = {}) {
  ga('quote_cta_click', { page, product });
}
