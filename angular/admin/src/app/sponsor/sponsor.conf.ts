export const sponsorConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
      // {label: 'ADMINISTRATION NAVIGATION', separator: true},
      {label: 'Sponsor Management', iconClasses: 'fa fa-th-list', children: [
        {label: 'Contribute for Claims', route: 'sponsorMngt/contClaims'},
        {label: 'Refer volunteer', route: 'sponsorMngt/referVolunteer'},
       ]}
    ]};
