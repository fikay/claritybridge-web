import { test, expect } from "@playwright/test";

test.describe("ClarityBridge Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // ── Page load ──────────────────────────────────────────────────────────
  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/ClarityBridge/);
  });

  test("hero section is visible", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
  });

  test("all major sections are present", async ({ page }) => {
    for (const id of [
      "#who-we-serve",
      "#services",
      "#about",
      "#testimonials",
      "#contact",
    ]) {
      await expect(page.locator(id)).toBeAttached();
    }
  });

  // ── Navigation ─────────────────────────────────────────────────────────
  test("logo is visible in header", async ({ page }) => {
    const logo = page.locator('img[alt="ClarityBridge"]').first();
    await expect(logo).toBeVisible();
  });

  test("hero CTA buttons are present", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /book a discovery call/i }).first()
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /explore services/i })
    ).toBeVisible();
  });

  // ── Contact form ────────────────────────────────────────────────────────
  test("contact form fields are present", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#message")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /send message/i })
    ).toBeVisible();
  });

  test("contact form accepts input", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.fill("#name", "Test User");
    await page.fill("#email", "test@example.com");
    await page.fill("#message", "I would like to learn more about your services.");
    await expect(page.locator("#name")).toHaveValue("Test User");
    await expect(page.locator("#email")).toHaveValue("test@example.com");
  });

  // ── Dark / light mode ──────────────────────────────────────────────────
  test("dark mode toggle is present in header", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /toggle dark mode/i });
    await expect(toggle).toBeVisible();
  });

  test("clicking theme toggle changes theme attribute", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /toggle dark mode/i });
    const html = page.locator("html");
    const initialClass = await html.getAttribute("class");
    await toggle.click();
    await page.waitForTimeout(300);
    const updatedClass = await html.getAttribute("class");
    // Class should change (dark added or removed)
    expect(updatedClass).not.toEqual(initialClass);
  });

  // ── Mobile menu ─────────────────────────────────────────────────────────
  test("mobile menu trigger is present on small viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const trigger = page.getByTestId("mobile-menu-trigger");
    await expect(trigger).toBeVisible();
  });

  test("mobile menu opens when hamburger is clicked", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const trigger = page.getByTestId("mobile-menu-trigger");
    await trigger.click();
    // Sheet content should appear
    await expect(
      page.getByRole("navigation", { name: /mobile navigation/i })
    ).toBeVisible();
  });

  // ── Footer ──────────────────────────────────────────────────────────────
  test("footer is present with copyright", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("ClarityBridge");
  });
});
