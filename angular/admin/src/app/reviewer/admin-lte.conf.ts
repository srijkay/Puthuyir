export const adminLteConf = {
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
    {label: 'VOLUNTEER NAVIGATION', separator: true},
   // {label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Volunteer Management', iconClasses: 'fa fa-th-list', children: [
        {label: 'View Assigned Schools', route: 'volunteermanagement/viewassignedschools'},
        {label: 'Calendar', route: 'volunteermanagement/calendar'},
        {label: 'Claim Form', route: 'volunteermanagement/claimform'}
      ]},

      {label: 'ADMINISTRATION NAVIGATION', separator: true},
      {label: 'Assignments', iconClasses: 'fa fa-th-list', children: [
        {label: 'Access Reviews', route: 'accessreview'},
        {label: 'Assign Schools to Volunteer ', route: 'assignSchoolstoVolunteer '},
        {label: 'Pending Tasks', route: 'Adminstrator/PendingTasks'},
        {label: 'Manage Users and Roles', route: 'Adminstrator/ManageUsersandRoles'},
        {label: 'Manage Events', route: 'Adminstrator/ManageEvents'}
      ]},

    {label: 'COMPONENTS', separator: true},
    {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        {label: 'Default Box', route: 'boxs/box'},
        {label: 'Info Box', route: 'boxs/info-box'},
        {label: 'Small Box', route: 'boxs/small-box'}
      ]},
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {label: 'Form', iconClasses: 'fa fa-files-o', children: [
        {label: 'Input Text', route: 'form/input-text'}
    ]},
    {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
