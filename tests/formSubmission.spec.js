// @ts-check
const { test, expect } = require("@playwright/test");
const data = require("./resources/data.json")

test("C8 - Access The Web Page", async ({ page }) => {
  // Go to web page".
  await page.goto("/");

  // Expect a title to contain "Sample Web Form".
  await expect(page).toHaveTitle("Swag Labs");

});

test("C24 - UI Element Presence", async ({ page }) => {
  // Go to web page".
  await page.goto("/");

  // Ensure that the "Title" is present.
  // await expect(page.locator('#title')).toBeVisible();

  // Ensure that the "First Name" is present.
  await expect(page.locator('#user-name')).toBeVisible();

  // Ensure that the "Middle Name" is present.
  await expect(page.locator('#password')).toBeVisible();

  // Ensure that the "Last Name" is present.
  await expect(page.locator('#login-button')).toBeVisible();

});

test("C3 - Positive Case - Login success", async ({ page }) => {

  await page.goto("/");

  // Fill User Name
  await page.locator('#user-name').fill(data.userName);

  // Fill Password
  await page.locator('#password').fill(data.password);

  // Click submit button and verifiy button functionality
  await page.locator('#login-button').click();


  // // Verifiy prompt for submits successfully
  // await expect(page.locator('text=User Information')).toBeVisible;
  // await expect(page.locator('#modalContent')).toHaveText(new RegExp(`${data.title} ${data.firstName} ${data.middleName} ${data.lastName}`));
  // await expect(page.locator('#modalContent')).toHaveText(new RegExp(`${data.email}`));
  // await expect(page.locator('#modalContent')).toHaveText(new RegExp(`${data.phoneNumber}`));
  // await expect(page.locator('#modalContent')).toHaveText(new RegExp(`${data.province}`));
  // await expect(page.locator('#modalContent')).toHaveText(new RegExp(`${data.city}`));

});
