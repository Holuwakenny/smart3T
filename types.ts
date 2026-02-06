
// Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Sector {
  title: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  benefits: Benefit[];
  sectors: Sector[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
