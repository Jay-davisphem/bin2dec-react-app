import React, {useState, useEffect} from 'react';
import {bin2dec, dec2bin} from './utils';
import copyToClipboard from './copyToClipboard';
export default function(){
  const [bin, setBin] = useState();
  const [dec, setDec] = useState();
  function handleBin(e){
    let newBin  = e.target.value.trim();
    newBin = newBin.replace(/[^0-1]/g, '');
    setBin(newBin);
    let ans = bin2dec(newBin);
    setDec(isNaN(ans) ? '' : ans);
  }

  function handleDec(e){
    let newDec = e.target.value.trim()
    newDec = newDec.replace(/[^0-9]/g, '');
    setDec(newDec);
    let ans = dec2bin(newDec);
    setBin(isNaN(ans) ? '' : ans);
  }

  return (
    <fieldset>
      <input type="text" id="bin" value={bin} placeholder="Binary"
        onChange={handleBin}
      />
      <button type="button" id="copyBin"
        onClick={() => copyToClipboard(bin)}>
        <span>Copy</span>
      </button>
      <input type="text" id="dec" value={dec} placeholder="Denary"
        onChange={handleDec}
      />
      <button type="button" id="copyDec"
        onClick={() => copyToClipboard(dec)} >
        <span>Copy</span>
      </button>
    </fieldset>
  );
}
