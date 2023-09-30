interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin User'],
  customerRoles: [],
  tenantRoles: ['Admin User', 'Election Officer', 'Data Entry Operator', 'Voter'],
  tenantName: 'Party',
  applicationName: 'Voter List',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage parties'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c6c2b462-40b9-41a0-85b8-e748fc2567a4',
};
