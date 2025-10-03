import { test, expect } from '@playwright/test';

test('TruCite homepage basics', async ({ page }) => {
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

  // Logo size guard
  const logo = page.locator('.heroLogo');
  await expect(logo).toBeVisible();
  const box = await logo.boundingBox();
  expect(box?.width).toBeLessThan(400);

  // Check Truth button visible
  const btn = page.getByRole('button', { name: /check truth/i });
  await expect(btn).toBeVisible();
  await expect(btn).toBeEnabled();

  // Footer links exist
  for (const label of ['FAQ','Contact Us','Suggestions','Terms','Privacy','Disclaimer']) {
    await expect(page.getByRole('link', { name: label })).toBeVisible();
  }
});
