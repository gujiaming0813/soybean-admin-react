import type { ElegantConstRoute } from '@ohh-889/react-auto-route';
import type { _RouteRecordBase } from '../types';
export interface RouteRecordNormalized {
  /** {@inheritDoc _RouteRecordBase.path} */
  path: _RouteRecordBase['path'];

  /** {@inheritDoc _RouteRecordBase.name} */
  name: _RouteRecordBase['name'];
  /** {@inheritDoc RouteRecordMultipleViews.components} */
  component: string | undefined;
  redirect?: string;
  /** Nested route records. */
  children: ElegantConstRoute[];
  /** {@inheritDoc _RouteRecordBase.meta} */
  meta: Exclude<_RouteRecordBase['meta'], void>;
}

export interface RouteRecordRaw {
  record: RouteRecordNormalized;
  children: RouteRecordRaw[];
  parent: RouteRecordRaw | undefined;
  name?: string;
}
