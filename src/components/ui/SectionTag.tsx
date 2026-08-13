'use client';
// src/components/ui/SectionTag.tsx — reusable section category label
import React from 'react';

interface SectionTagProps {
  label: string;
  light?: boolean; // for dark backgrounds
}

export default function SectionTag({ label, light = false }: SectionTagProps) {
  return (
    <span
      className="section-tag"
      style={{ color: '#FED403' }}
    >
      {label}
    </span>
  );
}
