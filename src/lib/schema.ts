/** Strukturierte Daten (schema.org) für Leistungsseiten, Case Studies und Artikel. */
import { site } from '../config/site';
import type { Service } from '../data/services';

export function breadcrumbs(base: URL | undefined, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Start', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, base).toString(),
    })),
  };
}

export function serviceSchema(base: URL | undefined, service: Service, serviceType: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} Fotografie`,
    serviceType,
    description,
    url: new URL(service.href, base).toString(),
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    provider: { '@type': 'ProfessionalService', name: site.name, url: base?.toString() },
  };
}
