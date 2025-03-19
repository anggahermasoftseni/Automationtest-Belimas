import { test, expect } from "@playwright/test";
const data = require("./resources/data.json")

test("TC4.1.0 - Open the web page", async({page}) => {
    // Go to web page
    await page.goto("/");

    // Expect a title to contain "Belimas"
    await expect(page).toHaveTitle("Belimas - Rimba Refinery")
} );

test("TC4.1.1 - Login with valid email and correct password", async({page}) => {
    // Go to web page
    await page.goto("/");

    // Clik Masuk button
    await page.locator('//span[text()="Masuk"]').click();

    // Fill User Name
    await page.locator('//input[@placeholder="Email"]').fill(data.userName);

    // Fill Password
    await page.locator('//input[@placeholder="Masukkan kata sandi anda"]').fill(data.password);

    // Click Masuk Button
    await page.locator('//span[text()="Masuk"]').click();


    // Pause to keep the browser open
    await page.pause();
} );
