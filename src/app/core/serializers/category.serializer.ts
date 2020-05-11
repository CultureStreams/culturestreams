import { Channel } from "./../models/channel.model";

export class ChannelSerializer {
  fromJSON(json: any): Channel {
      let channel = new Channel();
      channel.id = json.id;
      channel.name = json.name;
      return channel;
  }

  toJSON(channel: Channel): any {
    return {
      name: channel.name,
    };
  }
}
