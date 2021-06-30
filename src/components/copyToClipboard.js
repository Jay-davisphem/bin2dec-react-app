export default function copyToClipboard(val){
  navigator.clipboard.writeText(val);
  const root = document.querySelector("fieldset");
  const modal = document.createElement('div');
  modal.textContent = "Copied to Clipboard✓";
  modal.classList.add('copyI');
  root.appendChild(modal);
  setTimeout(() => {
    root.removeChild(modal);
  }, 5000);
}
