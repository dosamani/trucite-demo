// tests/smoke.spec.ts
import { test, expect } from '@playwright/test';

test.describe('TruCite Smoke Checks', () => {
  test('homepage loads and key UI is present', async ({ page }) => {
    // Open local dev or deployed site
    await page.goto(process.env.PREVIEW_URL || 'http://localhost:3000', {
      waitUntil: 'domcontentloaded',
    });

    // Logo size guard
    const logo = page.locator('.heroLogo');
    await expect(logo).toBeVisible();
    const box = await logo.boundingBox();
    expect(box?.width).toBeLessThan(400);

    // Check Truth button visible + enabled
    const btn = page.getByRole('button', { name: /check truth/i });
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();

    // Input placeholder centered
    const input = page.locator('.claim-input');
    await expect(input).toHaveAttribute('placeholder', /claim|snippet/i);

    // Footer links exist
    for (const label of [
      'FAQ',
      'Contact Us',
      'Suggestions',
      'Terms',
      'Privacy',
      'Disclaimer',
    ]) {
      await expect(page.getByRole('link', { name: label })).toBeVisible();
    }
  });
});
