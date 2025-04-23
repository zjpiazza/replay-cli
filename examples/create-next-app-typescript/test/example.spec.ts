import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const firstElement = await page.locator('ol > li:nth-child(1)');
  const secondElement = await page.locator('ol > li:nth-child(2)');

  await expect(firstElement).toHaveText(/Get started by editing.*src\/app\/page\.tsx.*/);
  await expect(secondElement).toHaveText("Save and see your changes instantly.");
});
