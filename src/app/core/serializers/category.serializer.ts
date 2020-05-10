import { Channel } from "./../models/channel.model";

export class ChannelSerializer {
  fromJSON(json: any): Channel {
      let channel = new Channel();
      channel.setId(json.id)
      channel.setName(json.name)
      return channel;
  }

  toJSON(channel: Channel): any {
    return {
      id: channel.id,
      name: channel.name,
    };
  }
}
