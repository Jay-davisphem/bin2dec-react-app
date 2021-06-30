import React, {useState, useRef, useEffect} from 'react';
import Converter from './components/Converter';
export default function App(){
  return (
    <section>
      <h1>bin2dec</h1>
      <aside>
        <p><span>Author:</span> David Oluwafemi</p>
        <p><span>GitHub:</span>
          <a href="https://github.com/Jay-davisphem">
          @Jay-davisphem
          </a>
        </p>
      </aside>
      <section>
        <form>
          <Converter />
       </form>
      </section>
    </section>
  );
}
