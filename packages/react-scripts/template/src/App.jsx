import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkHeading from 'bpk-component-heading';
import BpkParagraph from 'bpk-component-paragraph';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="App__header">
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkHeading level="h1">Welcome to React + Backpack</BpkHeading>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </header>
    <main className="App__main">
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkParagraph>
              To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
            </BpkParagraph>
            <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </main>
  </div>
);

export default App;
