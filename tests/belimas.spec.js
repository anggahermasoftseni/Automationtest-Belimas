import { test, expect } from "@playwright/test";
const data = require("./resources/data.json");

let browser;
let context;
let page;

test.describe("Web App Tests", () => {
    // This hook runs before all tests, starts the browser session and initializes the page
    test.beforeAll(async ({ browser: playwrightBrowser }) => {
        browser = playwrightBrowser;
        context = await browser.newContext();
        page = await context.newPage();
    });

    // This hook runs after all tests, to clean up the browser session
    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test("TC4.1.0 - Open the web page", async () => {
        // Go to web page
        await page.goto("/");

        // Expect a title to contain "Belimas"
        await expect(page).toHaveTitle("Belimas - Simba Refinery");
    });

    test("TC4.1.1 - Login with valid email and correct password", async () => {
        // Go to web page
        await page.goto("/");

        // Click Masuk button
        await page.locator('//span[text()="Masuk"]').click();

        // Fill User Name
        await page.locator('//input[@placeholder="Email"]').fill(data.userName);

        // Fill Password
        await page.locator('//input[@placeholder="Masukkan kata sandi anda"]').fill(data.password);

        // Click Masuk Button
        await page.locator('//span[text()="Masuk"]').click();

        // Pause to keep the browser open
        await page.pause();
    });
    
    test("TC4.1.2 - Login with valid email and incorrect password", async () => {
        const newPage = await context.newPage(); 

        // Go to web page
        await newPage.goto("/");

        // Click Masuk button
        await newPage.locator('//span[text()="Masuk"]').click();

        // Fill User Name
        await newPage.locator('//input[@placeholder="Email"]').fill(data.userName);

        // Fill Password
        await newPage.locator('//input[@placeholder="Masukkan kata sandi anda"]').fill("incorrect");

        // Click Masuk Button
        await newPage.locator('//span[text()="Masuk"]').click();

        // Expect Login Failed
        await expect(newPage.locator('text="Login Gagal"')).toBeVisible();
    });
});
