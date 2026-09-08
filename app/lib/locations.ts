export type SalonLocation = {
  /** Short name shown in the booking picker. */
  name: string;
  /** Street address shown under the name. */
  address: string;
  /** Vagaro page that handles online booking for this location. */
  bookingUrl: string;
};

export const locations: SalonLocation[] = [
  {
    name: 'Nexton',
    address: '205 S Cross Creek Dr Unit C, Summerville, SC',
    bookingUrl: 'https://www.vagaro.com/jsk',
  },
  {
    name: 'Goose Creek',
    address: '604 St James Ave Unit J, Goose Creek, SC',
    bookingUrl: 'https://www.vagaro.com/jskofsc',
  },
];
