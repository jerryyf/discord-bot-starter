/*
Interface for TS, as 'commands' is not a default existing attribute object on Discord.Client
See https://stackoverflow.com/questions/69500556/discord-js-guide-property-commands-does-not-exist-typescript
*/

import { Client, Collection } from "discord.js"

export default class CustomClient extends Client {
  commands: Collection<any, any>;

  constructor(options: any) {
   super(options);
   this.commands = new Collection();
  }
}