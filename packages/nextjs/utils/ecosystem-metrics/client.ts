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

    // Replace token names with links (only first occurrence)
    Object.entries(tokenLinks).forEach(([token, link]) => {
      text = text.replace(new RegExp(token), `<a href="${link}" target="_blank">${token}</a>`);
    });

    return text;
  } catch (error) {
    console.error("Error loading metrics:", error);
    return "Error loading ecosystem metrics. Please try again later.";
  }
}
