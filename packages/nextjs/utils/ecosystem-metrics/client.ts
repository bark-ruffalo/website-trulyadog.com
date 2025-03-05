/**
 * Client-side utils for fetching and formatting ecosystem metrics
 */

/**
 * Fetches ecosystem metrics from the API and formats them with appropriate links
 * @returns Formatted HTML string with metrics data
 */
export async function loadFormattedMetrics(): Promise<string> {
  try {
    const response = await fetch("/api/transparency");
    let text = await response.text();

    // Add links for X (Twitter) accounts first
    text = text.replace(/@(\w+)(?!_bot)/g, '<a href="https://x.com/$1" target="_blank">@$1</a>');

    // Then add links for Telegram agents
    text = text.replace(/@(\w+_bot)/g, '<a href="https://t.me/$1" target="_blank">@$1</a>');

    // Add links for specific tokens
    const tokenLinks: { [key: string]: string } = {
      MAR: "https://app.virtuals.io/prototypes/0x5066d3df51FE1546b110918bf9f578baB92979c2",
      QTG: "https://app.virtuals.io/virtuals/20286",
    };

    // Add links for specific phrases
    const phraseLinks: { [key: string]: string } = {
      "have been migrated irreversibly":
        "https://basescan.org/token/0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a?a=0x000000000000000000000000000000000000dead",
      "are in a burn address":
        "https://basescan.org/token/0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a?a=0x000000000000000000000000000000000000dEaD",
      "are in an address with a lost private key":
        "https://basescan.org/token/0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a?a=0xb3465F07A33E282A0f2f378F534D3f5241aD1940",
      "are in locked PAWSY/VIRTUAL LP":
        "https://basescan.org/token/0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a?a=0x96FC64caE162C1Cb288791280c3Eff2255c330a8",
      "DAO main address": "https://basescan.org/address/0xc638fb83d2bad5dd73d4c7c7dec0445d46a0716f",
      "#1": "https://basescan.org/address/0xbdc2be9628daef54f8b802357a86b550fe164acf",
      "#2": "https://solscan.io/account/DL2q1uWW3oNjE6gDSt7L1yWmrjpH4pXdCPrqC41dcTDF",
    };

    // Replace token names with links (only first occurrence)
    Object.entries(tokenLinks).forEach(([token, link]) => {
      text = text.replace(new RegExp(token), `<a href="${link}" target="_blank">${token}</a>`);
    });

    // Replace phrases with links
    Object.entries(phraseLinks).forEach(([phrase, link]) => {
      text = text.replace(phrase, `<a href="${link}" target="_blank">${phrase}</a>`);
    });

    return text;
  } catch (error) {
    console.error("Error loading metrics:", error);
    return "Error loading ecosystem metrics. Please try again later.";
  }
}
