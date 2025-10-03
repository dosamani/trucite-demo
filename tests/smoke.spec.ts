import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('TruCite Smoke Checks', () => {
  test('homepage loads and key UI is present', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    await expect(page.getByRole('heading', { name: /welcome to trucite/i })).toBeVisible();

    await expect(page.getByRole('button', { name: /fast/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /transparent/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /plug & play/i })).toBeVisible();

    await expect(page.getByRole('button', { name: /check truth/i })).toBeVisible();
  });
});
