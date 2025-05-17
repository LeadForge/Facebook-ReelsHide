function removeReels() {
  const selectors = [
    'a[href*="reels"]',
    'div[aria-label="Reels"]',
    'div[role="complementary"] div[aria-label="Reels and short videos"]',
    'div[data-pagelet*="Reels"]',
    'div[data-pagelet*="FeedUnit_"]:has(a[href*="/reel/"])'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = "none";
    });
  });
}

// Initial run
removeReels();

// Run periodically to catch dynamic content
setInterval(removeReels, 2000);
