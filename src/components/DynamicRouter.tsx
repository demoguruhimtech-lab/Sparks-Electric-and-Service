import { useParams, Navigate } from 'react-router-dom';
import { getLocation, LocationData } from '@/data/locations';
import { getService } from '@/data/services';
import LocationPage from '@/pages/LocationPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';

export default function DynamicRouter() {
  const params = useParams();
  const path = params['*'] || params.path;

  if (!path) return <Navigate to="/404" replace />;

  // Check if this is a pure location slug (e.g., "duvall-wa")
  const location = getLocation(path);
  if (location) {
    return <LocationPage location={location} />;
  }

  // Try to match {serviceSlug}-{locationSlug}
  // Location slugs end with "-wa"
  const locationMatch = path.match(/^(.+)-([a-z-]+-wa)$/);

  if (locationMatch) {
    const serviceSlug = locationMatch[1];
    const locationSlug = locationMatch[2];

    const service = getService(serviceSlug);
    const loc = getLocation(locationSlug);

    if (service && loc) {
      return <ServiceLocationPage service={service} location={loc} />;
    }
  }

  return <Navigate to="/404" replace />;
}
