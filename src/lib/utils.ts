import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5535991101380";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Noble AI e como posso transformar meu negócio com Inteligência Artificial.";

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
