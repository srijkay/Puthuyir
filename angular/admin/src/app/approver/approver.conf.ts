export const approverConf = {
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
      {label: 'Approval Management', iconClasses: 'fa fa-th-list', children: [
        {label: 'Pending Approvals', route: 'approverMngt/pendingApprovals'},       
        {label: 'Reports', route: 'approverMngt/pendingApprovals'}       
       ]}
    ]};
