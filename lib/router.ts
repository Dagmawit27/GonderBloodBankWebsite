import { useState, useEffect } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'inventory' }
  | { name: 'inventory-detail'; bloodGroup: string }
  | { name: 'requests' }
  | { name: 'request-detail'; id: string }
  | { name: 'new-request' }
  | { name: 'schedule'; prefilledBloodGroup?: string; prefilledCenterId?: string }
  | { name: 'eligibility' }
  | { name: 'centers'; selectedCenterId?: string };

function parsePath(path: string): Route {
  // Clean hash or pathname
  const cleanPath = path.replace(/^#\/?/, '').replace(/^\//, '') || 'home';
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0 || segments[0] === 'home') {
    return { name: 'home' };
  }

  if (segments[0] === 'inventory') {
    if (segments[1]) {
      return { name: 'inventory-detail', bloodGroup: decodeURIComponent(segments[1]) };
    }
    return { name: 'inventory' };
  }

  if (segments[0] === 'requests') {
    if (segments[1] === 'new') {
      return { name: 'new-request' };
    }
    if (segments[1]) {
      return { name: 'request-detail', id: decodeURIComponent(segments[1]) };
    }
    return { name: 'requests' };
  }

  if (segments[0] === 'schedule') {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      name: 'schedule',
      prefilledBloodGroup: urlParams.get('group') || undefined,
      prefilledCenterId: urlParams.get('center') || undefined,
    };
  }

  if (segments[0] === 'eligibility') {
    return { name: 'eligibility' };
  }

  if (segments[0] === 'centers') {
    return {
      name: 'centers',
      selectedCenterId: segments[1] ? decodeURIComponent(segments[1]) : undefined,
    };
  }

  return { name: 'home' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => {
    // Check hash first (for seamless iframe support), then pathname
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      return parsePath(hash);
    }
    return parsePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        setRoute(parsePath(hash));
      } else {
        setRoute(parsePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (newRoute: Route) => {
    setRoute(newRoute);
    let path = '#/';
    switch (newRoute.name) {
      case 'home':
        path = '#/';
        break;
      case 'inventory':
        path = '#/inventory';
        break;
      case 'inventory-detail':
        path = `#/inventory/${encodeURIComponent(newRoute.bloodGroup)}`;
        break;
      case 'requests':
        path = '#/requests';
        break;
      case 'request-detail':
        path = `#/requests/${encodeURIComponent(newRoute.id)}`;
        break;
      case 'new-request':
        path = '#/requests/new';
        break;
      case 'schedule':
        path = '#/schedule';
        break;
      case 'eligibility':
        path = '#/eligibility';
        break;
      case 'centers':
        path = newRoute.selectedCenterId
          ? `#/centers/${encodeURIComponent(newRoute.selectedCenterId)}`
          : '#/centers';
        break;
    }
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { route, navigate };
}
