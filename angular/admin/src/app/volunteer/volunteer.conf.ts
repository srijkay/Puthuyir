export const volunteerConf = {
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
      // {label: 'Volunteer NAVIGATION', separator: true},
      {label: 'Volunteer Management', iconClasses: 'fa fa-th-list', children: [
        {label: 'View Assigned Schools', route: 'volunteerMngt/viewSchool'},
        {label: 'Calender', route: 'volunteerMngt/viewCalendar'},
        {label: 'Claim Expenses', route: 'volunteerMngt/claimExpenses'},
       ]}
    ]};
