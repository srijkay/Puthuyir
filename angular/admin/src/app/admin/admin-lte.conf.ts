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
      // {label: 'ADMINISTRATION NAVIGATION', separator: true},
      {label: 'Assignments', iconClasses: 'fa fa-th-list', children: [
        {label: 'Access Reviews', route: 'assignments/accessReview'},
        {label: 'Schools New Requirements', route: 'assignments/schoolNewReq'},
        {label: 'Schools Maintainence Requests', route: 'assignments/schoolMaintanenceReq'},
        {label: 'Assign School To Volunteer', route: 'assignments/assignSchoolToVolunteer'},
        {label: 'Manage Users and Roles', route: 'assignments/manageUsersAndRoles'},
        {label: 'Manage Events', route: 'assignments/manageEvents'},
      ]},

  //  {label: 'COMPONENTS', separator: true},
    {label: 'Reports', iconClasses: 'fa fa-files-o', children: [
        {label: 'School-Wise Reports', route: 'reports/schoolWiseReports'},
        {label: 'Retailer Contributions', route: 'reports/retailerContribution'},
        {label: 'Sponser Contributions', route: 'reports/sponserContribution'}
      ]},
      {label: 'Vendor Management', iconClasses: 'fa fa-files-o', children: [
        {label: 'Upload Voice', route: 'vendorManage/uploadVoice'},
        {label: 'Manage Vendors', route: 'vendorManage/manageVendors'}
      ]},
      {label: 'Payment Management', iconClasses: 'fa fa-files-o', children: [
        {label: 'Fund Disbursment', route: 'paymentManage/fundDisbursment'},
        {label: 'Upload Receipt', route: 'paymentManage/uploadReceipt'},
        {label: 'Initiate Work Order', route: 'paymentManage/initiateWorkOrder'}
      ]},
      {label: 'Workflow Management', iconClasses: 'fa fa-files-o', children: [
        {label: 'Pending Workflows', route: 'workflowManage/pendingWorkflow'},
        {label: 'Project Clousure', route: 'paymentManage/projectClousure'}
      ]}
    ]};
