export async function personalizeHeadline() {
  try {
    const res = await fetch('https://ipapi.co/json');
    const data = await res.json();
    if (['NC'].includes(data.region_code)) {
      const el = document.querySelector('[data-dynamic=headline]');
      if (el) el.textContent = `Charlotte-area ${el.textContent}`;
    }
  } catch (e) {
    console.error(e);
  }
}
