import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5535991101380";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Noble AI e como posso transformar meu negócio com Inteligência Artificial.";

// Extract UTM parameters from URL
export function getUTMParams() {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_campaign: "", utm_medium: "", utm_content: "" };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_content: params.get("utm_content") || "",
  };
}

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// Generate unique event ID for deduplication (replaces 3 duplicate patterns)
export function generateEventId(prefix: string = ""): string {
  return `${prefix}${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Extract Meta tracking cookies
export function getMetaCookies() {
  return {
    fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1] || null,
    fbc: document.cookie.match(/_fbc=([^;]+)/)?.[1] || null,
  };
}

// Send event to Meta CAPI via webhook (consolidates 2+ duplicate fetch calls)
export async function sendToMetaCAPI(payload: {
  eventName: string;
  eventId: string;
  eventData: Record<string, any>;
  userData: { fbp: string | null; fbc: string | null };
}) {
  try {
    const response = await fetch('https://webhook.noblecompany.digital/webhook/meta/conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      console.error(`Meta CAPI error: ${response.status}`);
    }
  } catch (error) {
    console.error('Meta CAPI fetch error:', error);
    // Silently fail - doesn't block user interactions
  }
}
