import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from '@/data/services';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export default function CallButton({
  variant = 'primary',
  size = 'md',
  label = `Call ${PHONE_DISPLAY}`,
  className = '',
}: CallButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variants = {
    primary: 'bg-warmyellow-400 text-navy-500 hover:bg-warmyellow-300 hover:shadow-lg',
    secondary: 'bg-electric-500 text-white hover:bg-electric-600 hover:shadow-lg',
    outline: 'border-2 border-warmyellow-400 text-warmyellow-400 hover:bg-warmyellow-400 hover:text-navy-500',
  };

  return (
    <a
      href={PHONE_LINK}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
      {label}
    </a>
  );
}
