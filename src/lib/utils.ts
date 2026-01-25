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
