'use client';

import React from 'react';

export default function ExamPage() {
  return (
    <div style={{ height: '100vh', width: '100%', padding: 0, margin: 0 }}>
      <iframe
        src="/exam-mock.html"
        title="Exam"
        style={{ border: 'none', width: '100vw', height: '100vh', minWidth: '1280px' }}
      />
    </div>
  );
}


