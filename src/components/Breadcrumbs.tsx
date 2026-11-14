import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1 text-navy-200">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <Link to={item.href} className="hover:text-electric-500 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-400 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-navy-200" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
