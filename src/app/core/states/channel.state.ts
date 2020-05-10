import { Channel } from "./../models/channel.model";
export class ChannelState {
  channels: Channel[];
}

export const initialState = { channels: [] }
