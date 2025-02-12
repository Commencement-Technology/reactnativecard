import * as React from 'react';
import type {
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';

export type ForwardRefComponent<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

/**
 * Custom `forwardRef` to prevent TypeScript from generating large prop unions
 * when using `React.forwardRef`. Use this instead of `React.forwardRef`.
 */
export function forwardRef<T, P = {}>(
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>, // Explicitly using PropsWithoutRef<P>
): ForwardRefComponent<T, P> {
  return React.forwardRef(render) as ForwardRefComponent<T, P>;
}
