export type Platform = 'Web' | 'Mobile' | 'Desktop';
export type TransactionStatus = 'Paid' | 'Pending' | 'Failed';
export interface Point { date: string; revenue: number; costs: number; }
export interface Transaction { id: string; customer: string; email: string; amount: number; status: TransactionStatus; date: string; platform: Platform; initials: string; color: string; }

export const revenueData: Point[] = [
  { date: 'Sep 01', revenue: 26, costs: 12 }, { date: 'Sep 03', revenue: 31, costs: 14 }, { date: 'Sep 05', revenue: 28, costs: 13 },
  { date: 'Sep 07', revenue: 38, costs: 16 }, { date: 'Sep 09', revenue: 35, costs: 15 }, { date: 'Sep 11', revenue: 47, costs: 19 },
  { date: 'Sep 13', revenue: 43, costs: 18 }, { date: 'Sep 15', revenue: 54, costs: 21 }, { date: 'Sep 17', revenue: 49, costs: 20 },
  { date: 'Sep 19', revenue: 62, costs: 24 }, { date: 'Sep 21', revenue: 58, costs: 22 }, { date: 'Sep 23', revenue: 72, costs: 27 },
  { date: 'Sep 25', revenue: 67, costs: 25 }, { date: 'Sep 27', revenue: 83, costs: 31 }, { date: 'Sep 29', revenue: 78, costs: 29 },
  { date: 'Sep 30', revenue: 96, costs: 34 },
];

export const transactions: Transaction[] = [
  { id: 'TF-2048', customer: 'Olivia Rhye', email: 'olivia@layers.com', amount: 2480, status: 'Paid', date: '2026-09-30', platform: 'Web', initials: 'OR', color: 'violet' },
  { id: 'TF-2047', customer: 'Phoenix Baker', email: 'phoenix@baker.io', amount: 1250, status: 'Pending', date: '2026-09-29', platform: 'Mobile', initials: 'PB', color: 'amber' },
  { id: 'TF-2046', customer: 'Lana Steiner', email: 'lana@studio.co', amount: 890, status: 'Paid', date: '2026-09-28', platform: 'Desktop', initials: 'LS', color: 'rose' },
  { id: 'TF-2045', customer: 'Demi Wilkinson', email: 'demi@catalog.app', amount: 3200, status: 'Failed', date: '2026-09-27', platform: 'Web', initials: 'DW', color: 'cyan' },
  { id: 'TF-2044', customer: 'Candice Wu', email: 'candice@company.com', amount: 675, status: 'Paid', date: '2026-09-26', platform: 'Mobile', initials: 'CW', color: 'emerald' },
  { id: 'TF-2043', customer: 'Natali Craig', email: 'natali@orbit.dev', amount: 1940, status: 'Paid', date: '2026-09-25', platform: 'Web', initials: 'NC', color: 'blue' },
  { id: 'TF-2042', customer: 'Drew Cano', email: 'drew@bright.com', amount: 430, status: 'Pending', date: '2026-09-24', platform: 'Desktop', initials: 'DC', color: 'pink' },
];

export const metrics = [
  { label: 'Total revenue', value: '$48,294', change: '+12.8%', positive: true, icon: 'revenue', data: [24, 30, 28, 36, 32, 45, 43, 54, 50, 67, 61, 74] },
  { label: 'Active users', value: '12,846', change: '+8.2%', positive: true, icon: 'users', data: [25, 27, 31, 29, 35, 38, 36, 44, 41, 49, 51, 60] },
  { label: 'Conversion rate', value: '3.64%', change: '-0.4%', positive: false, icon: 'conversion', data: [55, 52, 57, 50, 54, 48, 52, 46, 49, 42, 45, 39] },
  { label: 'Avg. session', value: '4m 32s', change: '+2.4%', positive: true, icon: 'session', data: [30, 32, 29, 38, 36, 42, 40, 44, 43, 49, 51, 58] },
];
