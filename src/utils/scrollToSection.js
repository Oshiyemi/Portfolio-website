function getSectionElement(sectionOrId) {
  if (typeof sectionOrId === "string") {
    return document.getElementById(sectionOrId);
  }

  return sectionOrId instanceof HTMLElement ? sectionOrId : null;
}

function getNavbarHeight() {
  const nav = document.querySelector('[data-site-nav="primary"]');
  if (nav instanceof HTMLElement) {
    return nav.getBoundingClientRect().height;
  }

  const rootStyles = window.getComputedStyle(document.documentElement);
  const cssHeight = Number.parseFloat(rootStyles.getPropertyValue("--nav-height"));
  return Number.isFinite(cssHeight) ? cssHeight : 0;
}

export function getSectionScrollTop(sectionOrId) {
  const section = getSectionElement(sectionOrId);

  if (!section) {
    return 0;
  }

  const navHeight = getNavbarHeight();
  const scrollMarginTop =
    Number.parseFloat(window.getComputedStyle(section).scrollMarginTop) || 0;
  const offset = Math.max(navHeight, scrollMarginTop);

  return Math.max(
    section.getBoundingClientRect().top + window.scrollY - offset,
    0
  );
}

export function scrollToSection(sectionId, behavior = "smooth") {
  const section = getSectionElement(sectionId);

  if (!section) {
    return false;
  }

  window.scrollTo({
    top: getSectionScrollTop(section),
    behavior,
  });

  return true;
}
