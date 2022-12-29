document.querySelector('#hamburger')?.addEventListener('click', () => {
  document.querySelector('#mobile-menu')?.classList.toggle('hidden');
});

document.querySelector('#mobile-menu-close')?.addEventListener('click', () => {
  document.querySelector('#mobile-menu')?.classList.toggle('hidden');
});

export {};
