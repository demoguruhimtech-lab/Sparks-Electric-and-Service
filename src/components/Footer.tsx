import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK, BUSINESS_NAME, WEBSITE_URL, MAPS_LINK } from '@/data/services';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500">
                <Zap className="h-6 w-6 text-warmyellow-400" fill="currentColor" />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white leading-tight">Sparks Electric</span>
                <span className="block text-xs text-navy-100">and Service</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-100 mb-4">
              Professional residential and commercial electrical services in Duvall, WA and the Snoqualmie Valley.
            </p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 text-warmyellow-400 font-bold hover:text-warmyellow-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Electrical Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-duvall-wa`}
                    className="text-sm hover:text-warmyellow-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold hover:text-warmyellow-400 transition-colors">
                  All Electrical Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/${l.slug}`}
                    className="text-sm hover:text-warmyellow-400 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-semibold hover:text-warmyellow-400 transition-colors">
                  All Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-warmyellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-warmyellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-warmyellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm hover:text-warmyellow-400 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:text-warmyellow-400 transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Google Maps Listing
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-400 pt-6">
          <p className="text-center text-xs text-navy-100">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Serving Duvall, WA and the Snoqualmie Valley.
          </p>
        </div>
      </div>
    </footer>
  );
}
