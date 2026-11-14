import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from '@/data/services';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <a
        href={PHONE_LINK}
        className="flex items-center justify-center gap-2 bg-warmyellow-400 py-3.5 text-center font-bold text-navy-500 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] active:bg-warmyellow-500 transition-colors"
      >
        <Phone className="h-5 w-5" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
