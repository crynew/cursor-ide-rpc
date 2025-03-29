import { Client, type SetActivity } from "@xhayper/discord-rpc";
import { DISCORD_CLIENT_ID, DEFAULT_IMAGE_KEY, DEFAULT_IMAGE_TEXT } from "../config/constants";

export class DiscordService {
    private client: Client | undefined;
    private startTimestamp: number;

    constructor() {
        this.startTimestamp = Date.now();
        this.client = new Client({ clientId: DISCORD_CLIENT_ID });
    }

    async initialize(): Promise<void> {
        try {
            await this.client?.login();
            console.log('Connected to Discord!');
        } catch (error) {
            console.error('Error connecting to Discord:', error);
            throw error;
        }
    }

    async updatePresence(activity: SetActivity): Promise<void> {
        if (!this.client?.user) {
            return;
        }

        try {
            await this.client.user.setActivity({
                ...activity,
                startTimestamp: this.startTimestamp,
                largeImageKey: DEFAULT_IMAGE_KEY,
                largeImageText: DEFAULT_IMAGE_TEXT,
                instance: true
            }, process.pid);
        } catch (error) {
            console.error('Error updating Discord presence:', error);
        }
    }

    async clearPresence(): Promise<void> {
        if (!this.client?.user) {
            return;
        }

        try {
            await this.client.user.clearActivity(process.pid);
        } catch (error) {
            console.error('Error clearing Discord presence:', error);
        }
    }

    destroy(): void {
        if (this.client?.user) {
            this.client.user.clearActivity(process.pid);
            this.client.destroy();
            this.client = undefined;
        }
    }
} 