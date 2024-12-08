import { FC, lazy, LazyExoticComponent } from 'react';

export const lazyComponent = (
  importer: Promise<Record<string, FC>>,
  name: string | null = null
): LazyExoticComponent<FC> =>
  lazy(async () => {
    const component = await importer;
    return name ? { default: component[name] } : { default: component.default };
  });
