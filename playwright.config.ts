import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: "e2e/tests",

    // Run all tests in parallel.
    fullyParallel: false,

    // Reporter to use
    reporter: "html",

    timeout: 80000,

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: "http://127.0.0.1:3000",

        // Collect trace when retrying the failed test.
        trace: "on-first-retry",

        testIdAttribute: 'data-test'
    },
    // Configure projects for major browsers.
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});