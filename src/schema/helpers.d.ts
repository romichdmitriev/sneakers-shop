import { FC, ReactNode } from 'react';

type FCWithChildren<T> = FC<T & { children?: ReactNode }>;

export default FCWithChildren;
