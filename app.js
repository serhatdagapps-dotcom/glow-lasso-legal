(() => {
  const data = window.GLOW_LASSO_SITE_DATA;
  const supported = Object.keys(data.locales);
  const browser = (navigator.language || 'en').replace('-', '_');
  function normalize(raw) {
    if (!raw) return 'en';
    if (supported.includes(raw)) return raw;
    const lower = raw.toLowerCase();
    if (lower.startsWith('pt')) return 'pt_BR';
    if (lower.startsWith('zh')) return /tw|hk|mo|hant/.test(lower) ? 'zh_Hant' : 'zh_Hans';
    const base = lower.split(/[-_]/)[0];
    return supported.find(x => x.toLowerCase() === base) || 'en';
  }
  let locale = normalize(localStorage.getItem('glow-lasso-site-locale') || browser);
  const page = document.body.dataset.page || 'home';
  const select = document.querySelector('#language-select');
  if (select) {
    supported.forEach(key => {
      const opt = document.createElement('option');
      opt.value = key; opt.textContent = data.locales[key].nativeName; select.appendChild(opt);
    });
    select.value = locale;
    select.addEventListener('change', () => { locale = select.value; localStorage.setItem('glow-lasso-site-locale', locale); render(); });
  }
  function paragraphs(container, text) {
    container.innerHTML = '';
    text.split(/\n\s*\n/).forEach(part => { const p=document.createElement('p'); p.textContent=part; container.appendChild(p); });
  }
  function t(key){ return data.locales[locale][key] || data.locales.en[key] || key; }
  function render(){
    const loc = data.locales[locale];
    document.documentElement.lang = locale === 'pt_BR' ? 'pt-BR' : locale.replace('_','-');
    document.documentElement.dir = loc.rtl ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-t]').forEach(el => { const key=el.dataset.t; el.textContent=t(key); });
    document.querySelectorAll('[data-email]').forEach(el => { el.textContent=data.email; if(el.tagName==='A') el.href='mailto:'+data.email; });
    document.querySelectorAll('[data-publisher]').forEach(el => el.textContent=data.publisher);
    document.querySelectorAll('[data-brand]').forEach(el => el.textContent=data.brand);
    const bodyMap = {privacy:'privacyPolicyBody',kvkk:'kvkkNoticeBody',terms:'termsOfUseBody',ads:'advertisingConsentBody'};
    if(bodyMap[page]) { const el=document.querySelector('#legal-copy'); if(el) paragraphs(el,t(bodyMap[page])); }
    const titleMap = {home:'privacyLegal',privacy:'privacyPolicy',kvkk:'kvkkNotice',terms:'termsOfUse',ads:'advertisingConsent',support:'contact'};
    document.title = (page==='home' ? data.brand : t(titleMap[page])+' — '+data.brand);
    document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.nav===page));
  }
  render();
})();