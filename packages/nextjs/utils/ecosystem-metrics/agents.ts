import { AgentStatus } from "./types";
import net from "net";

export const AI_AGENTS = [
  {
    name: "Bark Ruffalo",
    handle: "@TrulyADog",
    telegramHandle: "@BarkRuffalo_bot",
    ipEnv: "BARKRUFFALO_IP",
    goal: "promote BR ecosystem",
  },
  {
    name: "The Great Pupdini",
    handle: "@TheGreatPupdini",
    telegramHandle: "@TheGreatPupdini_bot",
    ipEnv: "PUPDINI_IP",
    goal: "promote BR ecosystem, help by answering questions in the Telegram public group",
  },
  {
    name: "The Alpha Doggo",
    handle: "@TheAlphaDoggo",
    telegramHandle: "@TheAlphaDoggo_bot",
    ipEnv: "ALPHADOGGO_IP",
    goal: "promote BR ecosystem, help with tech support for the sniper in the private groups",
  },
  {
    name: "Shill",
    handle: "@laur_science",
    ipEnv: "SHILL_IP",
    goal: "shill and raid for the BR ecosystem",
  },
  {
    name: "Early Warning System",
    handle: "@BR_EWS",
    telegramHandle: "@br_ews_bot",
    ipEnv: "EWS_IP",
    goal: "identify high-potential meme coin launches, alert stakers, snipe for the DAO",
  },
] as const;

async function checkAgentStatus(connection: string): Promise<"online" | "offline"> {
  const [ip, portStr] = connection.split(":");
  const port = parseInt(portStr || "65311");

  if (ip === "1.3.3.7") {
    return "online";
  }

  return new Promise(resolve => {
    const socket = new net.Socket();
    const timeout = 2000;

    socket.setTimeout(timeout);

    socket.on("connect", () => {
      socket.destroy();
      resolve("online");
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve("offline");
    });

    socket.on("error", () => {
      socket.destroy();
      resolve("offline");
    });

    socket.connect(port, ip);
  });
}

export async function checkAllAgentsStatus(): Promise<AgentStatus[]> {
  const statusChecks = AI_AGENTS.map(async agent => {
    const connection = process.env[agent.ipEnv];
    if (!connection) {
      console.warn(`${agent.name} connection not found, using default status`);
      return { name: agent.name, status: "online" as const };
    }
    const status = await checkAgentStatus(connection);
    return { name: agent.name, status };
  });

  return Promise.all(statusChecks);
}
