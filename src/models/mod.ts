export class Mod{
  private Name:string;
  private Type:string;
  private Polarity:string;
  private Stats:string[];
  private Mod:string[];

  constructor(){}

  getName(): string {
    return this.Name;
  }

  setName(value: string) {
    this.Name = value;
  }

  getType(): string {
    return this.Type;
  }

  setType(value: string) {
    this.Type = value;
  }

  getPolarity(): string {
    return this.Polarity;
  }

  setPolarity(value: string) {
    this.Polarity = value;
  }

  getStats(): string[] {
    return this.Stats;
  }

  setStats(value: string[]) {
    this.Stats = value;
  }

  getMod(): string[] {
    return this.Mod;
  }

  setMod(value: string[]) {
    this.Mod = value;
  }
}
