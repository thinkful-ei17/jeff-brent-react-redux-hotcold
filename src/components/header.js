import React from 'react';

import TopNavConnected from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNavConnected
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
