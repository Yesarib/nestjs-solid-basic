export interface MessageService {
    sendMessage(to: string, message: string): void;
}