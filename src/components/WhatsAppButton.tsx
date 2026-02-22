import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917439557313"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={26} className="text-[hsl(0,0%,100%)]" />
  </a>
);

export default WhatsAppButton;
