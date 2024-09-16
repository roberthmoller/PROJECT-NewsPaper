# Hacker News Client

A client for the Hacker News API.

## Getting Started <a id="getting-started"/>

Instructions for setting up the project locally.

1. Clone the repository:
   ```bash
   git clone https://github.com/roberthmoller/PROJECT-NewsPaper.git
   cd PROJECT-NewsPaper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your GROQ API key:
   ```
   GROQ_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

> Note: Make sure not to commit your `.env` file to version control. It's already included in `.gitignore`.

## Developing <a id="developing"/>

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```
or start the server and open the app in a new browser tab

```bash
npm run dev -- --open
```

## Building <a id="building"/>

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


