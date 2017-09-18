export class Proposal {
  constructor(
    public portfolio_url: string = 'http://',
    public id?: number,
    public customer?: string,
    public tools?: string,
    public estimated_rate?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {}
}
