FROM mcr.microsoft.com/playwright:v1.41.2-jammy

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY e2e /app/e2e
COPY package.json /app/
COPY playwright.config.ts /app/

# Install the dependencies in Node environment
RUN npm install
RUN npx playwright install

CMD ["npx", "playwright", "test", "e2e/tests", "--project", "chromium"]
