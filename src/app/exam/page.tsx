'use client';

import React from 'react';

export default function ExamPage(): JSX.Element {
  return (
    <div style={{ height: '100vh', width: '100%', padding: 0, margin: 0 }}>
      <iframe
        src="/exam2.html"
        title="Exam"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}


