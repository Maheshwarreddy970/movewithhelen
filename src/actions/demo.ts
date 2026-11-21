import { resetActivity } from "@/actions/activity";
import { resetAgents } from "@/actions/agents";
import { resetMessages } from "@/actions/messages";
import { resetProperties } from "@/actions/properties";
import { resetRequests } from "@/actions/requests";

// Restores every dashboard store to its seed data.
export function resetDemoData() {
  resetProperties();
  resetAgents();
  resetRequests();
  resetMessages();
  resetActivity();
}
